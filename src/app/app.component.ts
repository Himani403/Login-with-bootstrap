import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angulartoastr';
  showModal: any;
  registerForm: any;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  show()
  {
    this.showModal = true; 
  }
 
  hide()
  {
    this.showModal = false;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}

get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
   
}
  
}
