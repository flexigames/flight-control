import kaboom from 'kaboom';
import game from './scenes/game';
import gameover from './scenes/gameover';

kaboom({
  background: [20, 40, 50],
  width: 480,
  height: 360,
  scale: 2,
  canvas: document.getElementById('canvas'),
  font: 'sink'
});

scene('game', game);
scene('gameover', gameover);

go('game');