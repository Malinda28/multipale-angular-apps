import { Component } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor(private ser: CommonService) {
    ser.getSurveys().then(v => {
      console.log(v)
    })
  }
}
