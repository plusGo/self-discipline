import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {HeaderComponent} from '../../share/component/header/header.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  private static VISIBLE_SCROLL_INSTANCE = 80;
  showHeader = true;

  @ViewChild(HeaderComponent, {read: ElementRef}) headerElementRef: ElementRef;
  private destroy$ = new Subject<void>();

  constructor(private hostElementRef: ElementRef,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.hostElementRef.nativeElement, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.showHeader = this.hostElementRef.nativeElement.scrollTop <= LayoutComponent.VISIBLE_SCROLL_INSTANCE;
        this.changeDetectorRef.markForCheck();
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
