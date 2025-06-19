// 倒數計時器
let countdown;
function startTimer() {
    const input = document.getElementById("timer-input").value;
    const timeInSeconds = input * 3600; // 轉換為秒
    let remainingTime = timeInSeconds;

    clearInterval(countdown);
    countdown = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(countdown);
            alert("時間到！");
        } else {
            remainingTime--;
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;
            document.getElementById("timer-display").innerText = `${hours} 小時 ${minutes} 分 ${seconds} 秒`;
        }
    }, 1000);
}

// 計時器
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
        const seconds = String(stopwatchTime % 60).padStart(2, '0');
        document.getElementById("stopwatch-display").innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById("stopwatch-display").innerText = "00:00:00";
}

// 勵志文字生成器
const quotes = [
    "每一次的努力，都是為了更接近成功。",
    "不要等待機會，而是創造機會。",
    "成功不是終點，失敗也不是致命的，重要的是繼續前進的勇氣。",
    "書籍是人類進步的階梯。",
    "閱讀是靈魂的盛宴。"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-display").innerText = quotes[randomIndex];
}