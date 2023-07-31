import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { countFeature } from '../+state/count/count.reducer';
import {
  clearCount,
  decrementCount,
  incrementCount,
} from '../+state/count/count.actions';

@Component({
  selector: 'ngrx-mount-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  private store = inject(Store);
  count$ = this.store.select(countFeature.selectCount);

  increment() {
    this.store.dispatch(incrementCount());
  }

  decrement() {
    this.store.dispatch(decrementCount());
  }

  clear() {
    this.store.dispatch(clearCount());
  }
}
