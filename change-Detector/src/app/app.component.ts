import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'chd-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'change-Detector';
  txtParent = 'Ich bin Parrent';

  public onButtonClick() {
    this.txtParent = 'text is changed from Parrent';
  }
  public onChild1Click(value: string) {
    this.txtParent = value;
  }
}
