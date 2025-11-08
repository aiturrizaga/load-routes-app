import { Directive, ElementRef, input, OnInit, Renderer2 } from '@angular/core';

type ButtonType = 'square' | 'rounded';
type ButtonColor = 'primary' | 'secondary' | 'warning';

@Directive({
  selector: 'button[appButton]'
})
export class Button implements OnInit {

  shape = input<ButtonType>('square');
  color = input<ButtonColor>('primary');

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { 
  }

  ngOnInit(): void {
    this.initStyles();
  }

  initStyles(): void {
    this.renderer.setStyle(this.el.nativeElement, 'padding', '0.6rem 12.2rem');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', this.shape() === 'rounded' ? '999px' : '10px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color() === 'primary' ? 'blue' : this.color() === 'secondary' ? 'gray' : 'orange');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
  }

}
