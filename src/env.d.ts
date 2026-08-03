/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
    __lenisAnchorsBound?: boolean;
    __mobileNavBound?: boolean;
  }
}

export {};
