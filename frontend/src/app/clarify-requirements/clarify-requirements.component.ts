import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CLARIFY_REQUIREMENTS } from '../constants/clarify_requirements';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-clarify-requirements',
  standalone: true,
  imports: [NgFor],
  templateUrl: './clarify-requirements.component.html',
  styleUrl: './clarify-requirements.component.scss'
})
export class ClarifyRequirementsComponent implements OnInit {

  clarifyReq: string = '';
  funcReq: string = '';
  nonFuncReq: string = '';
  funcReqQuestions: string[] = [];
  nonFuncReqQuestions: string[] = [];

  constructor(public location: Location) {
  }

  ngOnInit(): void {
    // url expects to be /<lang>
    const values = CLARIFY_REQUIREMENTS[this.location.path().replace('/', '')];
    const headings = values['headings'];
    this.clarifyReq = headings[0];
    this.funcReq = headings[1]
    this.nonFuncReq = headings[2]
    this.funcReqQuestions = values['funcReqQuestions'];
    this.nonFuncReqQuestions = values['nonFuncReqQuestions'];
  }

}
