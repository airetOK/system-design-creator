import { Component, Input } from '@angular/core';
import { HIGH_LEVEL_DESIGN } from '../constants/high_level_design';
import { OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

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

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.highLevelDesign = HIGH_LEVEL_DESIGN[this.language];
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      let base64string = reader.result as string;
      this.sharedService.highLevelDesignData[event.target.name] = base64string.replace('data:image/png;base64,', '');
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
