import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'orange';
  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'orange'
    );
  }

  @HostListener('mouseenter') mouseover(eventData) {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'red'
    // );
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData) {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'orange'
    // );
    this.backgroundColor = 'orange';
  }
}
