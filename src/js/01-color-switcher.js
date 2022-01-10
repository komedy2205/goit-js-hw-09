
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    changeBody: document.body,
};

refs.startBtn.addEventListener('click', () => { timer.start(); });
refs.stopBtn.addEventListener('click', () => { timer.stop(); });

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const timer = timeCounter(deltaTime);
            
            updateBackgroundColor(timer);

        }, 1000);
            
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }

};

function updateBackgroundColor({ mins, secs }) {
    refs.changeBody = `${mins}:${secs}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function timeCounter(time) {
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { mins, secs };
}
