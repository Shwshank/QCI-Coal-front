import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm8',
  templateUrl: './sm8.component.html',
  styleUrls: ['./sm8.component.css']
})
export class Sm8Component implements OnInit {

  option1: any;

  constructor() { }

  ngOnInit() {
    this.getGraph1();
  }

  getGraph1() {


    this.option1 = {

      series: [{
              type: 'wordCloud',
              gridSize: 20,
              sizeRange: [12, 50],
              rotationRange: [0, 0],
              shape: 'circle',
              textStyle: {
                  normal: {
                      color: function() {

                        let color = ['#0274d8','#da534e','#f0ad4e','#f0ad4e','#8bc34a','#ff9800','#797979','#e91e63','#3f51b5','#795548','#673ab7','#9c27b0'];
                        let rand = Math.floor(Math.random() * 11) + 0;
                        return color[rand];
                      }
                  },
                  emphasis: {
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              data: [{
                  name: 'Sam S Club',
                  value: 10000,
                  textStyle: {
                      normal: {
                          color: 'black'
                      },
                      emphasis: {
                          color: 'red'
                      }
                  }
              }, {
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
              }]
          }]
      };
  }


}
