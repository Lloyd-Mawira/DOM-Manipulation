const p1 = document.createElement("p1");
let content = p1.innerHTML = "That's all folks!";
let main = document.querySelector("main");
let joke1 = "Did you hear about claustrophobic astronout? He just needed a little space.";
let joke2 = "Knock Knock. Who is there? Interrupting cow. Inter...MOOO";
let joke3 = "Why don't scientists trust atoms? Because they make up everything";
let templateheader = "My Jokes";
let temp = `${templateheader}
<ul><li>${joke1}</li>
<li>${joke2}</li>
<li>${joke3}</li>
</ul>`;
main.innerHTML = temp;
document.body.append(content);