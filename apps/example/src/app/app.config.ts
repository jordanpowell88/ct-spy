import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { countFeature } from './+state/count/count.reducer';
import * as countEffects from './+state/count/count.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(countEffects),
    provideStore(),
    provideState(countFeature),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};
