import { Component, Input } from '@angular/core';
import { SidebarOptions } from './sidebar.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  
  @Input()
  selectedMenu = SidebarOptions.DASHBOARD

  readonly DASHBOARD = SidebarOptions.DASHBOARD;
  readonly ACCOUNT = SidebarOptions.ACCOUNT;
  readonly PROFILE = SidebarOptions.PROFILE;

}
