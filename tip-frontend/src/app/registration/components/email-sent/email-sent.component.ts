import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.css']
})
export class EmailSentComponent implements OnInit {

  @Input()
  email = '';

  emailParams = {
    email: ''
  }

  ngOnInit(): void {
    this.emailParams.email = this.email;
  }


}
