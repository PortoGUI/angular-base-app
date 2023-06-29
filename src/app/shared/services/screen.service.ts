import {EventEmitter, Injectable,} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  screenChange: EventEmitter<ScreenType> = new EventEmitter<ScreenType>();

  private eventActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentScreen: ScreenType;

  constructor() {
    if (!this.eventActive.getValue()) {
      this.addResizeListener();
    }
  }

  init(): void {
    setTimeout(() => {
      this.currentScreen = this.getScreenType();
      this.screenChange.emit(this.currentScreen);
      console.log('%cScreen Observer is Running', 'color: #00FF00; font-weight: bold');
    });
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
    this.eventActive.next(true);
    window.addEventListener('resize', () => {
      const newResolution: ScreenType = this.getScreenType();
      if (newResolution !== this.currentScreen) {
        this.currentScreen = newResolution;
        this.screenChange.emit(this.currentScreen);
      }
    });
  }
}

export enum ScreenType {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE
}
