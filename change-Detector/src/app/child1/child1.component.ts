import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'chd-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
})
export class Child1Component {
  @Input() txtParent = '';
  @Output() textChanage = new EventEmitter<string>();

  public onButtonClickChild() {
    this.txtParent = 'text changed from Child1';
  }

  public onButtonClickChil2() {
    this.textChanage.emit('text changed to Parrent from Child1');
  }
}
