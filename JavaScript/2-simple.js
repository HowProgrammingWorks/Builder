'use strict';

class Product {
  constructor() {
    this.field1 = 'value1';
    this.field2 = 'value2';
    this.field3 = 'value3';
  }
}

const createInstance = () => {
  const instance = new Product();
  instance.field1 = 'step1';
  instance.field2 = 'step2';
  instance.field3 = 'step3';
  return instance;
};

// Usage

const instance = createInstance();
console.dir(instance);
