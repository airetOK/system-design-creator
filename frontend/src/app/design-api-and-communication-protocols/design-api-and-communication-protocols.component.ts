import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import {
  DESIGN_API_COMMUNICATION_PROTOCOL, ADD_REQUEST,
  DESCRIPTION, RESPONSE_CODE
} from '../constants/design_api_and_communication_protocols';
import { NgFor } from '@angular/common';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-design-api-and-communication-protocols',
  standalone: true,
  imports: [NgFor],
  templateUrl: './design-api-and-communication-protocols.component.html',
  styleUrl: './design-api-and-communication-protocols.component.scss'
})
export class DesignApiAndCommunicationProtocolsComponent implements OnInit {

  @Input()
  language: string = '';

  designApiAndCommunicationProtocol: string = '';
  requestCountId = 1;
  addRequestText: string = '';
  description: string = '';
  responseCode: string = '';
  requestMethods: string[] = ['GET', 'POST', 'PUT', 'PATCH'];
  DEFAULT_METHOD : string = 'GET';
  requestFormAnswers: any;

  constructor(private renderer: Renderer2, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.designApiAndCommunicationProtocol = DESIGN_API_COMMUNICATION_PROTOCOL[this.language];
    this.addRequestText = ADD_REQUEST[this.language];
    this.description = DESCRIPTION[this.language];
    this.responseCode = RESPONSE_CODE[this.language];
    this.requestFormAnswers = {};
  }

  addRequest(): void {
    const id = this.requestCountId++;

    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, "row");
    this.renderer.addClass(div, "g-3");
    this.renderer.addClass(div, "mt-2");
    this.renderer.setAttribute(div, "id", `${id}`);

    const selectForm = this.addSelectForm(`${id}#selectFormAnswer${id}`);
    const inputFormDescription = this.addInputDescriptionForm(`${id}#inputDescriptionAnswer${id}`);
    const inputFormResponseCode = this.addInputResponseCodeForm(`${id}#inputResponseCodeAnswer${id}`);

    this.requestFormAnswers[`${id}#selectFormAnswer${id}`] = this.DEFAULT_METHOD;
    this.requestFormAnswers[`${id}#inputDescriptionAnswer${id}`] = '';
    this.requestFormAnswers[`${id}#inputResponseCodeAnswer${id}`] = '';

    const parentElement = document.getElementById('parent');
    this.renderer.appendChild(div, selectForm);
    this.renderer.appendChild(div, inputFormDescription);
    this.renderer.appendChild(div, inputFormResponseCode);
    this.renderer.appendChild(parentElement, div);
  }

  private addSelectForm(id: string): any {
    const div = this.renderer.createElement("div");
    this.renderer.addClass(div, "col-md-2");
    this.renderer.addClass(div, "p-0");
    const select = this.renderer.createElement("select");
    this.renderer.setAttribute(select, "id", id);
    this.renderer.addClass(select, "form-select");
    for (const method of this.requestMethods) {
      const option = this.renderer.createElement("option");
      const text = this.renderer.createText(method);
      this.renderer.appendChild(option, text);
      this.renderer.setProperty(option, "value", method);
      this.renderer.appendChild(select, option);
    }
    this.renderer.listen(select, "change", (event) => {
      this.requestFormAnswers[event.srcElement.id] = event.srcElement.value;
      this.sharedService.designAPIandCommunicatonProtocols['apiRequests'] = this.requestFormAnswers;
    });
    this.renderer.appendChild(div, select);
    return div;
  }

  private addInputDescriptionForm(id: string): any {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, "col-md-7");
    this.renderer.addClass(div, "p-0");
    const input = this.renderer.createElement('input');
    this.renderer.setAttribute(input, "id", id);
    this.renderer.addClass(input, "form-control");
    this.renderer.setProperty(input, "placeholder", this.description);
    this.renderer.setProperty(input, "type", "text");
    this.renderer.listen(input, "input", (event) => {
      this.requestFormAnswers[event.srcElement.id] = event.srcElement.value;
      this.sharedService.designAPIandCommunicatonProtocols['apiRequests'] = this.requestFormAnswers;
    });
    this.renderer.appendChild(div, input);
    return div;
  }

  private addInputResponseCodeForm(id: string): any {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, "col-md-3");
    this.renderer.addClass(div, "p-0");
    const input = this.renderer.createElement('input');
    this.renderer.setAttribute(input, "id", id);
    this.renderer.addClass(input, "form-control");
    this.renderer.setProperty(input, "placeholder", this.responseCode);
    this.renderer.setProperty(input, "type", "text");
    this.renderer.listen(input, "input", (event) => {
      this.requestFormAnswers[event.srcElement.id] = event.srcElement.value;
      this.sharedService.designAPIandCommunicatonProtocols['apiRequests'] = this.requestFormAnswers;
    });
    this.renderer.appendChild(div, input);
    return div;
  }
}
