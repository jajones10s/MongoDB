import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../models/index';
import 'rxjs/operators';
import { skipWhile, tap }  from'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  configUrl = 'assets/config.json';
  config: Config;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.showConfig();
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }
  showConfig() {
    this.getConfig().pipe(tap(model => model.constructor.call(this, skipWhile(model => model === undefined)))).subscribe((config: Config) => this.config = config).unsubscribe();
  }

}
