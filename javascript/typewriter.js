window.addEventListener ("load", function(){
  // GET TARGET ELEMENT
	let target = document.getElementById("typewriter");
  // TYPEWRITER TEXT
  let customText = "At the intersection of art and logic.";
  // TYPEWRITER EFFECT
  let pointer = 0;
  let timer = setInterval(function(){
    pointer++;
    if (pointer <= customText.length) {
    	target.innerHTML = customText.substring(0, pointer);
		}
    else { pointer = 0; }
		}, 150) ;
});
	