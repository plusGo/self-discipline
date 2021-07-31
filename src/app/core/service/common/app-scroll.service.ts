import {EventEmitter, Injectable} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

export interface ScrollEvent {
  scrollTop: number;
  direction: 'down' | 'up';
}

@Injectable({providedIn: 'root'})
export class AppScrollService {
  scrollEvent$ = new EventEmitter<ScrollEvent>();

  private lastScrollTop: number = document.documentElement.scrollTop;

  constructor() {
  }

  init() {
    fromEvent(document, 'scroll')
      .pipe(debounceTime(200))
      .subscribe(() => {
        this.scrollEvent$.emit({
          scrollTop: document.documentElement.scrollTop,
          direction: this.getDirection()
        })
      })
  }

  getDirection(): 'up' | 'down' {
    const direction = document.documentElement.scrollTop > this.lastScrollTop ? 'down' : 'up';
    this.lastScrollTop = document.documentElement.scrollTop;
    return direction;
  }
}
