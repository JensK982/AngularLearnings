import { Component, Input } from '@angular/core';

import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'chd-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
})
export class Child2Component {
  @Input() txtParent = '';

  onButtonClickChild2() {
    this.txtParent = 'text changed from Child2';
  }
}
