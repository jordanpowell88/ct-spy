import { mount } from 'cypress/angular';
// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.ts using ES2015 syntax:
import { provideState, provideStore } from '@ngrx/store';
import { countFeature } from '../../src/app/+state/count/count.reducer';
import './commands';
import { createStoreSpy } from '@ct-spy/ngrx-store';

// add component testing only related command here, such as mount
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      mount: typeof mount;
      createStoreSpy: typeof createStoreSpy;
    }
  }
}

type MountParams = Parameters<typeof mount>;

Cypress.Commands.add('createStoreSpy', { prevSubject: true }, createStoreSpy);

Cypress.Commands.add(
  'mount',
  (component: MountParams[0], config: MountParams[1] = {}) => {
    return mount(component, {
      ...config,
      providers: [
        ...(config.providers || []),
        provideStore(),
        provideState(countFeature),
      ],
    });
  }
);
