import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';
import Chart from 'chart.js';

@Component({
  selector: 'app-sm1',
  templateUrl: './sm1.component.html',
  styleUrls: ['./sm1.component.css']
})
export class Sm1Component implements OnInit {

  labels = ['Lifted','Remaining'];

   // @ViewChild('donut') donut: ElementRef;
  donutCtx: any;
  myChart: any;
  data1 :any;
  data2 :any;
  data3 :any;
  data4 :any;
  data5 :any;
  data6 :any;
  display = false;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitPSUData.subscribe((res)=>{
      // console.log(res.data);

      this.data1 = res.data[res.id].vol[0][1];
      this.data2 = res.data[res.id].vol[1][1];
      this.data3 = res.data[res.id].vol[2][1];
      this.data4 = res.data[res.id].vol[3][1];
      this.data5 = res.data[res.id].vol[4][1];

      this.data6 = res.data[res.id].gradeSunBurst;

      // console.log(this.data6);
      this.data6 = JSON.stringify(this.data6);
      localStorage.setItem('sunbrust', this.data6);

      let summaryFlag = localStorage.getItem('summaryFlag');
      // if(summaryFlag =='1'){
      //   localStorage.setItem('summaryFlag','0');
      //   window.location.reload();
      //
      // }

      if(this.data1 == 0){
        this.display = false;
      } else {
        this.display = true;
        // this.getGraph();
      }
    });
  }

  ngOnInit() {
  }

}
