import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  isSession = false;

  private getStorage(): Storage {
    return (this.isSession ? sessionStorage : localStorage);
  }

  getData(key: string): any | false {
    const data = this.getStorage().getItem(key);
    return data != null ? JSON.parse(data) : false;
  }

  setData(key: string, value: any) {
    return this.getStorage().setItem(
      key,
      JSON.stringify(value)
    )
  }

  removeData(key: string) {
    return this.getStorage().removeItem(key)
  }


}
