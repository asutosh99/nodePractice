const { readFile, writeFile } = require('fs')
console.log('hii');
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