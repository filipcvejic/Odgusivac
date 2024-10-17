declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare function gtag(...args: (string | number | boolean | unknown)[]): void;
