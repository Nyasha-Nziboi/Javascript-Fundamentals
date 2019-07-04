//Using Promises
const posts = [ { title: 'Post One', body: 'This is post one' }, { title: 'Post Two', body: 'This is post two' } ];

//getPosts is taking 1 second to show on the DOM
function getPosts() {
	setTimeout(function() {
		let output = '';
		posts.forEach(function(post, index) {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

//Using a Promise to resolve or reject if thers an error
function createPost(post) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			posts.push(post);
			const error = false;
			if (!error) {
				resolve();
			} else {
				reject('Error something went wrong');
			}
		}, 2000);
	});
}
// createPost({ title: 'Post three', body: 'This is post three' })
// 	.then(getPosts) //THEN GET POSTS
// 	.catch((err) => console.log(err)); //Catch error if error is true

// Promise.all
Promise.all([ createPost, getPosts ]).then((values) => console.log(values));

//Fetch API
const promise1 = fetch('https://jsonplaceholder.typicode.com/posts') //get Json from URL
	.then((response) => response.json()) //store it as Json
	.then((json) => console.log(json)); //display Json
