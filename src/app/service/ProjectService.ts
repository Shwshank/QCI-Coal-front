import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIService';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProjectService {

  month : any = '2017-10';

  constructor(private APIService: APIService,private route: ActivatedRoute, private router: Router,) {
    let d = new Date();
    let m = d.getMonth();
    m += 1;
    let y = d.getFullYear();
    this.month = y+'-'+m;

  }

  emitToastMsg :  EventEmitter<any> = new EventEmitter<any>();
  emitContractData :  EventEmitter<any> = new EventEmitter<any>();
  emitTrackerData :  EventEmitter<any> = new EventEmitter<any>();
  emitPSUData :  EventEmitter<any> = new EventEmitter<any>();
  emitPSUArray : EventEmitter<any> = new EventEmitter<any>();
  emitSummaryData : EventEmitter<any> = new EventEmitter<any>();
  emitUserLogin : EventEmitter<any> = new EventEmitter<any>();
  emitContractMsg : EventEmitter<any> = new EventEmitter<any>();
  emitCSummary : EventEmitter<any> = new EventEmitter<any>();
  emitUploadHistory : EventEmitter<any> = new EventEmitter<any>();
  emitUpdatePassword : EventEmitter<any> = new EventEmitter<any>();
  emitNewUser : EventEmitter<any> = new EventEmitter<any>();

  emitOption1_legends= new EventEmitter<any>();
  emitOption1_data1= new EventEmitter<any>();
  emitOption1_data2= new EventEmitter<any>();

  emitOption2_tableData= new EventEmitter<any>();

  emitOption3_legends= new EventEmitter<any>();
  emitOption3_data1= new EventEmitter<any>();
  emitOption3_data2= new EventEmitter<any>();

  emitOption4_legends= new EventEmitter<any>();
  emitOption4_xAxis= new EventEmitter<any>();
  emitOption4_series= new EventEmitter<any>();

  emitOption5_legends= new EventEmitter<any>();
  emitOption5_data= new EventEmitter<any>();
  emitOption5_series= new EventEmitter<any>();

  emitOption6_legends= new EventEmitter<any>();
  emitOption6_xAxis= new EventEmitter<any>();
  emitOption6_series= new EventEmitter<any>();

  emitOption7_data1= new EventEmitter<any>();
  emitOption7_data2= new EventEmitter<any>();
  emitOption7_data3= new EventEmitter<any>();

  emitOption8_data= new EventEmitter<any>();

  emitOption9_data= new EventEmitter<any>();

  emitOption10_data= new EventEmitter<any>();

  emitOption11_data= new EventEmitter<any>();

  trackerData: any;
  PSUData: any;

  getTempData() {
    this.APIService.GetTempData().subscribe(res=>{
      console.log(res);

      this.emitOption1_legends.emit(res.graph1.legends);
      this.emitOption1_data1.emit(res.graph1.data1);
      this.emitOption1_data2.emit(res.graph1.data2);

      this.emitOption2_tableData.emit(res.graph2);

      this.emitOption3_legends.emit(res.graph3.legends);
      this.emitOption3_data1.emit(res.graph3.data1);
      this.emitOption3_data2.emit(res.graph3.data2);

      this.emitOption4_legends.emit(res.graph4.legends);
      this.emitOption4_xAxis.emit(res.graph4.xAxisdata);
      this.emitOption4_series.emit(res.graph4.series);

      this.emitOption5_legends.emit(res.graph5.legends);
      this.emitOption5_data.emit(res.graph5.angleAxisdata);
      this.emitOption5_series.emit(res.graph5.series);

      this.emitOption6_legends.emit(res.graph6.legends);
      this.emitOption6_xAxis.emit(res.graph6.xAxisdata);
      this.emitOption6_series.emit(res.graph6.series);

    },err=>{
      console.log(err);
    });
  }

  getTempDataTower() {
    this.APIService.GetTempDataTower().subscribe(res=>{
      console.log(res);

      this.emitOption7_data1.emit(res.y);
      this.emitOption7_data2.emit(res.x);
      this.emitOption7_data3.emit(res.z);

    }, err=>{
      console.log(err);
    });
  }

  getData() {

    this.emitOption1_legends.emit(['1','2','3']);
    this.emitOption1_data1.emit([ {value:335, name:'1'}, {value:679, name:'2'}, {value:1548, name:'3'}]);
    this.emitOption1_data2.emit([ {value:335, name:'a1'}, {value:310, name:'a2'}, {value:234, name:'a3'}, {value:135, name:'4'}, {value:1048, name:'5'}, {value:251, name:'6'}, {value:147, name:'7'}, {value:102, name:'8'}]);

    this.emitOption2_tableData.emit([
      {sub:"CCL",  contract:"40", rail:'211', road:'21', volume:"440"},
      {sub:"MCL",  contract:"40", rail:'211', road:'21', volume:"440"},
      {sub:"NCL",  contract:"21", rail:'211', road:'21', volume:"120"},
      {sub:"SECL", contract:"36", rail:'211', road:'21', volume:"444"},
      {sub:"WCL",  contract:"14", rail:'211', road:'21', volume:"344"},
    ]);

    this.emitOption3_legends.emit(['1','2','3']);
    this.emitOption3_data1.emit([ {value:335, name:'1'}, {value:679, name:'2'}, {value:1548, name:'3'}]);
    this.emitOption3_data2.emit([ {value:335, name:'a1'}, {value:310, name:'a2'}, {value:234, name:'a3'}, {value:135, name:'4'}, {value:1048, name:'5'}, {value:251, name:'6'}, {value:147, name:'7'}, {value:102, name:'8'}]);

    this.emitOption4_legends.emit(['CCL','MCL','NCL'])
    this.emitOption4_xAxis.emit(['data1','data2','data3','data4','data5'])
    this.emitOption4_series.emit([
        {
            name:'CCL',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'MCL',
            type:'bar',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'NCL',
            type:'bar',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
    ]);

    this.emitOption5_legends.emit(['A', 'B', 'C']);
    this.emitOption5_data.emit(['周一', '周二', '周三', '周四', '周五', '周六', '周日']);
    this.emitOption5_series.emit([
        {
          type: 'bar',
          data: [1, 2, 3, 4, 3, 5, 1],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a'
      }, {
          type: 'bar',
          data: [2, 4, 6, 1, 3, 2, 1],
          coordinateSystem: 'polar',
          name: 'B',
          stack: 'a'
      }, {
          type: 'bar',
          data: [1, 2, 3, 4, 1, 2, 5],
          coordinateSystem: 'polar',
          name: 'C',
          stack: 'a'
      }
    ]);

    this.emitOption6_legends.emit(['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']);
    this.emitOption6_xAxis.emit(['周一','周二','周三','周四','周五']);
    this.emitOption6_series.emit([

        {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290]
        },

    ]);
  }

  getData2() {
    this.emitOption7_data1.emit(['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p']);

    this.emitOption7_data2.emit(['Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday']);

    this.emitOption7_data3.emit([
        [0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]
      ]);
  }

  getData3() {
      this.emitOption8_data.emit([
          {value:335, name:'1'},
          {value:310, name:'2'},
          {value:274, name:'3'},
          {value:235, name:'4'},
          {value:400, name:'5'}
      ]);
  }

  getData4() {
      this.emitOption9_data.emit([
          {value:335, name:'1'},
          {value:310, name:'2'},
          {value:274, name:'3'},
          {value:235, name:'4'},
          {value:400, name:'5'}
      ]);
  }

  getData5() {
    this.emitOption10_data.emit([0.5, 0.4, 0.3]);
  }

  getData6() {
    this.emitOption11_data.emit([
      {
        name: 'Macys',
        value: 6181
    }, {
        name: 'Amy Schumer',
        value: 4386
    }, {
        name: 'Jurassic World',
        value: 4055
    }, {
        name: 'Charter Communications',
        value: 2467
    }, {
        name: 'Chick Fil A',
        value: 2244
    }, {
        name: 'Planet Fitness',
        value: 1898
    }, {
        name: 'Pitch Perfect',
        value: 1484
    }, {
        name: 'Express',
        value: 1112
    }, {
        name: 'Home',
        value: 965
    }, {
        name: 'Johnny Depp',
        value: 847
    }, {
        name: 'Lena Dunham',
        value: 582
    }, {
        name: 'Lewis Hamilton',
        value: 555
    }, {
        name: 'KXAN',
        value: 550
    }, {
        name: 'Mary Ellen Mark',
        value: 462
    }, {
        name: 'Farrah Abraham',
        value: 366
    }, {
        name: 'Rita Ora',
        value: 360
    }, {
        name: 'Serena Williams',
        value: 282
    }, {
        name: 'NCAA baseball tournament',
        value: 273
    }, {
        name: 'Point Break',
        value: 265
    }]);
  }

  newMonth(month){
      this.APIService.NewMonth(month).subscribe(res=>{
        console.log(res);

        this.emitOption7_data1.emit(res.y);
        this.emitOption7_data2.emit(res.x);
        this.emitOption7_data3.emit(res.z);

      }, err=>{
        console.log(err);
      })
  }

  internetConnection() {

    window.addEventListener('online', () => {
      // this.toast('Please refresh','Online!');
      });

    window.addEventListener('offline', () => {
      // this.toast('Some components might not work','Offline!');
      });
  }

  login(data) {
    this.APIService.Login(data).subscribe((res)=>{
      console.log(res);
      if(res.success) {
        localStorage.setItem('login','true1');
        localStorage.setItem('not_All_Summary','0');
        this.emitUserLogin.emit('user');

      } else {
        // this.toast('Invalid username or password ', 'Error!');
      }
    }, (err)=>{
      console.log(err);
      this.toast('Invalid username or password ', 'Error!');
    });
  }

  logout() {
    // localStorage.setItem('login','');
    localStorage.removeItem('contractFlag');
    localStorage.removeItem('contracts');
    localStorage.removeItem('login');
    localStorage.removeItem('psuidname');
    localStorage.removeItem('summary');
    localStorage.removeItem('tracker');
    localStorage.removeItem('trackerFlag');

    this.router.navigate(['./login']);
  }

  updatePassword(data) {
      this.APIService.UpdatePassword(data).subscribe((res)=>{
        console.log(res);
        if(res){
          this.emitUpdatePassword.emit(res);
          this.toast(res.message,'Message');
        } else {}
      }, (err)=>{
        console.log(err);
        this.toast('Something went wrong. Please check logs ','Error!');
      });
  }

  addNewUser(data) {
      this.APIService.AddNewUser(data).subscribe((res)=>{
        console.log(res);
        if(res){
          this.emitNewUser.emit(res);
          this.toast(res.message,'Message');
        } else {}
      }, (err)=>{
        console.log(err);
        this.toast('Something went wrong. Please check logs ','Error!');
      });
  }

  checkLogin() {
    let login = localStorage.getItem('login');
    if(login === 'true1') {
      this.router.navigate(['./home']);
    }
  }

  allPSUData(id) {
    let data = localStorage.getItem('summary');
    data = JSON.parse(data);
    this.emitPSUData.emit( {'data': data, 'id': id} );
    let summaryFlag = localStorage.getItem('summaryFlag');
    if(summaryFlag =='1'){
      localStorage.setItem('summaryFlag','0');
      window.location.reload();

    }
  }

  toast(msg1, msg2) {
    this.emitToastMsg.emit({'msg1': msg1, 'msg2': msg2});
  }

  contract(data) {
    this.emitContractData.emit(data);
  }

  tracker(data,graph, last_date) {
    this.emitTrackerData.emit({'data':data, 'graph':graph, 'last_date':last_date});
  }

  getContract(data) {
    this.internetConnection();
    this.APIService.GetUpdatedContract(data).subscribe((res)=>{
      if(res.success) {
        this.contract(res.contracts_data);
        localStorage.setItem('last_update_contract',JSON.stringify(res.last_updated));
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  checkUploadedContracts(file) {
    this.APIService.CheckUploadedContracts(file).subscribe((res)=>{
      console.log(res);
      if(res){
        if(true) {
          console.log(res.status);
          this.emitContractMsg.emit(res.status);
        } else {}
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  checkUploadedTracker(file) {
    this.APIService.CheckUploadedTracker(file).subscribe((res)=>{
      console.log(res);
      if(res){
        if(true) {
          console.log(res.status);
          this.emitContractMsg.emit(res.status);
        }
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  updateContract(data) {
    this.APIService.UpdateContract(data).subscribe((res)=>{
      console.log(res);
      if(res){
        this.getContract(1);
        this.toast('Contract updated','Success!');
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  updateTracker(data) {
    this.APIService.UpdateTracker(data).subscribe((res)=>{
      if(res) {
      console.log(res);

      // update Daily tracker data data
      let formData = new FormData();
      formData.append('monthdate', this.month);
      this.getTrackerByDate(formData, this.month);
      this.toast('Tracker updated','Success!');
    } else{}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  uploadHistory() {
    this.APIService.UploadHistory().subscribe((res)=>{
      if(res.success) {
        console.log(res);
        this.emitUploadHistory.emit({'contract':res.cu_history, 'tracker':res.ptu_history});
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    }) ;
  }

  getTrackerByDate(data, month) {
    this.APIService.GetTrackerByDate(data).subscribe((res)=>{
      if(res.success) {
        console.log(res);
        this.tracker(res.data, res.stacked_area_list, res.last_date);
        localStorage.setItem('last_update_tracker',JSON.stringify(res.last_updated));
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  getPsuSummary(data) {
    this.APIService.GetAllPSUSummary(data).subscribe((res)=>{
      if(res.success){
        console.log(res);
        this.emitSummaryData.emit(res);
        this.PSUData = res.data;
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  updateContractDays(data) {
    this.APIService.UpdateDays(data).subscribe((res)=>{
      if(res.success){

        this.getContract(1);

        let formData = new FormData();
        formData.append('monthdate', this.month);
        this.getTrackerByDate(formData, this.month);
        this.toast('Please refresh','Data Updated!');
      } else {}
    },(err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
      });
    }

}
