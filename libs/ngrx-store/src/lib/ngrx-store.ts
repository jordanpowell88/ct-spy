import { mount, MountResponse } from 'cypress/angular';
import { Store } from '@ngrx/store';

type MountParams = Parameters<typeof mount>;
export function createStoreSpy<T>(
  componentResponse?: MountResponse<MountParams[0]>
): Cypress.Chainable<MountResponse<MountParams[0]> | undefined> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { store } = componentResponse.component;

  cy.spy(store as Store<T>, 'dispatch').as('dispatchSpy');

  return cy.wrap(componentResponse);
}
