//Using callbacks to sync
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

//createPost is taking 2 seconds to show on the DOM (doesnt show becuase its too late)
function createPost(post, callback) {
	setTimeout(function() {
		posts.push(post);
		callback(); //runs the call back
	}, 2000);
}

// getPosts();

createPost({ title: 'Post three', body: 'This is post three' }, getPosts);
