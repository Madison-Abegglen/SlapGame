function update() {
    if (target.health < 0) {
        target.health = 0;
        document.getElementById('slap');
        document.getElementById('punch');
        document.getElementById('stab');
    }
    document.getElementById('health').innerText = target.health;
    document.getElementById('hits').innerText = target.hits;
    document.getElementById('name').innerText = target.name;
}

let items = {
    fire: { name: 'Fire', modifier: 2, description: 'Fire will burn most things' },
    poison: { name: 'Poison', modifier: 5, description: 'And you thought food poisoning was bad' },
    bleeding: { name: 'Bleeding', modifier: 10, description: 'Yep, thats gonna need some medical attention' }
}

let target = {
    name: "Bork the Gnoll",
    health: 100,
    hits: 0,
    items: []
}

function reset() {
    target = {
        name: "Bork the Gnoll",
        health: 100,
        hits: 0,
        items: []
    }
    update();
}

function giveFire() {
    target.items.push(items.fire);
}

function givePoison() {
    target.items.push(items.poison);
}

function giveBleeding() {
    target.items.push(items.bleeding);
}

function addMods() {
    let total = 0;
    for (let i = 0; i < target.items.length; i++) {
        let currentItem = target.items[i]
        total += currentItem.modifier
    }
    return total;
}

function slap() {
    target.health -= 1 + addMods();
    target.hits += 1;
    update()
}

function punch() {
    target.health -= 5 + addMods();
    target.hits += 1;
    update()
}

function stab() {
    target.health -= 10;
    target.hits += 1;
    update()
}

update()