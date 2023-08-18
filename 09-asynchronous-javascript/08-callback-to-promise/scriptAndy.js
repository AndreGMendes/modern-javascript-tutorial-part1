

const posts = [
    {title: 'Post One', body : 'This is post one'},
    {title: 'Post Two', body : 'This is post two'}
];


// Function to create the Post and call the Get all posts after
function createPost (post) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {

            let error = false;

            if (!error) {
                posts.push(post);
                resolve();
            } else {
                reject ('Something went wrong');
            }

        }, 2000);
    });
}

// Function to get all the posts on the DOM
function getPosts () {
    setTimeout (() => {
        posts.forEach(function (post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);            
        });
    }, 1000);
}


// Calling the Function Promisse
createPost(
    {title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(showError);


// Function for displaying the Error on the DOM
function showError (error) {
    const h3 = document.createElement('h3');
    h3.innerHTML = `<h3>${error}</h3>`;
    document.querySelector('#posts').appendChild(h3);

}


// This shows the the Promisse is non blocking
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
function autoTimer() {
    let counter = 0;

    intervalID = setInterval (() => {
        
        counter++;

        if (counter === 5) {
            clearInterval(intervalID);
            console.log(`Program terminated. \nTime elapsed: ${counter}s`);
        } else {

            console.log(`${counter}s`);
        }
        

    }, 1000);
    
}

autoTimer();


