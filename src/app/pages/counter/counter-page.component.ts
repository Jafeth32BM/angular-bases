import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'counter-component',
  imports: [],
  templateUrl: './counter-page-component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterComponent {
  public counter: number = 10; // estado tradicional
  counterSignal = signal(10); // estado reactivo con señales

  increment() {
    this.counter += 1; // estado tradicional
    this.counterSignal.update( current => current + 1 );// estado reactivo con señales
  }

  decrement() {
    this.counter -= 1; // estado tradicional
    this.counterSignal.update( current => current - 1 ); // estado reactivo con señales
  }

  reset() {
    this.counter = 0; // estado tradicional
    this.counterSignal.set(0); // estado reactivo con señales
  }
}
