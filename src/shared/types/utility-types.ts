export type Nullable<T> = T | null;
export type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
export type PartialExcept<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;
