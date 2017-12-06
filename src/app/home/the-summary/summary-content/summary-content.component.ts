import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../service/ProjectService';

@Component({
  selector: 'app-summary-content',
  templateUrl: './summary-content.component.html',
  styleUrls: ['./summary-content.component.css']
})
export class SummaryContentComponent implements OnInit {

  psu_id: any;

  constructor(private ProjectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let sub = this.route.queryParams
      .subscribe(params => {
          this.psu_id = params.psu_id;
          // console.log(this.psu_id);
          localStorage.setItem('not_All_Summary','1');
          this.ProjectService.emitCSummary.emit(this.psu_id);

          this.ProjectService.allPSUData(this.psu_id);
      });



  }

}
