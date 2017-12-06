import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    localStorage.setItem('contractFlag','0');
    localStorage.setItem('trackerFlag','0');
  }

  ngOnDestroy() {}

}
