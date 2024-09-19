import { writable } from 'svelte/store';

const seconds = 60;

export const count = writable(seconds);
