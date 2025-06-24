import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTextTransform]',
  standalone: true,
})
export class TextTransformDirective {
  @Input() case: 'uppercase' | 'lowercase' = 'lowercase';

  //@HostBinding('innerText') innerText;

  ngOnInit() {
    const text: string = this.element.nativeElement.innerText;
    //this.innerText = text.toUpperCase();
  }

  constructor(private element: ElementRef) {}
}
