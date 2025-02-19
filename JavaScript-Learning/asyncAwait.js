async function asAw(){
    console.log('Start');
}

// console.log(asAw());

// What is async and await in JavaScript? ans : async and await are used to handle asynchronous operations in JavaScript. 
// async is used to declare a function as asynchronous. await is used to wait for a promise to resolve or reject.

// What is the difference between async/await and promises? ans : async/await is built on top of promises. 
// async/await is more readable and easy to understand than promises.


async function asAw1 () {
    var a = 10;
    setTimeout(() => {
        console.log('Inside setTimeout');
    }, 5000);

    console.log(await a);

}


// // Instagram clone using Async Await

// async function postCode() {
//     post = new Promise((posted) => {
//         return setTimeout(() => {
//             posted("Posted Successfully");
//         }, 1000);
//     })
//     return post;
// }
// postCode().then((msg)=> {
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// });


// Instagram console demo for post like comment share

likeCode = async () => {
    return new Promise((likePost)=>{
        setTimeout(()=>{
            likePost('liked the post successfully');
        }, 5000);
    });
}
commentCode = async () => {
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost('commented the post successfully');
        }, 5000);
    });
}
shareCode = async () => {
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost('shared the post successfully');
        }, 5000);
    });
}

async function postCode(){
    var post = new Promise((posted) => {
        setTimeout(() => {  
            posted('posted the post successfully');
        }, 5000);
    });
    // console.log(await post);
    // console.log(await likeCode());
    // console.log(await commentCode());
    // console.log(await shareCode());

    const [Post, like, comment, share] = await Promise.all([post, likeCode(), commentCode(), shareCode()]);
    console.log(Post);
    console.log(like);
    console.log(comment);
    console.log(share);
}

postCode();