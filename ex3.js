const num=[1,2,3,4,5,6,7,8,9];
const even= num.filter((i)=>i%2==0);
console.log(num);
console.log(even);
const sq= num.map((i)=>i*i);
console.log(sq);
const single= sq.reduce((s,i)=>s+i);
console.log("sum=",single);