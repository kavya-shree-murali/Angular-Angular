import { Directive } from '@angular/core';

@Directive({
  selector: '[appStandalone]',
  standalone: true
})
export class StandaloneDirective {

  constructor() { }

}
