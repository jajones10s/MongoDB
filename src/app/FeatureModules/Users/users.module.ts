import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';
import { UsersComponent } from './components/users.component';
import { UsersContainerComponent } from './container/users-container.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersContainerComponent
  ],
  providers: [
    UsersService
  ],
  entryComponents: [
    UsersContainerComponent
  ]
})
export class UsersModule { }
