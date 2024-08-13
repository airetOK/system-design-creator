import { Component, Input } from '@angular/core';
import { START_BUTTON, CHOOSE_LANG, TYPE_NAME } from '../constants/start_page';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent implements OnInit {

  @Input()
  language: string = '';
  @Input()
  supportedLangs: string[] = [];

  startButtonText: string = '';
  typeName: string = '';
  chooseLang: string = '';


  ngOnInit(): void {
    this.startButtonText = START_BUTTON[this.language];
    this.typeName = TYPE_NAME[this.language];
    this.chooseLang = CHOOSE_LANG[this.language];
  }

  changeLang(lang: string) {
    window.location.replace(`/${lang}`);
  }
}
