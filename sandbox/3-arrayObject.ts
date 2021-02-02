/* ============== ARRAY AND OBJECTS =============== */
// ARRAY
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(4)
// names[0] = 4

let numbers = [10, 20, 30, 40];
numbers.push(50);
// numbers.push('henry')
// numbers[1] = 'henry'

let mixed = ['ken', 4, 'chun', 8, 9, true];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// OBJECT
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30,
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'
// ninja.skills = ['fighting', 'sneaking']

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
  // skills: []
};
