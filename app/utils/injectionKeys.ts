/**
 * The purpose of this module is to define and export injection keys for providing and injecting
 * dependencies across the application.
 */
import type { AuthAPI_Auth } from '~/services/AuthAPI.types';

/* Auth API */
export const AUTH_API_AUTH_INJECTION_KEY = Symbol() as InjectionKey<AuthAPI_Auth>;
