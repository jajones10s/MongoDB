import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as models from  '../models';

@Component({
  selector: 'jj-users-container',
  template: `<jj-users [userData]='userData | async'>
            </jj-users>`,
})
export class UsersContainerComponent implements OnInit {
  userData: Observable<models.UsersDataModel>;
  constructor() { }

  ngOnInit() {
  }

}
