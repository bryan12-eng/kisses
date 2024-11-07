// Select all kisses and moons
const kisses = document.querySelectorAll('.kiss');
const moons = document.querySelectorAll('.moon');

// Randomly move each kiss slightly for a drifting effect
kisses.forEach(kiss => {
  setInterval(() => {
    const offsetX = (Math.random() - 0.5) * 10; // Random x drift
    const offsetY = (Math.random() - 0.5) * 10; // Random y drift
    kiss.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }, 2000);
});

// Randomly move each moon slightly for a drifting effect
moons.forEach(moon => {
  setInterval(() => {
    const offsetX = (Math.random() - 0.5) * 5; // Random x drift
    const offsetY = (Math.random() - 0.5) * 5; // Random y drift
    moon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }, 3000);
});
