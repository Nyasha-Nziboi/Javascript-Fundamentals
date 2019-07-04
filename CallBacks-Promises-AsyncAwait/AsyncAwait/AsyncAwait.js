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

//ASYNC AWAIT

async function init() {
	await createPost({ title: 'Post three', body: 'This is post three' });
	getPosts();
}
init();

//ASYNC AWAIT FETCH
async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	console.log(data);
}
fetchUsers();
