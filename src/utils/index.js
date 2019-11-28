/* eslint-disable */
function getType(target) {
  return Object.prototype.toString.call(target);
}

export function deepClone(target, hash = new WeakMap()) {
  if (hash.has(target)) {
    return hash.get(target);
  }
  const cloneTarget = getType(target) === '[object Array]' ? [] : {};
  hash.set(target, cloneTarget);
  for (const key in target) {
    cloneTarget[key] = getType(target[key]) === '[object Object]'
      ? deepClone(target[key], hash)
      : target[key];
  }
  return cloneTarget;
}
