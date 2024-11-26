import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', component:ComponentsComponent, children:[
    {
      path : 'about', component:AboutComponent
  },
  {
      path : 'contact' , component:ContactComponent
  },
  {
      path: '',component:HomeComponent
  },
  {
      path : 'user', component:UserComponent
  }
  ]}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
