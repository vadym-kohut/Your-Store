import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from '../interfaces/login-form';
import { UserDBService } from '../services/user-db.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginDataInvalid!: boolean;

  loginForm = new FormGroup<LoginForm>({
    username: new FormControl('atuny0', { nonNullable: true }),
    password: new FormControl('9uQFF1Lh', { nonNullable: true }),
  });

  constructor(
    private userDB: UserDBService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userDB.loginUser(this.loginForm.getRawValue()).subscribe({
      next: res => {
        this.userDB.setUserData(res)
        this.router.navigate(['/']);
      },
      error: () => this.loginDataInvalid = true
    });
  }
}
