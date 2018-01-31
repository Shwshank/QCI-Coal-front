import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-the-summary',
  templateUrl: './the-summary.component.html',
  styleUrls: ['./the-summary.component.css']
})
export class TheSummaryComponent implements OnInit {

  PSUArray : any;
  psu: any;
  CSummary: any;
  last_update: any;

  constructor(private router: Router, private ProjectService: ProjectService) {

    let temp = localStorage.getItem('psuidname');
    temp = JSON.parse(temp);
    this.PSUArray = temp;

    this.ProjectService.emitCSummary.subscribe((res)=>{
      // console.log(res);
      this.CSummary = this.PSUArray[res].name;
      // console.log(this.CSummary);
    });

     let flag =  localStorage.getItem('not_All_Summary');
     if(flag!='1') {
      //  console.log(flag);
       this.router.navigate(['home/summary/psusummary'],
           {queryParams: {psu_id: 0}});
     }

  }

  ngOnInit() {
    this.last_update = JSON.parse(localStorage.getItem('last_update_tracker'));
  }

  psuSummary(id, name) {
    localStorage.setItem('summaryFlag','1');
    this.psu = " - "+ name
    this.router.navigate(['home/summary/psusummary'],
        {queryParams: {psu_id: id}});

  }

}
