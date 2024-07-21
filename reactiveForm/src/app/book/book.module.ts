import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class BookModule {
  title: string = '';
  description: string = '';
  author: string = '';
  isbn: string = '';
  date: Date | undefined;
  address = new BookAddress();
  versions = new BookVersion();
}

export class BookAddress {
  street: string = '';
  city: string = '';
}

export class BookVersion {
  version: string = '';
  date: Date | undefined;
}
