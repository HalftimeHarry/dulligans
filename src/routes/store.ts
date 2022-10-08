import { localStore } from './localStore'
import { writable } from 'svelte/store';

export const theme = localStore('theme', 'dark')

export const isOverlayOpenType = writable(false);

