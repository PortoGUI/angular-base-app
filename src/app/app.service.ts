import {Injectable} from '@angular/core';

import {EMPTY, Observable, of} from 'rxjs';

import {ScreenService} from './shared/services/screen.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private screenService: ScreenService) {
  }

  get loadConfiguration(): Observable<unknown> {
    this.screenService.init();
    return of(EMPTY);
  }
}
