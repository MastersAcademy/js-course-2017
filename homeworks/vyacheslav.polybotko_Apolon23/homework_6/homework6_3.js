let data = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  }
}

let data1 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 5
    }
  }
}
let object = {}

function objectLogger(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      object = obj[key];
      objectLogger(obj[key]);
    }
  }
  return object;
}

console.log(objectLogger(data));

console.log(objectLogger(data1));