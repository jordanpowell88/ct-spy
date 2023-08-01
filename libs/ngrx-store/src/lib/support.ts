import { createStoreSpy } from './ngrx-store';
import './types';

Cypress.Commands.add('createStoreSpy', { prevSubject: true }, createStoreSpy);

export { createStoreSpy };
