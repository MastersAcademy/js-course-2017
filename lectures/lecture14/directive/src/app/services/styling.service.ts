import { Injectable, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class StylingService {

  styleUpdated = new Subject<any>();

  styling = {
    prime: {
      'color': '#b4b4b4',
      'backgroundColor': '#fafafa'
    },
    accent: {
      'color': '#5368b2'
    }
  };

  constructor() { }

  get prime() {
    return this.styling.prime;
  }

  get accent() {
    return this.styling.accent;
  }

  setScheme(v) {
    this.styling = v;

    this.styleUpdated.next(this.styling);
  }

}
