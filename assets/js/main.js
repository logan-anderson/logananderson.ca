let logan_brand = $('.logan-title');
let joke_text = $('#joke')


let scroll_test = anime({
  targets: 'div.box.red',
  translateY: 250,
  direction: 'alternate',
  duration: 1000,
  autoplay: false
});

let scroll_top = anime({
  targets: '#logan-anderson-svg',
  duration: 2000,
  translateY: 150,
  autoplay: false,
  scale: {
    value: .01,
    duration: 2500,
  },

});
setInterval(() => {
  scroll_top.seek(window.scrollY);
  // console.log(window.scrollY)
  if(window.scrollY < 990) {
    logan_brand.addClass('hidden')
  } else {
    logan_brand.removeClass('hidden')
  }
}, 25)



let logan_anime = anime({
  targets: '#svg-id .logan-lines .logan-path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function (el, i) {
    return i * 250
  },
  direction: 'alternate',
  loop: true
});
let logan_anderson_anime = anime({
  targets: '#logan-svg-id .logan-anderson-lines .logan-anderson-path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function (el, i) {
    return i * 175;
  },
  endDelay: 1000,
  direction: 'alternate',
  loop: true
});
var randomJoke;
var jokeCategory = "Programming";
var format = "json";
var blacklistFlags = "nsfw";


const res = new Request(`https://sv443.net/jokeapi/category/${jokeCategory}?blacklistFlags=${blacklistFlags}&format=${format}`)

let joke = fetch(res)
  .then(response => {
    if (response.status === 200) {
      json_joke = response.json()
      console.log(json_joke)
        json_joke.then((json)=>{
          if(json.type == "twopart"){
            some_text = json.setup + "? \n" + json.delivery 
            console.log("setup: " + json.setup) 
            console.log("delivery: "+ json.delivery)
            joke_text.text(some_text)
          }
          else {
            joke_text.text(json.joke)
            console.log("joke: "+ json.joke)
          }
          console.log(json)
        }
      )
      return json_joke;
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
    // ...
  }).catch(error => {
    console.error(error);
  });


