import { Component } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {

  user: any;
  constructor(commonService: CommonService) {
    this.user = commonService.getUserData();
  }

}
