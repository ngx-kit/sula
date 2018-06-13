import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { KitHammerService, KitPlatformService } from '@ngx-kit/core';

@Component({
  selector: 'ui-scroll',
  templateUrl: './ui-scroll.component.html',
  styleUrls: ['./ui-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiScrollComponent implements OnInit {
  nativeScrollbarWidth: number;

  vBarState = {
    display: false,
    size: 0,
    position: 0,
  };

  hBarState = {
    display: false,
    size: 0,
    position: 0,
  };

  barsDisplay = false;

  hover = false;

  vBarActive = false;

  hBarActive = false;

  @ViewChild('vBar') vBar: ElementRef;

  @ViewChild('vBarWrapper') vBarWrapper: ElementRef;

  @ViewChild('hBar') hBar: ElementRef;

  @ViewChild('hBarWrapper') hBarWrapper: ElementRef;

  @ViewChild('vWrapper') vWrapper: ElementRef;

  @ViewChild('hWrapper') hWrapper: ElementRef;

  private hidingTimeout: any;

  constructor(
    private platform: KitPlatformService,
    private elRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private hammer: KitHammerService,
  ) {
  }

  ngOnInit() {
    this.nativeScrollbarWidth = this.platform.getScrollbarWidth();
    this.initVListeners();
    this.initHListeners();
    this.initMutationObserver();
  }

  @HostListener('mouseenter') mouseenterHandler() {
    this.hover = true;
    this.update();
    this.checkBarsDisplay();
  }

  @HostListener('mouseleave') mouseleaveHandler() {
    this.hover = false;
    this.runHiding();
  }

  update() {
    this.updateVBar();
    this.updateHBar();
  }

  updateVBar() {
    this.vBarState = this.calcBar(
      this.vWrapper.nativeElement.scrollHeight - this.nativeScrollbarWidth,
      this.elRef.nativeElement.offsetHeight,
      this.vBarWrapper.nativeElement.offsetHeight,
      this.vWrapper.nativeElement.scrollTop,
    );
  }

  updateHBar() {
    this.hBarState = this.calcBar(
      this.hWrapper.nativeElement.scrollWidth,
      this.elRef.nativeElement.offsetWidth,
      this.hBarWrapper.nativeElement.offsetWidth,
      this.hWrapper.nativeElement.scrollLeft,
    );
  }

  private calcBar(contentSize: number, hostSize: number, barWrapperSize: number, scrollPosition: number) {
    if (contentSize > hostSize) {
      const size = Math.round(Math.max((hostSize / contentSize) * barWrapperSize, 30));
      return {
        display: true,
        size,
        position: Math.round((barWrapperSize - size) * (scrollPosition / (contentSize - hostSize))),
      };
    } else {
      return {
        display: false,
        size: 0,
        position: 0,
      };
    }
  }

  private checkBarsDisplay(): any {
    this.barsDisplay = this.hover || this.vBarActive || this.hBarActive;
  }

  private initVListeners() {
    const vBarHammer = this.hammer.build(this.vBar.nativeElement, {
      pan: {
        direction: Hammer.DIRECTION_VERTICAL,
        threshold: 1,
      },
    });
    let scrollStart: number | null = null;
    // Pan
    vBarHammer.on('pan', (event: any) => {
      // Start
      if (scrollStart === null) {
        this.vBarActive = true;
        scrollStart = this.vWrapper.nativeElement.scrollTop;
      }
      // Calc
      const contentHeight = this.hWrapper.nativeElement.scrollHeight;
      const hostHeight = this.elRef.nativeElement.offsetHeight;
      const coef = contentHeight / hostHeight;
      if (scrollStart !== null) {
        this.vWrapper.nativeElement.scrollTop = Math.round(scrollStart + event.deltaY * coef);
      }
      // Final
      if (event.isFinal) {
        scrollStart = null;
        this.vBarActive = false;
        this.runHiding();
        this.cdr.detectChanges();
      }
    });
    // Tap
    const vBarWrapperHammer = this.hammer.build(this.vBarWrapper.nativeElement);
    vBarWrapperHammer.on('tap', (event: any) => {
      if (event.target === this.vBarWrapper.nativeElement) {
        const pos = this.hammer.calcRelatedPosition(this.vBarWrapper.nativeElement, event.center);
        // Calc
        this.vWrapper.nativeElement.scrollTop += pos.y > this.vBarState.position ? 200 : -200;
      }
    });
  }

  private initHListeners() {
    const hBarHammer = this.hammer.build(this.hBar.nativeElement, {
      pan: {
        direction: Hammer.DIRECTION_HORIZONTAL,
        threshold: 1,
      },
    });
    let scrollStart: number | null = null;
    // Pan
    hBarHammer.on('pan', (event: any) => {
      // Start
      if (scrollStart === null) {
        this.hBarActive = true;
        scrollStart = this.hWrapper.nativeElement.scrollLeft;
      }
      // Calc
      const contentWidth = this.hWrapper.nativeElement.scrollWidth;
      const hostWidth = this.elRef.nativeElement.offsetWidth;
      const coef = contentWidth / hostWidth;
      if (scrollStart !== null) {
        this.hWrapper.nativeElement.scrollLeft = Math.round(scrollStart + event.deltaX * coef);
      }
      // Final
      if (event.isFinal) {
        scrollStart = null;
        this.hBarActive = false;
        this.runHiding();
        this.cdr.detectChanges();
      }
    });
    // Tap
    const hBarWrapperHammer = this.hammer.build(this.hBarWrapper.nativeElement);
    hBarWrapperHammer.on('tap', (event: any) => {
      if (event.target === this.hBarWrapper.nativeElement) {
        const pos = this.hammer.calcRelatedPosition(this.hBarWrapper.nativeElement, event.center);
        // Calc
        this.hWrapper.nativeElement.scrollLeft += pos.x > this.hBarState.position ? 200 : -200;
      }
    });
  }

  private initMutationObserver() {
    const mutationObserver = new MutationObserver(mutations => {
      if (mutations.length > 0) {
        this.update();
        this.cdr.detectChanges();
      }
    });
    mutationObserver.observe(this.hWrapper.nativeElement, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  private runHiding() {
    clearTimeout(this.hidingTimeout);
    this.hidingTimeout = setTimeout(() => {
      this.checkBarsDisplay();
      this.cdr.detectChanges();
    }, 1500);
  }
}
