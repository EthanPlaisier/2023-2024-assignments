const goButton = document.getElementById('go');
const gameDiv = document.getElementById('game');

goButton.addEventListener('click', startGame);

function startGame() {
  goButton.style.display = 'none';
  gameDiv.style.backgroundColor = 'red';

  const randomTime = Math.floor(Math.random() * 10000) + 1;

  setTimeout(() => {
    gameDiv.style.backgroundColor = 'green';
    const startTime = Date.now();

    gameDiv.addEventListener('click', () => {
      const endTime = Date.now();
      const reactionTime = endTime - startTime;
      alert(`Je reactietijd was: ${reactionTime} milliseconden`);
      resetGame();
    });
  }, randomTime);
}

function resetGame() {
  gameDiv.style.backgroundColor = 'red';
  goButton.style.display = 'block';
}
