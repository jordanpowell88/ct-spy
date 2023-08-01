import { Store } from '@ngrx/store';
import { MountResponse, mount } from 'cypress/angular';

export function createStoreSpy<T>(
  componentResponse?: MountResponse<Parameters<typeof mount>[0]>
): Cypress.Chainable<MountResponse<Parameters<typeof mount>[0]> | undefined> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { store } = componentResponse.component;

  cy.spy(store as Store<T>, 'dispatch').as('dispatchSpy');

  return cy.wrap(componentResponse);
}
