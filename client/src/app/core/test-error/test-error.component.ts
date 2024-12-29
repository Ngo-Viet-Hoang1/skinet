import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-test-error',
  imports: [],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get404Error() {
    this.http.get(this.baseUrl + 'products/42').subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  get400ValidationError() {
    this.http.get(this.baseUrl + 'products/fourtytwo').subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
