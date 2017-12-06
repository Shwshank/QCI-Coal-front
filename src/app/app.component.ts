import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { ProjectService } from './service/ProjectService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private route: ActivatedRoute, private router: Router,
    private ProjectService: ProjectService, public toastr: ToastsManager, vcr: ViewContainerRef) {

      this.toastr.setRootViewContainerRef(vcr);

      this.ProjectService.emitToastMsg.subscribe((res)=>{
         this.showSuccess(res.msg1, res.msg2);
      });

    }

    showSuccess(msg1, msg2) {
      this.toastr.info(msg1, msg2, {enableHTML: true});
    }
}
