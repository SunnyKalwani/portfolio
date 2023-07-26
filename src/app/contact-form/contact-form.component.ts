import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {
    this.formData = builder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.minLength(100)]]
    })

  }

  onSubmit(FormData: any) {
    console.log(FormData);

    return alert(`Form Not Submitted. Please email admin@sunnykalwani.com`);

    // Data to transmit message / Not functioning right now
    // this.contact.postMessage(FormData)
    //   .subscribe(response => {
    //     location.href = 'https://mailthis.to/confirm'
    //     console.log(response)
    //   }, error => {
    //     console.warn(error.responseText)
    //     console.log({ error })
    //   })
  }

  get nameFormControl(){
    return this.formData.get('name')!;
  }

  get emailFormControl(){
    return this.formData.get('email')!;
  }

  get messageFormControl(){
    return this.formData.get('message')!;
  }
}
