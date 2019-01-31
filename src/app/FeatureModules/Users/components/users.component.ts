import { Component, OnInit, Input } from '@angular/core';
import * as models from '../models';

@Component({
  selector: 'jj-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() userData: models.UsersDataModel;
  constructor() { }

  ngOnInit() {
  }

}
