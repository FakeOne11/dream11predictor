// Countdown Timer Function
const countdown = () => {
    const endTime = new Date().getTime() + 60 * 1000; // 1-minute countdown
    const timer = document.getElementById('timer');

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance <= 0) {
            clearInterval(interval);
            timer.innerHTML = 'EXPIRED';
            return;
        }

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timer.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
};

countdown();
