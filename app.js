const btn = document.querySelector(".btn");
var counter = 0;
btn.addEventListener("click", async () => {
  if (counter == 1) {
    location.reload(true);
  }
  setTimeout(() => {  
    try {
      const randomImage = getRandomImage();
      var x = document.getElementById("image");
      x.style.visibility = "visible";
      x.src = images[randomImage];
      document.getElementById("punchline").innerHTML = punchlineText;
      btn.innerHTML = "More Lame Jokes Please!";
      } 
    catch (error) {
      console.log(error);
    }
    counter++;
  }, 100);
});

const images = ["./images/img1.jpg", "./images/img2.png", "./images/img3.jpg", "./images/img5.jpg", "./images/img6.jpg", "./images/img7.jpg", "./images/img8.jpg",
"./images/img9.jpg", "./images/img11.jpg", "./images/img12.jpg", "./images/img14.jpg", "./images/img15.jpg", "./images/img16.jpg"];

function getRandomImage() {
  return Math.floor(Math.random()*images.length);
}

$.getJSON('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky?type=twopart', function(data) 
{
    document.getElementById("setup").innerHTML = `${data.setup}`;
    punchlineText = `${data.delivery}`;
});
// https://official-joke-api.appspot.com/random_joke -- not in use
