function loggerDecorator(target, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log('arguments: ', ...args);

    return originalMethod.apply(target, args);
  }
}


class Calc {
  @loggerDecorator
  add(a, b) {
    return a + b;
  }
}

const calc = new Calc;
const res = calc.add(2, 4);

console.log(res);
