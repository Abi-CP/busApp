// stores.js
import { writable } from 'svelte/store';

// Create a writable store
export const searchData = writable({});
export const user = writable(null);
export const premium = writable(Boolean);
export const busToBook = writable({});