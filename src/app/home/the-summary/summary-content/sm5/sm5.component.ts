import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';

@Component({
  selector: 'app-sm5',
  templateUrl: './sm5.component.html',
  styleUrls: ['./sm5.component.css']
})
export class Sm5Component implements OnInit {

  option8: any;
  option8_data: any;
  option8_legends: any;
  color: any;

  constructor(private projectService: ProjectService) {
      this.color = ['#0274d8','#da534e','#8bc34a','#ff9800','#797979','#e91e63','#009688','#3f51b5','#795548','#673ab7','#9c27b0'];

      this.projectService.emitPSUData.subscribe((res)=>{

        this.option8_data = res.data[res.id].graph2.data1;
        this.option8_legends = res.data[res.id].graph2.legends;
        this.getGraph1();
      });

  }


  ngOnInit() {
    this.projectService.getData3();
    this.getGraph1();
  }

  getGraph1() {
    let piePatternSrc = 'https://www.paychex.com/sites/default/files/irs-delays-2014-tax-season.jpg';
    let bgPatternSrc = 'https://thumbs.dreamstime.com/b/old-book-page-17819080.jpg';

    let piePatternImg = new Image();
    piePatternImg.src = piePatternSrc;
    let bgPatternImg = new Image();
    bgPatternImg.src = bgPatternSrc;

    let itemStyle = {
      normal: {
        opacity:0.7,
        color: {
          image: piePatternImg,
          // repeat: 'repeat'
        },
        borderWidth: 3,
        borderColor: '#235894'
      }
    };
    this.option8 = {



          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
              show: false,
              min: -220,
              max: 3000,
              inRange: {
                  // colorLightness: [0, 1]
              }
          },
          legend: {
            // orient: 'vertical',
            // x: 'left',
            data:this.option8_legends
          },

          series : [
              {
                title: {
                    // text: 'Customized Pie',
                    left: 'center',
                    top: 10,
                    textStyle: {
                        color: 'white'
                    }
                },
                  name:'11',
                  type:'pie',
                  radius : '85%',
                  center: ['50%', '50%'],
                  data:this.option8_data,
                  // roseType: 'radius',
                  label: {
                    show: false,
                      normal: {
                        show: false,
                          textStyle: {
                              color: 'black'
                          }
                      }
                  },
                  color: this.color,
                  labelLine: {
                    show: false,
                      normal: {show: false,
                          lineStyle: {
                            show: false,
                              // color: 'rgba(255, 255, 255, 0.3)'
                          },
                          smooth: 0.2,
                          length: 5,
                          length2: 2
                      }
                  },
                  itemStyle: itemStyle,

                  animationType: 'scale',
                  animationEasing: 'elasticOut',
                  animationDelay: function (idx) {
                      return Math.random() * 200;
                  }
              }
          ]
      };
  }


}
