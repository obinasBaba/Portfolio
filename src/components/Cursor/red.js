
let obj = [{
  name: 'henok',
  arr: [1,2,3,4]
},
  {
    name: 'asdf',
    arr: [1,2,3,4]
  }
];

obj.forEach(({name, arr}, i) => {
  obj[i].arr = [];
})

console.log(obj)
