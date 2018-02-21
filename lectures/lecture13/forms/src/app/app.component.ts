import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    firstName: 'John',
    lastName: 'Doe',
    emails: [
      'js@mailinator.com'
    ],
    address: {
      line1: 'Infinity Loop 1',
      line2: 'Mothership',
      city: 'Cupertino',
      country: 'USA'
    }
  };

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100)
      ])),
      lastName: new FormControl(''),
      emails: new FormArray([]),
      address: new FormGroup({
        line1: new FormControl(''),
        line2: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl('')
      })
    });

    this.userForm.get('lastName').valueChanges.subscribe(console.log);

    (<FormGroup>this.userForm.get('address')).addControl('postalCode', new FormControl('', Validators.required));

    (<FormArray>this.userForm.get('emails')).push(new FormControl('', new FormControl('', Validators.required)));

    this.userForm.patchValue(this.user);
  }

  onSubmit() {
    if (this.userForm.invalid) {
      console.error('form invalid');

      return;
    }

    console.log(this.userForm);
    console.log(this.userForm.value);
  }
}
