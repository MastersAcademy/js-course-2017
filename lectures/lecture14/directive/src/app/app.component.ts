import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { StylingService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorsForm: FormGroup;

  constructor(private stylingService: StylingService) {
    this.colorsForm = new FormGroup({
      prime: new FormGroup({
        color: new FormControl(this.stylingService.prime.color),
        backgroundColor: new FormControl(this.stylingService.prime.backgroundColor),
      }),
      accent: new FormGroup({
        color: new FormControl(this.stylingService.accent.color),
      })
    });
  }

  saveColors() {
    this.stylingService.setScheme(this.colorsForm.value);
  }
}
