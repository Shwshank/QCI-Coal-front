import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';

@Component({
  selector: 'app-sm6',
  templateUrl: './sm6.component.html',
  styleUrls: ['./sm6.component.css']
})
export class Sm6Component implements OnInit {

  option9: any;
  option9_data: any;
  option9_legends: any;
  color: any;

  constructor(private projectService: ProjectService) {
      this.color = ['#0274d8','#da534e','#8bc34a','#ff9800','#797979','#e91e63','#009688','#3f51b5','#795548','#673ab7','#9c27b0'];
      // this.projectService.emitOption8_data.subscribe(res=>{
      //   this.option9_data = res;
      // });

      this.projectService.emitPSUData.subscribe((res)=>{

        this.option9_data = res.data[res.id].graph1.data1;
        this.option9_legends = res.data[res.id].graph1.legends;
        this.getGraph1();
      });

  }

  ngOnInit() {
    // this.projectService.getData4();
    // this.getGraph1();
  }

  getGraph1() {
    //var piePatternSrc = 'https://cdn3.iconfinder.com/data/icons/files-2/512/sign_contract_file-512.png';
    let piePatternSrc = 'https://us.123rf.com/450wm/carmendorin/carmendorin1308/carmendorin130800202/21689191-grunge-rubber-stamp-with-word-challenge-vector-illustration.jpg?ver=6';
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
                repeat: 'repeat'
            },
            borderWidth: 3,
            borderColor: '#235894'
        }
    };

    this.option9 = {

          color: this.color,
          title: {
              // text: 'Customized Pie',
              left: 'center',
              top: 10,
              textStyle: {
                  color: 'white'
              }
          },
          // legend: {
          //     // orient: 'vertical',
          //     // x: 'left',
          //     data:this.option9_legends
          // },
          tooltip : {
              trigger: 'item',
              formatter: "{b} : {c} ({d}%)"
          },
          grid: {

              right: '1%',
              bottom: '23%',
              containLabel: true
          },
          visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                  // colorLightness: [0, 1]
              }
          },
          series : [
              {   itemStyle: itemStyle,
                  
                  type:'pie',
                  radius : '76%',
                  center: ['50%', '50%'],
                  data:this.option9_data,
                  // roseType: 'radius',
                  // itemStyle: {
                  //   borderWidth: 1,
                  //   borderColor: '#FFF'
                  // },

                  labelLine: {
                      normal: {

                          lineStyle: {

                              color: '#235894'
                          },
                          smooth: .2,
                          // length: 10,
                          // length2: 20
                      }
                  },
                  // itemStyle: {
                  //     normal: {
                  //         color: '#0075d9',
                  //         // shadowBlur: 200,
                  //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                  //     }
                  // },

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
