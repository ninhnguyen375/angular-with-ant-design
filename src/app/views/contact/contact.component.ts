import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  validateForm: FormGroup;
  isSubmitSuccess: boolean;

  constructor(private formBuilder: FormBuilder) {}

  hanldeSubmit(): void {
    for (const i in this.validateForm.controls) {
      if (i) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.invalid) {
      return;
    }

    this.isSubmitSuccess = true;
  }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      name: [null, Validators.required],
      message: [null, Validators.required]
    });
  }
}
