export {};

declare global {
  type Nullable<T> = T | null;
  type Primitive = string | number | boolean | null | undefined;
  type AnyObject = { [key: string]: any };
}
