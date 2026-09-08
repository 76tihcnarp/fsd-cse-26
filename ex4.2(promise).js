function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("register here");
            resolve();
        },10000)
    })
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login here");
            resolve();
        },5000)
    })
}

function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("get data here");
            resolve();
        },6000)
    })
}

function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("diplaying data here");
            resolve();
        },4000)
    })
}

register()
        .then(login)
        .then(getdata)
        .then(displaydata)
        .catch((arr)=>{
            console.log("error:",arr);
        })

console.log("call another application");