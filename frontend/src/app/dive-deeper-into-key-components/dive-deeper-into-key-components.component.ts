import { Component, Input, OnInit } from '@angular/core';
import { DIVE_DEEPER_INTO_KEY_COMPONENTS } from '../constants/dive_deeper_into_key_components';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dive-deeper-into-key-components',
  standalone: true,
  imports: [],
  templateUrl: './dive-deeper-into-key-components.component.html',
  styleUrl: './dive-deeper-into-key-components.component.scss'
})
export class DiveDeeperIntoKeyComponentsComponent implements OnInit {

  @Input()
  language: string = '';

  heading: string = '';
  subheading: string = '';
  databaseHeading: string = '';
  webServersApplicationServersHeading: string = '';
  loadBalancersHeading: string = '';
  cachingHeading: string = '';
  singlePointsOfFailureHeading: string = '';
  authenticationAuthorizationHeading: string = '';
  rateLimitingHeading: string = '';
  databasesQuestion: string = '';
  webAppServersQuestion: string = '';
  loadBalancersQuestion: string = '';
  cachingQuestion: string = '';
  singlePointsFailureQuestion: string = '';
  authenticationAuthorizationQuestion: string = '';
  rateLimitingQuestion: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    const values = DIVE_DEEPER_INTO_KEY_COMPONENTS[this.language]
    this.heading = values['heading'];
    this.subheading = values['subheading'];
    this.databaseHeading = values['databaseHeading'];
    this.webServersApplicationServersHeading = values['webServersApplicationServersHeading'];
    this.loadBalancersHeading = values['loadBalancersHeading'];
    this.cachingHeading = values['cachingHeading'];
    this.singlePointsOfFailureHeading = values['singlePointsOfFailureHeading'];
    this.authenticationAuthorizationHeading = values['authenticationAuthorizationHeading'];
    this.rateLimitingHeading = values['rateLimitingHeading'];
    this.databasesQuestion = values['databasesQuestion'];
    this.webAppServersQuestion = values['webAppServersQuestion'];
    this.loadBalancersQuestion = values['loadBalancersQuestion'];
    this.cachingQuestion = values['cachingQuestion'];
    this.singlePointsFailureQuestion = values['singlePointsFailureQuestion'];
    this.authenticationAuthorizationQuestion = values['authenticationAuthorizationQuestion'];
    this.rateLimitingQuestion = values['rateLimitingQuestion'];
  }

  setInputValue(element: any): void {
    this.sharedService.deepDiveIntoKeyComponentsData[element.name] = element.value;
  }
}
