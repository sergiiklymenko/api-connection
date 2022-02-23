import {Injectable} from "@angular/core";
import {UserInterface} from "../../__shared/interface/user.interface";
import {StorageService} from "../storage/storage.service";

@Injectable()
export class UserService implements UserInterface {
  readonly KEY = 'userKey';
  login = '';

  constructor(private storage: StorageService) {
    this.login = this.storage.getData(this.KEY) || this.login;
  }

  getData(): string {
    return this.login;
  }

  setData(typedLogin: string): void {
    this.storage.setData(this.KEY, typedLogin)
    this.login = typedLogin
  }

  removeData() {
    this.storage.removeData(this.KEY);
  }
}
