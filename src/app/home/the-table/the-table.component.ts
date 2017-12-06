import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
import { NgForm } from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';
import './allscript.js';

@Component({
  selector: 'app-the-table',
  templateUrl: './the-table.component.html',
  styleUrls: ['./the-table.component.css']
})

export class TheTableComponent implements OnInit {
  tracker : any;
  date1: any;
  date2: any;
  trackerFlag: any;
  display = false;
  formData = new FormData();
  month: any;
  searchRefreshflag = false;
  cachemonth : any;
  c_month: any;
  last_update: any;
  last_date: any;

  constructor(private ProjectService: ProjectService) {
    this.trackerFlag = localStorage.getItem('trackerFlag');

    if(this.trackerFlag == 0) {
      window.location.reload();
      localStorage.setItem('trackerFlag','1');

    } else {

      let temp = localStorage.getItem('tracker');
      temp = JSON.parse(temp);
      this.tracker = temp;
      // console.log(this.tracker);
      this.display = true;
      this.ProjectService.emitTrackerData.subscribe((res) =>{
        localStorage.setItem('tracker',JSON.stringify(res.data));
        localStorage.setItem('tracker_graph_current',JSON.stringify(res.graph));
        localStorage.setItem('last_date',JSON.stringify(res.last_date));
        // console.log(res);
        if(this.searchRefreshflag){
          window.location.reload();
        }

      });
    }

    this.last_date = localStorage.getItem('last_date');
  }

  ngOnInit() {
    this.last_update = JSON.parse(localStorage.getItem('last_update_tracker'));
    let d = new Date();
    let m = d.getMonth();
    m += 1;
    let y = d.getFullYear();
    this.month = y+'-'+m;
    // console.log(this.month);
    let temp = localStorage.getItem('month_flag');

    if(temp == '1') {
        this.c_month = localStorage.getItem('current_month');
        localStorage.setItem('month_flag','0');

    } else {
      this.c_month = this.month;
    }

    localStorage.setItem('month',this.month);


    this.formData.append('monthdate', this.month);
    this.ProjectService.getTrackerByDate(this.formData, this.month);
    // this.ProjectService.updateTracker();

  }

  ngOnDestroy() {
    localStorage.setItem('trackerFlag','0');
  }

  parseint(data) {
    // console.log(data);
    data = parseInt(data);
    data = +data || 0;
    return data;
  }

  searchByDate() {
    let formData1 = new FormData();
    this.month = this.date2
    formData1.append('monthdate', this.month);
    localStorage.setItem('month_flag','1');
    localStorage.setItem('current_month',this.month);
    // console.log(this.date2);
    this.ProjectService.getTrackerByDate(formData1, this.month);
    //this.ProjectService.getContractByDate(formData);
    this.searchRefreshflag = true;
  }

  calStatus(lifted,needed,days) {
    let act = needed/days;
    let diff = act - lifted;
    let per25 = .25;

    if(lifted>(act)) {
      return "Beyond";
    } else if(diff<(act*per25)) {
      return 'Okay';
    }
    return "Below";
  }
}
