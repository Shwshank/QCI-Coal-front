import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/ProjectService';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  options: any;
  PSUArray:any = [];
  sub1: any;
  sub2: any;
  sub3: any;
  month: any = '2017-11';

  option7_data1: any;
  option7_data2: any;
  option7_data3: any;
  PSUid: any=0;
  PSUname: any="All";

  constructor(private projectService: ProjectService) {

    let temp = localStorage.getItem('psuidname');
    temp = JSON.parse(temp);
    this.PSUArray = temp;

    this.sub1 = this.projectService.emitOption7_data1.subscribe(res=>{
      console.log(res);
      this.option7_data1 = res;
    });

    this.sub2 = this.projectService.emitOption7_data2.subscribe(res=>{
      console.log(res);
      this.option7_data2 = res;
    });

    this.sub3 = this.projectService.emitOption7_data3.subscribe(res=>{
      console.log(res);
      this.option7_data3 = res;

      this.getGraph1();
    });
  }

  ngOnInit() {
    this.newMonth();
    // this.projectService.getTempDataTower();
    // this.getGraph1();
  }

  newMonth() {
    console.log(this.month);
    console.log(this.PSUid);
    console.log(this.PSUname);

    this.projectService.newMonth(this.month, this.PSUid, this.PSUname);
  }

  newPsu(id, name) {
    this.PSUid = id;
    this.PSUname = name;

    console.log(this.month);
    console.log(this.PSUid);
    console.log(this.PSUname);

    this.projectService.newMonth(this.month, this.PSUid, this.PSUname);
  }

  getGraph1() {
    let hours = this.option7_data1;
    let days = this.option7_data2;

    let data = this.option7_data3;
    this.options = {
        tooltip: {
          // trigger: 'item',
          // formatter: "{c}"
          // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        visualMap: {
            max: 15500,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        xAxis3D: {
            type: 'category',
            data: hours,
            name:"Location"
        },
        yAxis3D: {
            type: 'value',
            data: days,
            splitNumber: 30,
            name:"Day"
        },
        zAxis3D: {
            type: 'value',
            splitNumber: 10,
            name:"Volume"
        },
        grid3D: {
            boxWidth: 200,
            boxDepth: 180,
            light: {
                main: {
                    intensity: 1.2
                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [{
            type: 'bar3D',
            data: data.map(function (item) {
                return {
                    value: [item[1], item[0], item[2]]
                }
            }),
            shading: 'lambert',

            label: {
                show: false,
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },

            itemStyle: {
                opacity: 0.95
            },

            emphasis: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        color: '#900'
                    }
                },
                itemStyle: {
                    color: '#900'
                }
            }
        }]
    }
  }
}
