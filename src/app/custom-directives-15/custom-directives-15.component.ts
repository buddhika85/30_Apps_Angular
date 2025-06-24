import { Component } from '@angular/core';
import { HoverDirective } from '../hover.directive';
import { TextTransformDirective } from '../text-transform.directive';

@Component({
  selector: 'app-custom-directives-15',
  standalone: true,
  imports: [HoverDirective, TextTransformDirective],
  templateUrl: './custom-directives-15.component.html',
  styleUrl: './custom-directives-15.component.scss',
})
export class CustomDirectives15Component {}
