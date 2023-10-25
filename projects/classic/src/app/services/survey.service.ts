import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private commonService: CommonService) { }

  getSurveys() {
    return this.commonService.getSurveys().then((response) => {
      return response;
    }).catch((error) => {
     console.log(error);
    });
  }

}
