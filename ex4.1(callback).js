function register(cb) {
    setTimeout(() => {
        console.log("Register here");
        cb();
    }, 10000);
}

function login(cb) {
    setTimeout(() => {
        console.log("Login here");
        cb();
    }, 5000);
}

function getData(cb) {
    setTimeout(() => {
        console.log("Fetch data from DB");
        cb();
    }, 6000);
}

function displayData() {
    setTimeout(() => {
        console.log("View user data");
    }, 4000);
}

// Callback chaining
register(() => {
    login(() => {
        getData(() => {
            displayData();
        });
    });
});

console.log("Call another application");