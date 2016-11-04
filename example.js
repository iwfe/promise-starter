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

/*回调地狱*/

    $('.iwjw').click(()=>{
        //验证用户登录
        header.login({
            method:'get',
            data:data,
            success:(response)=>{
                //回调更新界面
                $.ajax({
                    method:'post',
                    data:{...response,...others},
                    success:(response2)=>{
                        //更新界面逻辑
                    }
                })
            }
        })
    })

    let fs = require("fs");
    //读文件
    fs.readFile('package.json', function (err, data) {
       if (err) {
         throw new Error(err);
       }else{
         fileString = data.toString();
         //数据库更新
         mongoDbCollection.deleteOne(
            {a:3},
            function(err,result) {
                    fs.writeFile( //写日志
                        'test.log',
                        'a=3:\n'+fileString,
                         //后续逻辑
                        function(err,data){
                })
            })
       }
    });


    /*以爱屋吉屋PC房源关注为例*/
    let status='noAjax';
    $('.iwjw').click(()=>{
            if(status=='pending'){
                return false;
            }
            status='pending';
            //验证用户登录
            new Promise((res,rej)=>{
                 header.login({
                    method:'get',
                    data:data,
                    success:(response)=>res(response),
                    error:(userNotLogin)=>rej(userNotLogin)
                })
            })
            .then((response)=>{ //已登录，执行关注逻辑
                 return new Promise((res,rej)=>{
                    $.ajax({
                        method:'post',
                        data:{...response,...others},
                        success:(response)=>{ //关注成功
                             status='noAjax';
                             alert('关注成功');
                        },
                        error:(failReason)=>rej(failReason)
                    })
                 })
            })
            .catch((failReason)=>{ //未登录或者未关注成功
                status='noAjax';
                alert('关注失败'+failReason);
            })
    })

    fs.readFile('package.json', function (err, data) {
       if (err) {
         throw new Error(err);
       }else{
         fileString = data.toString();
         //数据库更新
         mongoDbCollection.deleteOne(
            {a:3},
            function(err,result) {
                    fs.writeFile( //写日志
                        'test.log',
                        'a=3:\n'+fileString,
                         //后续逻辑
                        function(err,data){
                })
            })
       }
    });






/*框架和库中的使用*/
    //-----------------jquery
    //ajax调用
    $.ajax('iwjw.com').done(successCallback).fail(errorCallback)

    //动画调用
    $("div").each(function(i){
        $( this ).fadeIn().fadeOut(1 * (i+1) );
    });
    $("div").promise().done(function() {
        $("body").prepend( " Finished! " );
    });


    $.when($.ajax("/page1.php"), $.ajax("/page2.php")).done(function(a1,  a2){
      /* a1 and a2 are arguments resolved for the
          page1 and page2 ajax requests, respectively */
      var jqXHR = a1[2]; /* arguments are [ "success", statusText, jqXHR ] */
      if ( /Whip It/.test(jqXHR.responseText) ) {
        alert("First page has 'Whip It' somewhere.");
      }
    }).fail(function(error){console.log(error)});

    //---------------- vue Resource / angular2

    this.$http.get('/someUrl')
        .then((response) => {
            // success callback
          }, (response) => {
            // error callback
        });

    http.get('people.json')
        .subscribe((res:Response) =>
            this.people = res.json())
        .catch((error:ResponseError)=>
            alert(error));


    //---------------- fetch Api
    fetch('/users.json')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })



