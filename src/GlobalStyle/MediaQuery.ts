type TypeBreakpoints = Array<number>;
type TypeMq = TypeBreakpoints | Array<{ [key: number]: string }>;
const breakpoints: TypeBreakpoints = [576, 768, 992, 1200, 1400];
const mq: TypeMq = breakpoints.map(
  (bp) => `@media screen and (min-width : ${bp}px)`,
);
export default mq;
