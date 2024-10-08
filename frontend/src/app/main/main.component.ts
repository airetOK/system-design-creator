import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { StartPageComponent } from '../start-page/start-page.component';
import { ClarifyRequirementsComponent } from '../clarify-requirements/clarify-requirements.component';
import { CapacityEstimationComponent } from '../capacity-estimation/capacity-estimation.component';
import { HighLevelDesignComponent } from '../high-level-design/high-level-design.component';
import { DatabaseDesignComponent } from '../database-design/database-design.component';
import { GenerateFileComponent } from '../generate-file/generate-file.component';
import { DesignApiAndCommunicationProtocolsComponent } from '../design-api-and-communication-protocols/design-api-and-communication-protocols.component';
import { DiveDeeperIntoKeyComponentsComponent } from '../dive-deeper-into-key-components/dive-deeper-into-key-components.component';
import { NgIf } from '@angular/common';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, StartPageComponent, ClarifyRequirementsComponent, CapacityEstimationComponent, 
    HighLevelDesignComponent, DatabaseDesignComponent, GenerateFileComponent, 
    DesignApiAndCommunicationProtocolsComponent, DiveDeeperIntoKeyComponentsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  flagsShowComponents: boolean[] = [];
  prevButtonDisabled: boolean = true;
  nextButtonDisabled: boolean = false;
  language: string = '';
  DEFAULT_LANG: string = 'en';
  SUPPORTED_LANGS: string[] = ['en', 'ua'];

  constructor(public location: Location, private sharedService: SharedService) {
    // flags for each component (start from start-page)
    this.flagsShowComponents = [true, false, false, false, false, false, false, false];
    const lang = this.location.path().split('/')[1];
    this.redirectUnsupported(lang);
    // url expects to be /<lang>
    this.language = lang || this.DEFAULT_LANG;
    this.sharedService.startPageData.language = this.language;
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

  private redirectUnsupported(lang: string): void {
    if (!this.SUPPORTED_LANGS.includes(lang)) {
      window.location.replace(`/${this.DEFAULT_LANG}`);
    }
  }
}
