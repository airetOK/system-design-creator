import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { DATABASE_DESIGN } from '../constants/database_design';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-database-design',
  standalone: true,
  imports: [],
  templateUrl: './database-design.component.html',
  styleUrl: './database-design.component.scss'
})
export class DatabaseDesignComponent implements OnInit {

  @Input()
  language: string = '';

  databaseDesign: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.databaseDesign = DATABASE_DESIGN[this.language];
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64string = reader.result as string;
      this.sharedService.databaseDesignData[event.target.name] = base64string;
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }

}
