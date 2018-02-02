import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm6',
  templateUrl: './sm6.component.html',
  styleUrls: ['./sm6.component.css']
})
export class Sm6Component implements OnInit {

  option1: any;

  constructor() { }

  ngOnInit() {
    this.getGraph1();
  }

  getGraph1() {
    this.option1 = {

          title: {
              // text: 'Customized Pie',
              left: 'center',
              top: 10,
              textStyle: {
                  color: 'white'
              }
          },

          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                  colorLightness: [0, 1]
              }
          },
          series : [
              {
                  name:'访问来源',
                  type:'pie',
                  radius : '95%',
                  center: ['50%', '50%'],
                  data:[
                      {value:335, name:'1'},
                      {value:310, name:'2'},
                      {value:274, name:'3'},
                      {value:235, name:'4'},
                      {value:400, name:'5'}
                  ].sort(function (a, b) { return a.value - b.value; }),
                  roseType: 'radius',
                  label: {
                      normal: {
                          textStyle: {
                              color: 'black'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          lineStyle: {
                              // color: 'rgba(255, 255, 255, 0.3)'
                          },
                          smooth: 0.2,
                          length: 10,
                          length2: 20
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#c23531',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  },

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
