import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective {
  @Input() highlightColor: string = '';

  constructor(private element: ElementRef) {}

  private orginalText: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    //console.log(`on mouse entry ${this.highlightColor}`);
    this.element.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
