import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  templateUrl: './ui-form-demo.component.html',
  styleUrls: ['./ui-form-demo.component.scss'],
})
export class UiFormDemoComponent implements OnInit {
  @ViewChild(NgForm) ngForm: NgForm;

  email: string;

  name: string;

  rememberMe: boolean;

  type: 'customer' | 'merchant';

  // Reactive demo
  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      name: [''],
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.ngForm.valid) {
      alert('Form valid!');
    }
  }
}
