import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBordure]',
})
export class BordureDirective {
  @Input('appBordureAuSurvol')
  public color: string = 'blue';

  private oldBorder: string;

  constructor(private el: ElementRef) {
    this.oldBorder = this.el.nativeElement.style.border;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.border = 'solid ' + this.color + ' 2px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.border = this.oldBorder;
  }
}
