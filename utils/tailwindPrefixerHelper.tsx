export default (classes: string, prefix: string) => classes.split(' ')
  .map((className) => `${prefix}:${className}`)
  .join(' ');
