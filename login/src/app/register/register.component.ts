import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: FormGroup; // Define the form group

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router // Inject Router
  ) {
    
    this.register = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email] 
      ],
      name: [
        '',
        [Validators.required, Validators.minLength(3)] 
      ],
      mobile: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)] 
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)] 
      ]
    });
  }

  public handleSubmit() {
    if (this.register.valid) {
      // Submit the form data
      this.httpClient
        .post('http://localhost:8082/addUser', this.register.value)
        .subscribe(
          (data: any) => {
           
            this.router.navigate(['/login']); 
          },
          error => {
            console.error('Error:', error);
            alert('An error occurred during registration.');
          }
        );
    } else {
      alert('Please fill in all fields correctly before submitting!');
    }
  }
}
