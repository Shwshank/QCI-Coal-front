import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';
import Chart from 'chart.js';

@Component({
  selector: 'app-sm3',
  templateUrl: './sm3.component.html',
  styleUrls: ['./sm3.component.css']
})
export class Sm3Component implements OnInit {

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
  display= false;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitPSUData.subscribe((res)=>{
      console.log(res.data);
      this.data1 = res.data[res.id].status[0][1];
      this.data2 = res.data[res.id].status[1][1];
      this.data3 = res.data[res.id].status[2][1];
      this.data4 = res.data[res.id].status[3][1];
      // this.data5 = res.data[res.id].status[4][1];

      this.label1 = res.data[res.id].status[0][0];
      this.label2 = res.data[res.id].status[1][0];
      this.label3 = res.data[res.id].status[2][0];
      this.label4 = res.data[res.id].status[3][0];
      // this.label5 = res.data[res.id].status[4][0];

      if(this.data5 == 0){
        this.display = false;
      } else {
        this.display = true;
        this.getGraph();
      }

    });
  }

  ngOnInit() {}

  getGraph() {

    this.donutCtx = this.donut.nativeElement.getContext('2d');

     this.myChart = new Chart(this.donutCtx, {
        type: 'doughnut',
        data: {
           labels: [this.label1,this.label2,this.label3],
           datasets: [{
               data : [this.data1,this.data2,this.data3],
               backgroundColor: ['#469846','#0275D8','#F0AD4E']
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
