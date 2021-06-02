import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  checkoutForm = this.fb.group({
    email: [''],
    phoneNumber: [''],
    name: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendForm(): void {
    const value = this.checkoutForm.value;
    Email.send({
      Host: 'smtp.mail.ru',
      Username: 'email', // your email
      Password: 'password', // your password
      To: `${value.email}`,
      From: 'email', // your email
      Subject: `Successfully Ordered`,
      Body: '`Successfully Ordered',
    }).then((message) => alert('mail sent successfully'));
  }
}
