import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports:      [ CommonModule, TranslateModule, RouterModule, MatSidenavModule, MatListModule ],
    providers:    [ ],
    declarations: [ DashboardComponent, AccountComponent, ProfileComponent, SidebarComponent ],
    exports:      [ DashboardComponent ],
   })
   export class DashboardModule { }