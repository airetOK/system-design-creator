import { Component, OnInit, Input } from '@angular/core';
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

  @Input()
  language: string = '';

  clarifyReq: string = '';
  funcReq: string = '';
  nonFuncReq: string = '';
  funcReqQuestions: string[] = [];
  nonFuncReqQuestions: string[] = [];

  ngOnInit(): void {
    const values = CLARIFY_REQUIREMENTS[this.language];
    const headings = values['headings'];
    this.clarifyReq = headings[0];
    this.funcReq = headings[1]
    this.nonFuncReq = headings[2]
    this.funcReqQuestions = values['funcReqQuestions'];
    this.nonFuncReqQuestions = values['nonFuncReqQuestions'];
  }

}
