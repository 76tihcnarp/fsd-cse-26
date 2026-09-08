// promise <asynchronous function>
//node is: single threaded(untill js), event driven , non blocking IO

// function register(){
//     waitfordelay(10000);
//     console.log("register here");
// }

// function login(){
//     waitfordelay(5000);
//     console.log("login here");
// }

// function get_data(){
//     waitfordelay(4000);
//     console.log("get data here");
// }

// function display_data(){
//     waitfordelay(6000);
//     console.log("displaying data here");
// }

// function waitfordelay(delay){
//  const mt=Date.now()+delay;
//  while(Date.now()<mt){

//  }
// }

// register();
// login();
// get_data();
// display_data();
// console.log("call another application");

function register(){
    setTimeout(()=>{ console.log("register here");},10000)
}

function login(){
    setTimeout(()=>{ console.log("login here");},5000)
    
}

function get_data(){
    setTimeout(()=>{ console.log("get data here");},6000)
    
}

function display_data(){
    setTimeout(()=>{ console.log("displaying data here");},4000)
}

// LOOP IN EXCEUTION    [CALL STACK FINAL DESTINATION]
// call stack ---> event queue ----> libuv(c++).{here node is not single threaded but works multi}
// executes all at once.

register();
login();
get_data();
display_data();
console.log("call another application");

//solutions:  CALLBACK , after es6 (PROMISE). ASYNC & AWAIT.

