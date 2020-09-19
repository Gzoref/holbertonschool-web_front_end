function changeMode(size, weight, transform, background, color) {
  document.documentElement.style["fonts-size"] = size;
  document.documentElement.style["font-weight"] = weight;
  document.documentElement.style["text-transform"] = transform;
  document.documentElement.style["background-color"] = background;
  document.documentElement.style["color"] = color;
}

 let spooky =  function(){
	changeMode(9, "bold", "uppercase", "pink", "green");
}

 let darkMode = function(){ 
	changeMode(12, "bold", "capitalize", "black", "white");
}

 let screamMode = function (){
	changeMode(12, "normal", "lowercase", "white", "black");
}

function main() {
  /* body of page */
  let body = document.body;

  const text = document.createTextNode("Welcome Holberton!");

  /* <p> tag */
  let p = document.createElement("p");

  /* Add text to <p> tag */
  p.appendChild(text);

  /* Add <p> tag to body */
  body.appendChild(p);


  /* Spooky mode */
  let spookyButton = document.createElement('button');
  const spookyText = document.createTextNode('Spooky');
  spookyButton.setAttribute('onClick', 'spooky()');
  spookyButton.appendChild(spookyText);
  body.appendChild(spookyButton);

  /* Dark mode */
  let darkButton = document.createElement('button');
  const darkText = document.createTextNode('Dark mode');
  darkButton.setAttribute('onClick', 'darkMode()');
  darkButton.appendChild(darkText);
  body.appendChild(darkButton);

  /* Scream mode */
  let screamButton = document.createElement('button');
  const screamText = document.createTextNode('Scream mode');
  screamButton.setAttribute('onClick', 'screamMode()');
  screamButton.appendChild(screamText);
  body.appendChild(screamButton);

}

 main();
