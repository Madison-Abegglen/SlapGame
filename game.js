const gnoll = {
    name: 'Angry Gnoll',
    hits: 0,
    health: 100,
    img: 'images/gnoll.brick.png'
}

const knight = {
    name: 'Evil Knight',
    hits: 0,
    health: 125,
    img: 'images/knightStatue.brick.png'
}

const ghost = {
    name: 'Peeved Ghost',
    hits: 0,
    health: 150,
    img: 'images/wraith.brick.png'
}


var name = 'Bork'
var health = 100
var hits = 0

function update() {
    if (health < 0) {
        health = 0;
        document.getElementById('slap').disabled = true;
        document.getElementById('punch').disabled = true;
        document.getElementById('stab').disabled = true;
    }
    document.getElementById('health').innerText = health;
    document.getElementById('hits').innerText = hits;
    document.getElementById('name').innerText = name;
}

function slap() {
    health -= 1;
    hits += 1;
    update()
}

function punch() {
    health -= 5;
    hits += 1;
    update()
}

function stab() {
    health -= 10;
    hits += 1;
    update()
}



update()