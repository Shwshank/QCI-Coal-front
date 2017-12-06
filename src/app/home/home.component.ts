import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../service/ProjectService';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  formData = new FormData();
  c_pass: any;
  pass1: any;
  pass2: any;
  newEmail: any;
  justamoment = false;
  passwordmsg: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private ProjectService: ProjectService, public toastr: ToastsManager, vcr: ViewContainerRef) {

    let temp = localStorage.getItem('tracker_graph_current');
    temp = JSON.parse(temp);
    localStorage.setItem('tracker_graph_dis',JSON.stringify(temp));

    this.ProjectService.emitUpdatePassword.subscribe((res)=>{
        this.c_pass='';
        this.pass1='';
        this.pass2='';
        this.passwordmsg = res.message;
    });

    this.ProjectService.emitNewUser.subscribe((res)=>{
        this.newEmail = '';
        this.justamoment = false;
        $("#inviteModal").modal('hide');
    });

    // Get Contract related data nad store in local storage
    // ------------------------------------------------------- starts here
    this.ProjectService.emitContractData.subscribe((res) =>{
      // console.log(res);
      localStorage.setItem('contracts',JSON.stringify(res));

    });
    // ------------------------------------------------------- end here


    // Get tracker related data nad store in local storage
    // ------------------------------------------------------- starts here
    this.ProjectService.emitTrackerData.subscribe((res) =>{
      localStorage.setItem('tracker',JSON.stringify(res.data));
      localStorage.setItem('tracker_graph_current',JSON.stringify(res.graph));
      localStorage.setItem('last_date',JSON.stringify(res.last_date));

      // console.log(res);
    });
    // -------------------------------------------------------ends here

    // Get PUS SummaryContentComponent
    // ------------------------------------------------------- starts here
    this.ProjectService.emitSummaryData.subscribe((res) =>{
      localStorage.setItem('summary',JSON.stringify(res.data));
      localStorage.setItem('psuidname',JSON.stringify(res.array));
      // console.log(res);
    });
    // ------------------------------------------------------- ends here

  }

  ngOnInit() {

    // Get Contract api
    this.ProjectService.getContract(1);

    // Get Tracker api
    let d = new Date();
    let m = d.getMonth();
    m += 1;
    let y = d.getFullYear();
    let month = y+'-'+m;
    this.formData.append('monthdate', month);
    this.ProjectService.getTrackerByDate(this.formData, month);

    // Get PSU Summary
    this.ProjectService.getPsuSummary(1);
  }

  showSuccess(msg1, msg2) {
    this.toastr.info('You are awesome!', 'Success!', {enableHTML: true});
  }

  logout() {
    this.ProjectService.logout();
  }

  updatePassword() {

    if(this.pass1==this.pass2) {

      let formData = new FormData();
      let email = localStorage.getItem('userEmail');
      formData.append('email',email);
      formData.append('c_pass',this.c_pass);
      formData.append('pass1',this.pass1);
      this.ProjectService.updatePassword(formData);
    } else{
        this.ProjectService.toast('New passwords dosent match ','Opps!');
    }
  }

  inviteUser() {
    let formData = new FormData();
    formData.append('email',this.newEmail);
    this.ProjectService.addNewUser(formData);
    this.justamoment = true;
  }
}
