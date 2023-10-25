import { Component } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {

  user: any;
  surveys: any;
  constructor(private commonService: CommonService, private surveyService: SurveyService) {
    this.user = commonService.getUserData();

    this.getSurvey();
  }
  async getSurvey() {
    this.surveys = await this.surveyService.getSurveys();
    console.log(this.surveys)
  }

}
