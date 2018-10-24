import { Directive, ElementRef, Renderer2, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') change() {

    // this.renderer.setStyle(this.el.nativeElement, 'font-size', '1.8em');

     this.renderer.addClass(this.el.nativeElement, 'magnify');

    }

  @HostListener('mouseout') reset() {

    // this.renderer.setStyle(this.el.nativeElement, 'font-size', '0.8em');

    this.renderer.removeClass(this.el.nativeElement, 'magnify');
  }

}
