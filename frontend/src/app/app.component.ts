import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ClarifyRequirementsComponent } from './clarify-requirements/clarify-requirements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClarifyRequirementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
