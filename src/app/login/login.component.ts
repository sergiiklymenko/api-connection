import {Component, OnInit} from "@angular/core";
import {LoginInterface} from "./login.interface";
import {UserService} from "../__core/userService/user.service";
import {StorageService} from "../__core/storage/storage.service";
import {BroadcasterService} from "../__core/broadcaster/broadcaster.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements LoginInterface, OnInit {
  login = '';
  password = '';
  static brKEY = 'userKey'

  constructor(private user: UserService,
              private storage: StorageService,
              private broadcaster: BroadcasterService) {
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.login);
    this.user.setData(this.login);
    console.log((new UserService(this.storage)).getData());
    this.broadcaster.emit(LoginComponent.brKEY)
  }

}
