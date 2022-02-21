import a from './a';
import qs from 'query-string';

const isFn = (f: () => void) => typeof f === 'function';
console.log(a, qs);
export default isFn;
