const firstName = 'Nyasha';
const age = 24;
const job = 'Software Developer';
const city = 'Melbourne';
let html;

//with template literal
html = `
<ul>
 <li>Name: ${firstName}</li>
 <li>Age: ${age}</li>
 <li>Job: ${job}</li>
 <li>City: ${city}</li>
</ul>
`;
document.body.innerHTML = html;
