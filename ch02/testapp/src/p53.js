let arr = [10, 20, 30, 40];
let [a, b, c] = arr;
console.log(a,b,c);

let p1 = {name:"홍길동", age:20, gender:"M"};
let {name,age,gender} = p1;
console.log(name);

// 내부 인덱스 지정
let {name:n} = p1;
console.log(n);
