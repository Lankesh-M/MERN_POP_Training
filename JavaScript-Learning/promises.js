function promiseEg(){
    return new Promise((res, reject) => {
            res('The Promise is resolved');
    });
}

promiseEg()
console.log(promiseEg())

async function locationFinder(loc, time){
    var locPromise = new Promise((locFound, locNotFound) => {
        setTimeout(() => {
            if(isLocationFound(loc, time)){
                locFound("Location is Found");
            }else{
                locNotFound('Location not found');
            }
        }, time);
    });
    console.log(await locPromise);
return locPromise;
    // locPromise.then((message) => {
    //     console.log(message);
    // }).catch((error) => {
    //     console.log(error);
    // });
}

var isLocationFound = (loc, time) => {
    if(loc === "Chennai" && time >= 2000){
        return true;
    }else{
        return false;
    }
}
locationFinder('Chennai', 3000);
// locationFinder('Chennai', 3000).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// });; // This will find the location


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is Resolved")
    }, 2000);
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

