import { Component, OnInit } from '@angular/core';
import { UsersService } from './FeatureModules/Users/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-dream-app';
  constructor(private usersSvc: UsersService) { }
  ngOnInit() {
    this.usersSvc.getConfig();
    this.usersSvc.showConfig();
  }
}
