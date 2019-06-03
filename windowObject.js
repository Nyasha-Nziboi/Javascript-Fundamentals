// WINDOW OBJECTS/PROPERTIES/METHODS

//Alert
window.alert('Hello World');
alert('Hello Worlds');

// Prompt
const input = prompt();
alert(input);

//Confirm (Used when deleting something)
if (confirm('Are you sure')) {
	console.log('Yes');
}

//Redirect
window.location.href = 'http://google.com';

//Reload
window.location.reload();

//History takes you back to the sites you visited
window.history.go(-1);

//Navigator (Netscape) have a lot of functions
val = window.navigator;

//Platform the user is using
val = window.navigator.platform;
