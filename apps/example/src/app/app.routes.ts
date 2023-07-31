import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'count',
    component: StepperComponent,
  },
];
