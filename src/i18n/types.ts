import type { pt } from './pt';

type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof pt>;
