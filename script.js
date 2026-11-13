
const button = document.getElementById('Pink_Donut');
const label = document.getElementById('num');
const goodLabel = document.getElementById('goodLabel');
const goodLabel2 = document.getElementById('goodLabel2');
const goodLabel3 = document.getElementById('goodLabel3');
const goodLabel4 = document.getElementById('goodLabel4');
const goodLabel5 = document.getElementById('goodLabel5');

let count = 0;
let autoClicker = false;
let autoClicker2 = false;
let autoClicker3 = false;
let autoClicker4 = false;
let autoClicker5 = false;

// Update counter
function updateCount(amount) {
    count += amount;
    label.textContent = count;
    checkMilestones();
}

// Level 1 autoclicker
function startAutoClicker() {
    if (autoClicker) return;

    autoClicker = true;

    setInterval(() => {
        updateCount(1);
    }, 500);
}

// Level 2 autoclicker
function startAutoClicker2() {
    if (autoClicker2) return;

    autoClicker2 = true;

    setInterval(() => {
        updateCount(1);
    }, 350);
}

// Level 3 autoclicker
function startAutoClicker3() {
    if (autoClicker3) return;
    autoClicker3 = true;
    setInterval(() => {
        updateCount(1);
    }, 200)
}

// Level 4 autoclicker
function startAutoClicker4() {
    if (autoClicker4) return;
    autoClicker4 = true;
    setInterval(() => {
        updateCount(5);
    }, 100)
}

// Level 5 autoclicker
function startAutoClicker5() {
    if (autoClicker5) return;

    autoClicker5 = true;

    setInterval(() => {
        updateCount(150);
    }, 1);
}
// Milestone messages
function checkMilestones() {

    // Level 1 unlocked
    if (count >= 100 && !autoClicker) {
        goodLabel.textContent =
            "Good Job! Keep Going, you now have the first level of autoclicker!";
        goodLabel.style.display = "block";

        startAutoClicker();
    }

    // Hide level 1 message
    if (count >= 115) {
        goodLabel.style.display = "none";
    }

    // Level 2 unlocked
    if (count >= 500 && !autoClicker2) {
        goodLabel2.textContent =
            "Good Job! Keep Going, you now have the second level of autoclicker!";
        goodLabel2.style.display = "block";

        startAutoClicker2();
    }

    // Hide level 2 message
    if (count >= 515) {
        goodLabel2.style.display = "none";
    }
    // Level 3 unlocked
    if (count >= 1000 && !autoClicker3) {
        goodLabel3.textContent =
            "Good Job! Keep Going, you now have the third level of autoclicker!";
        goodLabel3.style.display = "block";

        startAutoClicker3();
    }

    // Hide level 3 message
    if (count >= 1015) {
        goodLabel3.style.display = "none";
    }

    // Level 4 unlocked
    if (count >= 1350 && !autoClicker4) {
        goodLabel4.textContent =
            "Good Job! Keep Going, you now have the fourth level of autoclicker!";
        goodLabel4.style.display = "block";

        startAutoClicker4();
    }
    // Hide level 4 message
    if (count >= 1365) {
        goodLabel4.style.display = "none";
    }

     // Level 5 unlocked
    if (count >= 3500 && !autoClicker5) {
        goodLabel5.textContent =
            "Good Job! Keep Going, you now have the fifth and final level of autoclicker!  You only have 10,000 more points to get til you beat the game good luck!";
        goodLabel5.style.display = "block";

        startAutoClicker5();
    }

        // Hide level 4 message
    if (count >= 4000) {
        goodLabel5.style.display = "none";
    }
}

// Clicking the donut
button.addEventListener('click', function () {
    updateCount(1);
});

// Keyboard clicking
document.addEventListener('keydown', function (event) {

    const validKeys = [
        'Space',
        'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT',
        'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
        'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG',
        'KeyH', 'KeyJ', 'KeyK', 'KeyL',
        'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB',
        'KeyN', 'KeyM'
    ];

    if (validKeys.includes(event.code) && !event.repeat) {
        event.preventDefault();
        updateCount(1);
    }
});
