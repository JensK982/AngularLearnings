import {
  ChangeDetectorRef,
  Component,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { User, UserAddress } from './user.model';

@Component({
  selector: 'oop-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'OopUserModul';
  user: User = new User();
  errorMessagesLname: string = 'Last Name is required';
  errorMessagesFname: string = 'First Name is required';
  errorMessagesAge: string = '';
  errorMessagesEmail: string = '';
  protected valid = false;
  public FnameValid = false;
  public LnameValid = false;
  public AgeValid = false;
  public EmailValid = false;

  FnameCheck() {
    //event: any --> nur notwendig wenn value benötigt wird.
    //onFirstNameChanged --> CamelCase --> Funktion immer mit "On"
    if (this.user.FirstName === '') {
      this.FnameValid = false;
      this.valid = false;
      this.errorMessagesFname = 'First Name is required';
    } else {
      this.FnameValid = true;
      this.errorMessagesFname = '';
    }
    this.updateValidStatus();
  }
  LnameCheck(event: any) {
    if (this.user.LastName === '') {
      this.LnameValid = false;
      this.valid = false;
      this.errorMessagesLname = 'Last Name is required';
    } else {
      this.LnameValid = true;
      this.errorMessagesLname = '';
    }
    this.updateValidStatus();
  }

  AgeCheck(event: any) {
    if (this.user.Age < 19) {
      this.AgeValid = false;
      this.valid = false;
      this.errorMessagesAge = 'Age is <19';
    } else {
      this.AgeValid = true;
      this.errorMessagesAge = '';
    }
    this.updateValidStatus();
  }

  EmailCheck(event: any) {
    if (!this.user.email.includes('@')) {
      this.EmailValid = false;
      this.valid = false;
      this.errorMessagesEmail = '@ is missing';
    } else {
      this.EmailValid = true;
      this.errorMessagesEmail = '';
    }
    this.updateValidStatus();
  }
  updateValidStatus() {
    this.valid =
      this.FnameValid && this.LnameValid && this.AgeValid && this.EmailValid;
  }

  onButtonClick(event: any) {
    if (this.valid) {
      this.valid = true;
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }
}
