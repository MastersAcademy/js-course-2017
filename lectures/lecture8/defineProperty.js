// pseudocode

const descriptor = {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
    writable: true,
    value: null
};

Object.defineProperty(target, key, descriptor);
