import { Component, Input } from '@angular/core';
import { START_BUTTON } from '../constants/start_page';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent implements OnInit {

  @Input()
  language: string = '';

  start_button_text: string = '';
  DEFAULT_LANG: string = 'en';

  ngOnInit(): void {
    this.start_button_text = START_BUTTON[this.language];
  }
}
