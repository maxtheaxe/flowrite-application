// animated text for my flowrite application
// https://github.com/tameemsafi/typewriterjs

// modified demo
var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();

// typewriter.typeString('A simple yet powerful native javascript');
// 	  // .pauseFor(300)
// typewriter.start();

// $(document).ready(function(){
// 	typewriter.typeString('A simple yet powerful native javascript');
// 	  // .pauseFor(300)
// 	typewriter.start();
// });