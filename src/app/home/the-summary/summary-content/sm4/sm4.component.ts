import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';
import Chart from 'chart.js';
import './allscript.js';

@Component({
  selector: 'app-sm4',
  templateUrl: './sm4.component.html',
  styleUrls: ['./sm4.component.css']
})
export class Sm4Component implements OnInit {

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
  label6: any;
  label7: any;
  p1: any;
  p2: any;
  p3: any;
  p4: any;
  p5: any;
  p6: any;
  p7: any;
  dd1: any;
  dd2: any;
  dd3: any;
  dp1: any;
  dp2: any;
  dp3: any;

  display = false;
  d3 = "./d3-sun-brust";

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitPSUData.subscribe((res)=>{
      // console.log(res.data);

      this.data1 = res.data[res.id].slipage[0][1];
      this.data2 = res.data[res.id].slipage[1][1];
      this.data3 = res.data[res.id].slipage[2][1];
      this.data4 = res.data[res.id].slipage[3][1];
      this.data5 = res.data[res.id].slipage[4][1];
      this.data6 = res.data[res.id].slipage[5][1];
      this.data7 = res.data[res.id].slipage[6][1];

      this.label1 = res.data[res.id].slipage[0][0];
      this.label2 = res.data[res.id].slipage[1][0];
      this.label3 = res.data[res.id].slipage[2][0];
      this.label4 = res.data[res.id].slipage[3][0];
      this.label5 = res.data[res.id].slipage[4][0];
      this.label6 = res.data[res.id].slipage[5][0];
      this.label7 = res.data[res.id].slipage[6][0];

      this.p1 = res.data[res.id].slipage[0][2];
      this.p2 = res.data[res.id].slipage[1][2];
      this.p3 = res.data[res.id].slipage[2][2];
      this.p4 = res.data[res.id].slipage[3][2];
      this.p5 = res.data[res.id].slipage[4][2];
      this.p6 = res.data[res.id].slipage[5][2];
      this.p7 = res.data[res.id].slipage[6][2];

      this.dd1 = res.data[res.id].slipage2[0][1];
      this.dd2 = res.data[res.id].slipage2[1][1];
      this.dd3 = res.data[res.id].slipage2[2][1];

      this.dp1 = res.data[res.id].slipage2[0][2];
      this.dp2 = res.data[res.id].slipage2[1][2];
      this.dp3 = res.data[res.id].slipage2[2][2];

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
