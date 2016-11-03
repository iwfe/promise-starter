/*测试用例*/

'use strict'

let test1 = new Promise((res,rej)=>res(1));
let test2 = test1.then(val=>(val+1));
let test3 = test2.then(val=>(val+1));


test1.then(val=>console.log(val)) //1
test2.then(val=>console.log(val)) //2
test3.then(val=>console.log(val)) //3




let async1 = new Promise((res,rej)=>{
     setTimeout(res,100,1)
});
let async2 = async1.then((val)=>{
    return new Promise((res,rej)=>{
        setTimeout(res,100,val+1);
    });
});

async1.then(val=>console.log(val)) //1
async2.then(val=>console.log(val)) //2



// /*框架和库中的使用*/
//     //-----------------jquery
//     //ajax调用
//     $.ajax('iwjw.com').done(successCallback).fail(errorCallback)

//     //动画调用
//     $("div").each(function(i){
//         $( this ).fadeIn().fadeOut(1 * (i+1) );
//     });
//     $("div").promise().done(function() {
//         $("body").prepend( " Finished! " );
//     });

//     //---------------- vue Resource / angular2
//     this.$http.get('/someUrl').then((response) => {
//         // success callback
//       }, (response) => {
//         // error callback
//     });

//     //---------------- fetch Api
//     fetch('/users.json')
//       .then(function(response) {
//         return response.json()
//       }).then(function(json) {
//         console.log('parsed json', json)
//       }).catch(function(ex) {
//         console.log('parsing failed', ex)
//       })



