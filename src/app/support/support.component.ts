import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  supportForm: FormGroup;
  category: string[] = ["Operational", "Non-Operational"];
  amendmentType: string[] = ["Archiving", "Closing"];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.supportForm = this.formBuilder.group({
      category: ['', [Validators.required]],
      amendmentType: ['', [Validators.required]],
      customerID: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      customerName: ['', [Validators.required , Validators.pattern("/^[a-zA-Z0-9]*$/")]],
      accountNumber: ['', [Validators.required , Validators.pattern("/^[a-zA-Z0-9]*$/")]],
      productType: ['', [Validators.required , Validators.pattern("/^[a-zA-Z0-9]*$/")]],
      reason: ['', [Validators.required , Validators.pattern("/^[a-zA-Z0-9]*$/")]],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      description: ['', [Validators.required , Validators.pattern("/^[a-zA-Z0-9]*$/")]],
      transactionId: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      transactionDate: ['', [Validators.required , Validators.pattern("/^[a-zA-Z0-9]*$/")]],
    });
  }

  onSubmit() {
    console.log(this.supportForm.value);
  }

  onChange(selectedValue: string) {
    console.log(selectedValue);
    if (selectedValue === "Archiving") {
      this.supportForm.controls["amount"].clearValidators();
      this.supportForm.controls["amount"].updateValueAndValidity();
      this.supportForm.controls["description"].clearValidators();
      this.supportForm.controls["description"].updateValueAndValidity();
      this.supportForm.controls["transactionId"].clearValidators();
      this.supportForm.controls["transactionId"].updateValueAndValidity();
      this.supportForm.controls["transactionDate"].clearValidators();
      this.supportForm.controls["transactionDate"].updateValueAndValidity();
    }else if(selectedValue === "Closing"){
      this.supportForm.controls["reason"].clearValidators();
      this.supportForm.controls["reason"].updateValueAndValidity();
    }

  }

}
