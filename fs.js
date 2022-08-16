const fs = require('fs')

 fs.readFile('./docs/file1.txt', (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

// fs.mkdir('./docs/mkdir', (err)=>{
//     if(err) throw err
// });

fs.writeFile('./docs/file2.txt',"hi there!", 'utf-8', (err)=>{
    if(err) throw err
})


fs.rm('./docs/file3.txt', (err)=>{
    if(err) throw err
});

// fs.unlink('./docs/file3.txt')