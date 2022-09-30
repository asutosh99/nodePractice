const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./Content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(result);
    }
})
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     console.log(result);
// })