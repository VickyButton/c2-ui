/**
 * The purpose of this module is to define and export injection keys for providing and injecting
 * dependencies across the application.
 */
import type { AuthAPI_Auth } from '~/services/AuthAPI.types';
import type { DevicesAPI_GetDevice, DevicesAPI_GetDevices } from '~/services/DevicesAPI.types';
import type { GlobalMapConstructor } from '~/services/GlobalMap.types';
import type { API } from '~/types/api.types';
import type { Storage } from '~/types/storage.types';

/* API */
export const API_INJECTION_KEY = Symbol() as InjectionKey<API>;

/* Auth API */
export const AUTH_API_AUTH_INJECTION_KEY = Symbol() as InjectionKey<AuthAPI_Auth>;

/* Devices API */
export const DEVICES_API_GET_DEVICES_INJECTION_KEY = Symbol() as InjectionKey<DevicesAPI_GetDevices>;
export const DEVICES_API_GET_DEVICE_INJECTION_KEY = Symbol() as InjectionKey<DevicesAPI_GetDevice>;

/* Global Map */
export const GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY = Symbol() as InjectionKey<GlobalMapConstructor>;

/* Storage */
export const STORAGE_INJECTION_KEY = Symbol() as InjectionKey<Storage>;
