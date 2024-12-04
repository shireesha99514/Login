import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // To handle redirects

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Define the form group with validation
  data = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  userDetails: any = null;  // To store user details after successful login
  errorMessage: string = ''; // To store error messages

  constructor(private httpClient: HttpClient, private router: Router) {}

  // Getter to easily access form controls in the template
  get formControls() {
    return this.data.controls;
  }

  // Handle form submission
  public handleSubmit() {
    if (this.data.invalid) {
      this.errorMessage = 'Please fill in both fields.';
      return;
    }

    // Make HTTP request to authenticate user
    this.httpClient.post('http://localhost:8082/loginUser', this.data.value).subscribe({
      next: (data: any) => {
        if (data === true) {
          alert("Login successful!");
          // Optionally, redirect to the dashboard or another page after login
          this.router.navigate(['/user']);
        } else if (data === false) {
          this.errorMessage = 'Wrong credentials, please try again.';
        } else {
          // Store user details if available
          this.userDetails = data;
          console.log("User Details:", this.userDetails);
          // Redirect to another page (if needed)
          this.router.navigate(['/user']);
        }
      },
      error: (err) => {
        // Handle any error that occurs during the HTTP request
        console.error('Login failed', err);
        this.errorMessage = 'An error occurred during login. Please try again later.';
      }
    });
  }
}
