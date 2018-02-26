import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/ProjectService';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  option1: any;
  option2: any;
  option3: any;
  option4: any;
  option5: any;
  option6: any;
  option7: any;
  color: any;
  color1: any;

  sub1 : any;
  sub2 : any;
  sub3 : any;
  sub4 : any;
  sub5 : any;
  sub6 : any;
  sub7 : any;
  sub8 : any;
  sub9 : any;
  sub10 : any;
  sub11 : any;
  sub12 : any;
  sub13 : any;
  sub14 : any;
  sub15 : any;
  sub16 : any;
  sub17 : any;
  sub18 : any;
  sub19 : any;
  sub20 : any;
  sub21 : any;

  option1_legends: any;
  option1_data1: any;
  option1_data2: any;

  option2_tableData: any;

  option3_legends: any;
  option3_data1: any;
  option3_data2: any;

  option4_legends: any;
  option4_xAxis: any;
  option4_series: any;

  option5_legends: any;
  option5_data: any;
  option5_series: any;

  option6_legends: any;
  option6_xAxis: any;
  option6_series: any;

  constructor(private projectService: ProjectService) {

    this.sub1 = this.projectService.emitOption1_legends.subscribe(res=>{
        this.option1_legends = res;
    });

    this.sub2 = this.projectService.emitOption1_data1.subscribe(res=>{
        this.option1_data1 = res;
    });

    this.sub4 = this.projectService.emitOption1_data2.subscribe(res=>{
        this.option1_data2 = res;

        this.getGraph1();
    });

    this.sub5 = this.projectService.emitOption2_tableData.subscribe(res=>{
        this.option2_tableData = res;
    });

    this.sub6 = this.projectService.emitOption3_legends.subscribe(res=>{
        this.option3_legends = res;
    });

    this.sub7 = this.projectService.emitOption3_data1.subscribe(res=>{
        this.option3_data1 = res;
    });

    this.sub8 = this.projectService.emitOption3_data2.subscribe(res=>{
        this.option3_data2 = res;

        this.getGraph3();
    });

    this.sub9 = this.projectService.emitOption4_legends.subscribe(res=>{
        this.option4_legends = res;
    });

    this.sub10 = this.projectService.emitOption4_xAxis.subscribe(res=>{
        this.option4_xAxis = res;
    });

    this.sub11 = this.projectService.emitOption4_series.subscribe(res=>{
        this.option4_series = res;

        this.getGraph4();
    });

    this.sub12 = this.projectService.emitOption5_legends.subscribe(res=>{
        this.option5_legends = res;
    });

    this.sub13 = this.projectService.emitOption5_data.subscribe(res=>{
        this.option5_data = res;
    });

    this.sub14 = this.projectService.emitOption5_series.subscribe(res=>{
        this.option5_series = res;

        this.getGraph5();
    });

    this.sub15 = this.projectService.emitOption6_legends.subscribe(res=>{
        this.option6_legends = res;
    });

    this.sub16 = this.projectService.emitOption6_xAxis.subscribe(res=>{
        this.option6_xAxis = res;
    });

    this.sub17 = this.projectService.emitOption6_series.subscribe(res=>{
        this.option6_series = res;

        this.getGraph6();
    });

  }

  ngOnInit() {
    this.projectService.getTempData();

    this.color = ['#0274d8','#da534e','#8bc34a','#ff9800','#797979','#e91e63','#009688','#3f51b5','#795548','#673ab7','#9c27b0'];

    this.color1 = ['#e91e63','#009688','#da534e','#8bc34a','#ff9800','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979'];

  }

  getGraph1() {

    this.option1 = {
        color: this.color1,
        itemStyle: {
          borderWidth: 10,
          borderColor: '#FFF'
        },
        title : {
            subtext: '',
            x: 'center',
            color:'white'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [{
            orient: 'vertical',
            x: 'left',
            data:this.option1_legends
        },
        {
            orient: 'vertical',
            x: 'right',
            data:['Road','Rail']

        }],
        series: [
            {
                name:'PSU',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
                        show: false,
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.option1_data1
            },
            {
                name:'Mode',
                type:'pie',
                radius: ['50%', '70%'],
                label: {
                    normal: {
                      show: false,
                      position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.option1_data2
            }
        ]
    };
  }

  getGraph2() {}

  getGraph3() {

    this.option3 = {
        color: this.color1,
        itemStyle: {
          borderWidth: 10,
          borderColor: '#FFF'
        },
        title : {
            // text: 'Contract Signed',
            subtext: '',
            x: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [{
            orient: 'vertical',
            x: 'left',
            data:this.option3_legends
        },
        {
            orient: 'vertical',
            x: 'right',
            data:['Linkage Auction','Special Forward E-auction']
        }],
        series: [
            {
                name:'PSU',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
                        show: false,  
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.option3_data1
            },
            {
                name:'Auction Type',
                type:'pie',
                radius: ['50%', '70%'],
                label: {
                    normal: {
                      show: false,
                      position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.option3_data2
            }
        ]
    };
  }

  getGraph4() {

    this.option4 = {
        color: this.color,
        itemStyle: {
          // borderWidth: 10,
          borderColor: '#FFF'
        },
        title : {
            // text: 'Progress summary',
            subtext: '',
            x: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:this.option4_legends
        },
        grid: {
            left: '1%',
            right: '1%',
            // bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : this.option4_xAxis
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : this.option4_series
    };

  }

  getGraph5() {

    this.option5 = {
        color: this.color,
        itemStyle: {
          // borderWidth: 10,
          borderColor: '#FFF'
        },
        title : {
            // text: 'Progress summary',
            subtext: '',
            x: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:this.option5_legends
        },
        grid: {
            left: '1%',
            right: '1%',
            // bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : this.option5_data
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : this.option5_series
    };

  }

  getGraph6() {

    this.option6 = {
        color: this.color,
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: this.option6_legends
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '9%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : this.option6_xAxis
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : this.option6_series
    };
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub4.unsubscribe();
    this.sub5.unsubscribe();
    this.sub6.unsubscribe();
    this.sub7.unsubscribe();
    this.sub8.unsubscribe();
    this.sub9.unsubscribe();
    this.sub10.unsubscribe();
    this.sub11.unsubscribe();
    this.sub12.unsubscribe();
    this.sub13.unsubscribe();
    this.sub14.unsubscribe();
    this.sub15.unsubscribe();
    this.sub16.unsubscribe();
    this.sub17.unsubscribe();
  }

}
