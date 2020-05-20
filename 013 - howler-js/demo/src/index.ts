import { Howl, Howler } from 'howler';

const v = 1;
console.log(v);

const sound = new Howl({
  src: [
    'https://course-assets.saybot.net/generate/pieces/eb8/eb8b492d8f02b81856708d22d8fcf3564de14b3be6fdbddc8fd417eb0151c8ef.mp3'
  ]
})

sound.play();

