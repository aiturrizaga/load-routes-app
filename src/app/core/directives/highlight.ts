import { Directive, ElementRef, HostListener, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'span[appHighlight]'
})
export class Highlight implements OnInit {

  color = input<string>('#FFFF88');

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('Color:', this.color());
  }

  ngOnInit(): void {
    console.log('Nuevo color:', this.color());
  }

  @HostListener('mouseenter')
  onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color());
  }

  @HostListener('mouseleave')
  onLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }

}
