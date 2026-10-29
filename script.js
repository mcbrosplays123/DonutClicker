
const button = document.getElementById('Pink_Donut');
const label = document.getElementById('num');

let count = 0;

// Increase the counter when clicking the donut
button.addEventListener('click', function () {
    count += 1;
    label.textContent = count;
});

// Keys that increase the counter
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

    if (validKeys.includes(event.code)) {
        event.preventDefault();

        count += 1;
        label.textContent = count;
    }
});
