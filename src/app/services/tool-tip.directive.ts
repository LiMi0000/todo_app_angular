import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]',
})
export class ToolTipDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  @Input('appToolTip') ToolTipContent: string;

  ngAfterViewInit() {
    tippy(this.elementRef.nativeElement, {
      content: this.ToolTipContent,
    });
  }
}
