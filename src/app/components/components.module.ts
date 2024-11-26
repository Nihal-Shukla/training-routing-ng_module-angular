import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
// import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';
import { RouterLink, RouterModule } from '@angular/router';


@NgModule({
  declarations: [ComponentsComponent,HomeComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule,
    RouterLink
  ]
})
export class ComponentsModule { }
