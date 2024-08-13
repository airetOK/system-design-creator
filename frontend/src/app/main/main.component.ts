import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { StartPageComponent } from '../start-page/start-page.component';
import { ClarifyRequirementsComponent } from '../clarify-requirements/clarify-requirements.component';
import { CapacityEstimationComponent } from '../capacity-estimation/capacity-estimation.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, StartPageComponent, ClarifyRequirementsComponent, CapacityEstimationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  flagsShowComponents: boolean[] = [];
  prevButtonDisabled: boolean = true;
  nextButtonDisabled: boolean = false;
  language: string = '';
  DEFAULT_LANG: string = 'en';

  constructor(public location: Location) {
    // flags for each component (start from start-page)
    this.flagsShowComponents = [true, false, false];
    // url expects to be /<lang>
    this.language = this.location.path().split('/')[1] || this.DEFAULT_LANG;
  }

  prev() {
    this.nextButtonDisabled = false;
    const index = this.flagsShowComponents.findIndex((flag) => flag === true);
    if (index > 0) {
      this.flagsShowComponents[index] = false;
      this.flagsShowComponents[index - 1] = true;
    }
    if (index - 1 == 0) {
      this.prevButtonDisabled = true;
    }
  }

  next() {
    this.prevButtonDisabled = false;
    const length = this.flagsShowComponents.length - 1;
    const index = this.flagsShowComponents.findIndex((flag) => flag === true);
    if (index < length) {
      this.flagsShowComponents[index] = false;
      this.flagsShowComponents[index + 1] = true;
    }
    if (index + 1 == length) {
      this.nextButtonDisabled = true;
    }
  }
}
