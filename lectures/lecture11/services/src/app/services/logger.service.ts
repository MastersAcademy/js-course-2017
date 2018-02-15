import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() { }

  debug(message) {
    console.debug(message);
  }
}
