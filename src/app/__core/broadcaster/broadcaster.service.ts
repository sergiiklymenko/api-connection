import {Injectable} from "@angular/core";
import {filter, map, Observable, Subject} from "rxjs";

interface BroadcastEvent {
  key: any,
  data?: any
}

@Injectable()
export class BroadcasterService {

  private eventBus = new Subject<BroadcastEvent>()

  constructor() {
  }

  emit(key: string, data?: any): void{
    this.eventBus.next({key, data})
  }

  on<T>(key: string): Observable<T> {
    return this.eventBus.asObservable().pipe(
      filter(event => event.key === key)
    ).pipe(
      map(event => event.data as T)
    );
  }

}
