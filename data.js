const name = document.querySelector('.name');
const basics = document.querySelector(".theBasics");
const story = document.querySelector(".theStory");
let request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/users/sbscrino');
request.addEventListener('load', function() {
  const obj = JSON.parse(this.responseText);
  console.log(obj);
  // basicscont.textContent;
  // basics.appendChild('p');
  name.innerHTML = obj.name;

  let basicscont = `<h2>The Basics</h2>
  <p>${ obj.name }</p>
  <p>${ obj.html_url}</p>
  <p>${ obj.company}</p>
  <p>${ obj.html_url}</p>`;
  basics.innerHTML = basicscont;

  let storycont = `<h2>The Basics</h2>
  <p>"gfuiebbdjklbjkleb jb vjjdj v vfjelbv nvevfnd vfnjvdn"</p>`
  story.innerHTML = storycont;
});

//the line below this is NECESSARY to get the data.
request.send();
