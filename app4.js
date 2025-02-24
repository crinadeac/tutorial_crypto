//crearea unui folder
const { Console } = require('console');
const fs = require('fs');
// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('folder successfully created');
//         //stergerea folderului nou creat, prin remove dir
//         fs.rmdir('tutorial',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('successfully deleted the folder');
//             }
//         })

//         //crearea unui fisier in cadrul folderului nou creat
//         fs.writeFile('./tutorial/example.txt','continut fisier 123',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('successfully created file');
//             }
//         })
//     }

// })

//cum stergem un folder cu un fisier in el?
//mai intai stergem fisierul din folder, apoi folderul
// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         //acum stergem folderul, la succes
//         fs.rmdir('tutorial',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('deleted folder');
//             }
//         });
//     }
// });

//cum stergem mai multe fisiere dintr un folder "example"?
//citim folderul "example",adica fisierele din el, files este un array de fisiere
fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./example/' + file,(err)=>{
                if(err)
                    console.log(err); 
                else{
                    console.log('successfully deleted file');
                } 
            })
        }
    }
});

