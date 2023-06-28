import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.contactForm = formBuilder.group({
      name: ["", [Validators.required]]
    });
  }

  onSubmit(){
    let formData = this.contactForm.value;

    console.log(formData);
  }

}
