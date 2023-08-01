# @ct-spy/ngrx-store

Easily test Component's with a [NgRx Store](https://ngrx.io) using Cypress Component Testing.

## Usage

```
npm install @ct-spy/ngrx-store
// or
yarn add @ct-spy/ngrx-store
```

Import the plugin into your `cypress/support/component.ts` file:

```
import '@ct-spy/ngrx-store'
```

You can now create the NgRx Store Spy using the `createStoreSpy()` by chaining it to the [mount command](https://docs.cypress.io/api/commands/mount).

```
it('increments the count', () => {
    cy.mount(StepperComponent).createStoreSpy();
    cy.get('span').should('have.text', 0);
    cy.get('button').contains('+').click();
    cy.get('@dispatchSpy').should('have.been.calledWith', incrementCount());
    cy.get('span').should('have.text', 1);
  });
```

The `createStoreSpy()` command will setup a [spy](https://docs.cypress.io/api/commands/spy) on the NgRx store's `dispatch` method. This makes it so you can easily assert actions are dispatched in your tests by referencing the spyies [alias](https://docs.cypress.io/api/commands/spy#Aliases) `@dispatchSpy`.

```
cy.get('@dispatchSpy').should('have.been.calledWith', myActionName())
```
