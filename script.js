function updateClock() {
      const timeElement = document.getElementById('time');
      const currentTime = new Date().toLocaleTimeString();
      timeElement.textContent = currentTime;
    }

    // Update the clock immediately and then every second
    updateClock();
    setInterval(updateClock, 1000);
