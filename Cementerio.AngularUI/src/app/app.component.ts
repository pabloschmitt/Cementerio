import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Optional } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  ipFormControl = new FormControl('', [Validators.required]);



  openDialog() {
  }

  showSnackbar() {
  }

}
