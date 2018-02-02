import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm7',
  templateUrl: './sm7.component.html',
  styleUrls: ['./sm7.component.css']
})
export class Sm7Component implements OnInit {

  option1: any;

  constructor() { }

  ngOnInit() {
    this.getGraph1();
  }

  getGraph1() {
    //var piePatternSrc = 'https://cdn3.iconfinder.com/data/icons/files-2/512/sign_contract_file-512.png';
    let piePatternSrc = 'https://media.istockphoto.com/photos/black-coal-picture-id540522616?k=6&m=540522616&s=612x612&w=0&h=qMr18CMuMzFWma1QdcTEpKZ8ezRZZ_xs3dhz2rFflpM=';
    let bgPatternSrc = 'https://thumbs.dreamstime.com/b/old-book-page-17819080.jpg';

    let piePatternImg = new Image();
    piePatternImg.src = piePatternSrc;
    let bgPatternImg = new Image();
    bgPatternImg.src = bgPatternSrc;

    let itemStyle = {
        normal: {
            opacity:0.7,
            color: {
                image: piePatternImg,
                repeat: 'repeat'
            },
            borderWidth: 3,
            borderColor: '#235894'
        }
    };

    this.option1 = {

      series: [{
            outline: {
                show: true,
                borderDistance: 0,
                itemStyle: {
                    borderColor: '#0274d8',
                    borderWidth: 8
                }
            },
            type: 'liquidFill',
            radius: '80%',
            data: [0.5, 0.4, 0.3],
            label: {
                normal: {
                        color: '#da534e',
                        insideColor: '#f0ad4e',
                        fontSize: 50
                }
            },
            itemStyle:itemStyle,
        }]
      };
  }

}
