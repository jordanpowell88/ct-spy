import { MountResponse, mount } from 'cypress/angular';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      createStoreSpy(
        componentResponse?: MountResponse<Parameters<typeof mount>[0]>
      ): Chainable<MountResponse<Parameters<typeof mount>[0]> | undefined>;
    }
  }
}
