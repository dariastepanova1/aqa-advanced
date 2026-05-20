const data = [{ id:1,name:"john",score:44 },{ id:2,name:"sarah",score:91 },{ id:3,name:"mike",score:72 },{ id:4,name:"emma",score:15 }];

function process(a) {
  let b = [];
  for (let i = 0;i < a.length;i++) {
    if (a[i].score > 50) {
      b.push({ user:a[i].name.toUpperCase(),passed:true,total:a[i].score * 2 });
    } else {
      b.push({ user:a[i].name,passed:false,total:a[i].score + 10 });
    }
  }
  return b;
}

const result = process(data);

result.forEach((x)=>{
  if (x.passed) {
    console.log("PASS:",x.user,x.total);
  } else {
    console.log("FAIL:",x.user,x.total);
  }
});

const nums = [1,2,3,4,5,6,7,8,9];

const filtered = nums.filter((n)=>{return n % 2 === 0;}).map((n)=>{return n * n;});

console.log(filtered);