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

    // this.option1_legends = ['1','2','3','4','5'];
    // this.option1_data1 = [ {value:335, name:'1'}, {value:679, name:'2'}, {value:1548, name:'3'}];
    // this.option1_data2 = [ {value:335, name:'a1'}, {value:310, name:'a2'}, {value:234, name:'a3'}, {value:135, name:'4'}, {value:1048, name:'5'}, {value:251, name:'6'}, {value:147, name:'7'}, {value:102, name:'8'}]

    // this.option2_tableData = [
    //   {sub:"CCL",  contract:"40", rail:'211', road:'21', volume:"440"},
    //   {sub:"MCL",  contract:"40", rail:'211', road:'21', volume:"440"},
    //   {sub:"NCL",  contract:"21", rail:'211', road:'21', volume:"120"},
    //   {sub:"SECL", contract:"36", rail:'211', road:'21', volume:"444"},
    //   {sub:"WCL",  contract:"14", rail:'211', road:'21', volume:"344"},
    // ];

    // this.option3_legends = ['1','2','3'];
    // this.option3_data1 = [ {value:335, name:'1'}, {value:679, name:'2'}, {value:1548, name:'3'}];
    // this.option3_data2 = [ {value:335, name:'a1'}, {value:310, name:'a2'}, {value:234, name:'a3'}, {value:135, name:'4'}, {value:1048, name:'5'}, {value:251, name:'6'}, {value:147, name:'7'}, {value:102, name:'8'}]

    // this.option4_legends = ['CCL','MCL','NCL'];
    // this.option4_xAxis = ['data1','data2','data3','data4','data5'];
    // this.option4_series = [
    //     {
    //         name:'CCL',
    //         type:'bar',
    //         data:[320, 332, 301, 334, 390, 330, 320]
    //     },
    //     {
    //         name:'MCL',
    //         type:'bar',
    //         data:[120, 132, 101, 134, 90, 230, 210]
    //     },
    //     {
    //         name:'NCL',
    //         type:'bar',
    //         data:[220, 182, 191, 234, 290, 330, 310]
    //     },
    // ]

    // this.option5_legends = ['A', 'B', 'C'];
    // this.option5_data = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    // this.option5_series = [
    //     {
    //       type: 'bar',
    //       data: [1, 2, 3, 4, 3, 5, 1],
    //       coordinateSystem: 'polar',
    //       name: 'A',
    //       stack: 'a'
    //   }, {
    //       type: 'bar',
    //       data: [2, 4, 6, 1, 3, 2, 1],
    //       coordinateSystem: 'polar',
    //       name: 'B',
    //       stack: 'a'
    //   }, {
    //       type: 'bar',
    //       data: [1, 2, 3, 4, 1, 2, 5],
    //       coordinateSystem: 'polar',
    //       name: 'C',
    //       stack: 'a'
    //   }
    // ]

    // this.option6_legends = ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他'];
    // this.option6_xAxis = ['周一','周二','周三','周四','周五'];
    // this.option6_series = [
    //
    //     {
    //         name:'邮件营销',
    //         type:'bar',
    //         stack: '广告',
    //         data:[120, 132, 101, 134, 90]
    //     },
    //     {
    //         name:'联盟广告',
    //         type:'bar',
    //         stack: '广告',
    //         data:[220, 182, 191, 234, 290]
    //     },
    //
    // ];

  }

  ngOnInit() {
    // this.projectService.getData();
    this.projectService.getTempData();

    this.color = ['#0274d8','#da534e','#8bc34a','#ff9800','#797979','#e91e63','#009688','#3f51b5','#795548','#673ab7','#9c27b0'];

    this.color1 = ['#e91e63','#009688','#da534e','#8bc34a','#ff9800','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8'];

    // this.getGraph2();
    // this.getGraph3();
    // this.getGraph4();
    // this.getGraph5();
    // this.getGraph6();

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
            data:['Rail',"Road"]
        }],
        series: [
            {
                name:'PSU',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
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
