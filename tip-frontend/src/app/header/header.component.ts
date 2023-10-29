import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  
  constructor(private authService: AuthService, private translationService: TranslateService) {}

  ngOnInit(): void {
    this.authService.logged$.subscribe({
      next: (loggedIn) => {
        this.loggedIn = loggedIn;
      }
    });
  }
  
  changeLanguage(language: string): void {
    this.translationService.use(language);
  }
}
