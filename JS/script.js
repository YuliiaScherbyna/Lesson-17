let comment = 'You can ignore single and double quote like this: \\\'\\\' \\\"\\\" ';

console.log(comment);


alert('Please enter your data');
let name = prompt("What's your name?", 'Name');
alert(`Your name is: ${name}`);
let lastName = prompt("What's your surname?", 'surname');
alert(`Your full name is: ${name} ${lastName}`);
let age = prompt("How old are you?", 'age');
alert(`Your full name is: ${name} ${lastName}, your age is: ${age}`);
let admin = confirm('Are you admin?');
alert(`Your full name is: ${name} ${lastName}, your age is: ${age}, admin status: ${admin}`);
