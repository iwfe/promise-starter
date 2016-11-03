/*Promise的数据结构描述*/


        new Promise((res,rej)=>res(1))
                    .then((value)=>{
                         return new Promise((res,rej)=>{
                            res(value+1)
                        })})
                    .then((value)=>{
                         console.log(value); //2
                    })