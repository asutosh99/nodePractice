const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./content/first.txt','utf8');
console.log(first);

writeFileSync('./content/result.txt',`here is ${first}`,{flag:'a'});