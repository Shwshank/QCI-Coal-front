import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';

@Component({
  selector: 'app-sm8',
  templateUrl: './sm8.component.html',
  styleUrls: ['./sm8.component.css']
})
export class Sm8Component implements OnInit {

  option11: any;
  option11_data: any;

  constructor(private projectService: ProjectService) {
    // this.projectService.emitOption11_data.subscribe(res=>{
    //   this.option11_data = res;
    // });

    this.projectService.emitPSUData.subscribe((res)=>{

      this.option11_data = res.data[res.id].wordcount;
      console.log(this.option11_data);

      // for(let i=0; i< this.option11_data.length;i++) {
      //   this.option11_data[i].name = this.option11_data[i].name
      // }

      this.getGraph1();
    });
  }

  ngOnInit() {
    this.projectService.getData6();
  }

  getGraph1() {


    this.option11 = {

      tooltip:{
        trigger:'item',
      },
      series: [{
              type: 'wordCloud',
              gridSize: 0,
              sizeRange: [11, 40],
              rotationRange: [-90, 90],
              rotationStep: 45,
              left: 'center',
              top: 'center',
              width: '100%',
              height: '100%',
              drawOutOfBound: false,
              textStyle: {
                  normal: {
                    fontWeight: 'bold',
                      color: function() {

                        let color = ['#0274d8','#da534e','#f0ad4e','#f0ad4e','#8bc34a','#ff9800','#797979','#e91e63','#3f51b5','#795548','#673ab7','#9c27b0'];
                        let rand = Math.floor(Math.random() * 11) + 0;
                        return color[rand];
                      }
                  },
                  emphasis: {
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              data: this.option11_data
          }]
      };
  }


}
