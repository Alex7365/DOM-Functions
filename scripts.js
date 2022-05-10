// Create a paragraph tag
var paragraph = document.createElement('p');
// Add text to paragraph
paragraph.textContent = 'The DOM is the Bomb!';
// Add text to body
document.body.appendChild(paragraph);
// Create DIV Elemnt
var div = document.createElement('DIV');
// Set Height of Element
div.style.height = '100vh';
// Append Element to DOM
document.body.appendChild(div);
// Add Even Listener to Element
div.addEventListener('mousemove', function(event) {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  div.textContent = x + ',' + y;
  div.style.backgroundColor = 'rgb(' + x + ',' + y + ', 100)';
});