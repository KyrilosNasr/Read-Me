import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';



@NgModule({
  declarations: [AdminLayoutComponent, UserLayoutComponent, AuthLayoutComponent, HomeLayoutComponent, NavLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
