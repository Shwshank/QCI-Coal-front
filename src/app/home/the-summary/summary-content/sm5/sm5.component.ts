import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';
import Chart from 'chart.js';

@Component({
  selector: 'app-sm5',
  templateUrl: './sm5.component.html',
  styleUrls: ['./sm5.component.css']
})
export class Sm5Component implements OnInit {

  labels = ['Lifted','Remaining'];

  @ViewChild('donut') donut: ElementRef;
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

  display= false;

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

      if(this.data5 == 0){
        this.display = false;
      } else {
        this.display = true;
        this.getGraph();
      }

    });
  }

  ngOnInit() {
  }

  getGraph() {

    this.donutCtx = this.donut.nativeElement.getContext('2d');

     this.myChart = new Chart(this.donutCtx, {
        type: 'doughnut',
        data: {
           labels: [this.label1,this.label2,this.label3,this.label4, this.label5, this.label6, this.label7],
           datasets: [{
               data : [this.data1,this.data2,this.data3,this.data4, this.data5, this.data6, this.data7],
               backgroundColor: ['#0275D8','#469846','#8E8E8E','#F0AD4E','#d9534f','#795548','#673ab7']
           },
         ]
        },
        options: {
             responsive: true,
             legend: {
                  display: false,
                 position: 'top',

             },
             title: {
                 display: true,
                //  text:  'Total ' +this.label5+' '+ this.data5,
             },
             animation: {
                 animateScale: true,
                 animateRotate: true
             }
         }
    });
  }

}
