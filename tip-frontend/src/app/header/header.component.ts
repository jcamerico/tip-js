import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  email = '';
  
  constructor(private authService: AuthService, private translationService: TranslateService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logged$.subscribe({
      next: (loggedIn) => {
        if (loggedIn) {
          this.email = this.authService.getEmail();
        }
        this.loggedIn = loggedIn;
      }
    });
  }
  
  changeLanguage(language: string): void {
    this.translationService.use(language);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
