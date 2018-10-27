import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  KitFocusListenerService,
  KitFormFieldService,
  KitSelectFilter,
  KitSelectItem,
  KitSelectOptions,
  KitSelectSearchFn,
  KitSelectService,
} from '@ngx-kit/core';
import { uiExtSelectIcons } from '../icons';

export const uiExtSelectValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiExtSelectComponent),
  multi: true,
};

@Component({
  selector: 'ui-ext-select',
  templateUrl: './ui-ext-select.component.html',
  styleUrls: ['./ui-ext-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    uiExtSelectValueAccessor,
    KitSelectService,
    KitFocusListenerService,
  ],
  animations: [
    trigger('popupHost', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('popup', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-5px)',
        }),
        animate('100ms', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('100ms', style({
          opacity: 0,
          transform: 'translateY(-5px)',
        })),
      ]),
    ]),
  ],
})
export class UiExtSelectComponent<M> implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {
  /**
   * List of items to pick.
   */
  @Input() items: KitSelectItem<M>[] = [];

  /**
   * Use filter to search through the current list of `[items]`.
   */
  @Input() filter?: KitSelectFilter<M>;

  /**
   * Search function will be used instead of filter. The function should return list of items to pick.
   */
  @Input() searchFn?: KitSelectSearchFn<M>;

  /**
   * Enables multiple select.
   */
  @Input() multiple?: boolean;

  /**
   * Additional configuration.
   */
  @Input() options: Partial<KitSelectOptions> = {};

  /**
   * Placeholder displayed when model is empty.
   */
  @Input() placeholder?: string;

  /**
   * Emits when items array changed by item selection.
   */
  @Output() itemsChange = new EventEmitter<KitSelectItem<M>[]>();

  @ViewChild('selectRef') selectRef: ElementRef;

  @ViewChild('inputRef') inputRef: ElementRef;

  hasErrors?: boolean;

  icons = uiExtSelectIcons;

  constructor(
    public service: KitSelectService<M>,
    @Optional() private formFieldService: KitFormFieldService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    // Proxy `itemsChange` emit from service
    this.service.itemsChanges.subscribe(this.itemsChange);
    // Handle error state
    if (this.formFieldService) {
      this.formFieldService.control.errorStateChanges.subscribe(errors => {
        this.hasErrors = !errors || errors.length > 0;
        this.cdr.detectChanges();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Proxy inputs to service
    if ('items' in changes) {
      this.service.items = this.items;
    }
    if ('filter' in changes) {
      this.service.filter = this.filter;
    }
    if ('searchFn' in changes) {
      this.service.searchFn = this.searchFn;
    }
    if ('multiple' in changes) {
      this.service.multiple = this.multiple;
    }
    if ('options' in changes) {
      this.service.overrideOptions(this.options);
    }
  }

  ngAfterViewInit() {
    // Initialization
    this.service.registerSelectRef(this.selectRef);
    this.service.initChangeDetection();
  }

  registerOnChange(fn: any) {
    this.service.registerOnChange(fn);
  }

  registerOnTouched(fn: any) {
    this.service.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.service.disabled = isDisabled;
  }

  writeValue(rawValue: M | M[]): void {
    this.service.writeValue(rawValue);
  }

  mousedown(event: any) {
    if (event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    this.service.mousedown(event);
    this.focusInput();
  }

  removeItem(event: any, model?: M) {
    if (event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    this.service.remove(model);
    this.focusInput();
  }

  select(model: M) {
    this.service.select(model);
    this.focusInput();
  }

  focusInput() {
    if (this.inputRef) {
      this.inputRef.nativeElement.focus();
    }
  }

  isActive(model: M) {
    return this.service.active === model;
  }

  isChecked(model: M) {
    return this.service.model === model;
  }
}
