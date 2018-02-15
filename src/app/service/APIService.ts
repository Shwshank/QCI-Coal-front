import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  // projectURL: string = 'http://192.168.15.187:8000';
  projectURL: string = 'https://qcitech.org:8081';

  constructor( private http: Http, ) {}

  Login(data) {
    return this.http.post(this.projectURL+'/login',data).map(res=>res.json());
  }

  UpdatePassword(data) {
    return this.http.post(this.projectURL+'/changepassword',data).map(res=>res.json());
  }

  CheckUploadedContracts(file) {
    return this.http.post(this.projectURL+'/checkuploadcontracts',file).map(res=>res.json());
  }

  CheckUploadedTracker(file) {
    return this.http.post(this.projectURL+'/checkuploadprocesstracker',file).map(res=>res.json());
  }

  GetUpdatedContract(data) {
    return this.http.get(this.projectURL+'/getallcontractsdata').map(res=>res.json());
  }

  GetTrackerByDate(data) {
    // console.log(data);
    return this.http.post(this.projectURL+'/getallcontractsmonthdata',data).map(res=>res.json());
  }

  UpdateContract(data) {
    // console.log(data);
    return this.http.post(this.projectURL+'/uploadcontracts',data).map(res=>res.json());
  }

  UpdateTracker(data) {
    // console.log(data);
    return this.http.post(this.projectURL+'/uploadprocesstracker',data);
  }

  GetAllPSUSummary(data) {
    // console.log(data);
    return this.http.get(this.projectURL+'/getsubsidiarysummary',data).map(res=>res.json());
  }

  UpdateDays(data) {
    return this.http.post(this.projectURL+'/savecontractdays',data).map(res=>res.json());
  }

  UploadHistory() {
    return this.http.get(this.projectURL+'/getuploadhistory').map(res=>res.json());
  }

  AddNewUser(data) {
    return this.http.post(this.projectURL+'/adduser',data).map(res=>res.json());
  }

  GetTempData() {
    return this.http.get(this.projectURL+'/gettimewisesummary').map(res=>res.json());
  }

  GetTempDataTower() {
    return this.http.get(this.projectURL+'/getLocationWiseMonthLifting').map(res=>res.json());
  }

  NewMonth(month) {
    let formData = new FormData();
    formData.append('month', month);
    return this.http.post(this.projectURL+'/getLocationWiseMonthLifting', formData).map(res=>res.json());
  }
}
