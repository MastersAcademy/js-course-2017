import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';
import {NgControl} from '@angular/forms';

import { StylingService } from '../../services';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit {
  @Input('appTheme') appTheme: 'prime' | 'accent';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private stylingService: StylingService
  ) {
    this.stylingService.styleUpdated
      .map((v) => v[this.appTheme])
      // .do(console.log)
      .distinctUntilChanged()
      // .do(console.log)
      .debounceTime(1400)
      .subscribe( this.colorize.bind(this) );
  }

  ngOnInit() {
    this.colorize();
  }

  private colorize() {
    const themeElement = this.stylingService[this.appTheme];

    Object.keys(themeElement).forEach( (key) => this.renderer.setStyle(this.el.nativeElement, key, themeElement[key]) );
  }

}
