import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';
import Chart from 'chart.js';

@Component({
  selector: 'app-sm2',
  templateUrl: './sm2.component.html',
  styleUrls: ['./sm2.component.css']
})
export class Sm2Component implements OnInit {

  labels = ['Lifted','Remaining'];

  donutCtx: any;
  myChart: any;
  data1 : any;
  data2 : any;
  data3 : any;
  data4 : any;
  data5 : any;
  data6 : any;
  data7 : any;
  label1: any;
  label2: any;
  label3: any;
  label4: any;
  label5: any;
  display = false;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitPSUData.subscribe((res)=>{

      // console.log(res.data);
      this.data1 = res.data[res.id].results[0][1];
      this.data2 = res.data[res.id].results[1][1];
      this.data3 = res.data[res.id].results[2][1];
      this.data4 = res.data[res.id].results[3][1];
      this.data5 = res.data[res.id].slabreak[1][1];
      this.data6 = res.data[res.id].slabreak[2][1];

      this.label1 = res.data[res.id].results[0][0];
      this.label2 = res.data[res.id].results[1][0];
      this.label3 = res.data[res.id].results[2][0];

      if(this.data1 == 0){
        this.display = false;
      } else {
        this.display = true;

      }

    });
  }

  ngOnInit() {
  }

}
