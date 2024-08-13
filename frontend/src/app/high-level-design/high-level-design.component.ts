import { Component, Input } from '@angular/core';
import { HIGH_LEVEL_DESIGN } from '../constants/high_level_design';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-high-level-design',
  standalone: true,
  imports: [],
  templateUrl: './high-level-design.component.html',
  styleUrl: './high-level-design.component.scss'
})
export class HighLevelDesignComponent implements OnInit {

  @Input()
  language: string = '';
  highLevelDesign: string = '';

  ngOnInit(): void {
    this.highLevelDesign = HIGH_LEVEL_DESIGN[this.language];
  }
}
