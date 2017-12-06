import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-the-upload',
  templateUrl: './the-upload.component.html',
  styleUrls: ['./the-upload.component.css']
})
export class TheUploadComponent implements OnInit {

  formData = new FormData();;
  files: any;
  updatedData: any= {'value2':[],'value3':[],'value4':[],'value5':[],'value6':[],'value7':[],'value8':[],'value9':[],'value10':[]};
  display: any= false;
  flag = 0;
  contractHistory: any;
  trackerHistory: any;
  updateFlag: any;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitContractMsg.subscribe((res)=>{
      this.updatedData = res;
      console.log(this.updatedData);
      this.display= true;
      $("#exampleModal1").modal('show');
    });

    this.ProjectService.emitUploadHistory.subscribe((res)=>{
      this.contractHistory = res.contract;
      this.trackerHistory = res.tracker;

      console.log(this.contractHistory);
      console.log(this.trackerHistory);
    });

  }

  ngOnInit() {
    this.ProjectService.uploadHistory();
  }

  updateContract($event) {
    this.updateFlag = true;
    console.log('1');
    this.flag=1;
    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    // console.log(file);
    this.formData = new FormData();
    this.formData.append('file', file);
    // console.log(this.formData);
    // this.ProjectService.updateContract(this.formData);
    this.ProjectService.checkUploadedContracts(this.formData);

  }

  updateTracker($event) {
    this.updateFlag = true;
    console.log('2');
    this.flag=2;
    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    // console.log(file);
    this.formData = new FormData();
    this.formData.append('file', file);
    // console.log(this.formData);
    // this.ProjectService.updateTracker(this.formData);
    this.ProjectService.checkUploadedTracker(this.formData);

  }

  openURL(url) {
    window.open(url,'_blank');
  }

  proceed() {
    if(this.flag==1){

      this.ProjectService.updateContract(this.formData);
    } else if(this.flag==2) {

      this.ProjectService.updateTracker(this.formData);
    }
    // window.location.reload();
  }

  pSummary(data) {
    this.updateFlag = false;
    this.updatedData = data;
    console.log(this.updatedData);
    this.display= true;
    $("#exampleModal1").modal('show');
  }

}
