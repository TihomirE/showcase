import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = '';
  loading = false;

  loginFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  async doLogin() {
    this.loading = true;
    this.router.navigate(['app']);
  }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
    });
  }

}
