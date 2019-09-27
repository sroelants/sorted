function* generator1(array) {
  console.log("Gen1 here");
  yield* array.concat(generator2(array));
}

function* generator2(array) {
  for (let i = 0; i < array.length; i++) {
    yield [array[i]];
  }
}

gen = generator1([1,2,3]);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
for (x in generator1([1,2,3])) {
  console.log(x);
}
