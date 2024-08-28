let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function(){

    let randomwho=Math.floor(Math.random()*who.length);
    let randomaction=Math.floor(Math.random()*action.length);
    let randomwhat=Math.floor(Math.random()*what.length);
    let randomwhen=Math.floor(Math.random()*when.length);

    document.querySelector("#excuse").innerHTML= who[randomwho]+ " " + action [randomaction] + " " + what [randomwhat] + " " + when [randomwhen];
};
