const sounds = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
};

const makeDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.id = text;
    div.textContent = text;
    document.getElementById('container').appendChild(div);
};

const show = () => Object.keys(sounds).forEach(makeDiv);

const playSound = (letter) => {
    const audio = new Audio(`./sounds/${sounds[letter]}`);
    audio.play();
};

const addEffect = (letter) => document.getElementById(letter).classList.add('active');

const removeEffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
};

const runDiv = (event) => {
    const letter = event.type == 'click' ? event.target.id : event.key.toUpperCase();
    
    const aloudLetter = sounds.hasOwnProperty(letter);
    if (aloudLetter) {
        addEffect(letter);
        playSound(letter);
        removeEffect(letter);
    }
};

show(sounds);

document.getElementById('container').addEventListener('click', runDiv);

window.addEventListener('keydown', runDiv);