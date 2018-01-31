import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import './allscript.js';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  options: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    localStorage.setItem('contractFlag','0');
    localStorage.setItem('trackerFlag','0');

    // navigate to summary id = 0
    this.router.navigate(['home/summary/psusummary'],
        {queryParams: {psu_id: 0}});
  }

  ngOnDestroy() {}

}
