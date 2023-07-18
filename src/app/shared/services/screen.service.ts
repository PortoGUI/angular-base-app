import {Injectable, NgZone} from '@angular/core';

import {BehaviorSubject, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  screenChange: BehaviorSubject<ScreenType> = new BehaviorSubject<ScreenType>(ScreenType.SMALL);
  private currentScreen: ScreenType;
  private resizeScheduled = false;

  constructor(private zn: NgZone) {
    this.addResizeListener();
  }

  init(): void {
    this.currentScreen = this.getScreenType();
    this.screenChange.next(this.currentScreen);
    console.log('%cScreen Observer is Running', 'color: #00FF00; font-weight: bold');
  }

  private getScreenType(): ScreenType {
    if (window.innerWidth <= 320) {
      return ScreenType.SMALL;
    } else if (window.innerWidth > 320 && window.innerWidth <= 767) {
      return ScreenType.MEDIUM;
    } else if (window.innerWidth > 767 && window.innerWidth <= 1080) {
      return ScreenType.LARGE;
    } else {
      return ScreenType.XLARGE;
    }
  }

  private addResizeListener(): void {
    this.zn.runOutsideAngular(() => {
      fromEvent(window, 'resize').subscribe(() => {
        if (!this.resizeScheduled) {
          this.resizeScheduled = true;
          window.requestAnimationFrame(() => {
            const newResolution: ScreenType = this.getScreenType();
            if (newResolution !== this.currentScreen) {
              this.zn.run(() => {
                this.currentScreen = newResolution;
                this.screenChange.next(this.currentScreen);
              });
            }
            this.resizeScheduled = false;
          });
        }
      });
    });
  }
}

export enum ScreenType {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE
}
