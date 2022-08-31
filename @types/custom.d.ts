type WithChildren<T = Record<string, unknown>> = T & { children?: React.ReactNode }
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.scss';
