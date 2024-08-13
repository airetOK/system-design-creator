import { Component, Input } from '@angular/core';
import { GENERATE_FILE } from '../constants/generate_file';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-file',
  standalone: true,
  imports: [],
  templateUrl: './generate-file.component.html',
  styleUrl: './generate-file.component.scss'
})
export class GenerateFileComponent implements OnInit {

  @Input()
  language: string = '';

  generateFileText: string = '';

  ngOnInit(): void {
    this.generateFileText = GENERATE_FILE[this.language];
  }
}
