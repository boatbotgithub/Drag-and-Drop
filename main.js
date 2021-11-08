const weapons = document.querySelectorAll('.weapon');


const equipSlot1 = document.querySelector('.equip-slot-1');
const equipWeapon1 = document.querySelector('.equip-weapon-1');


const equipSlot2 = document.querySelector('.equip-slot-2');
const equipWeapon2 = document.querySelector('.equip-weapon-2');

const equipSlot3 = document.querySelector('.equip-slot-3');
const equipWeapon3 = document.querySelector('.equip-weapon-3');





// 1. Drag - box เเรก
function dragWeapon(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log(event.target);
}
weapons.forEach((weapon) => {
    weapon.addEventListener('dragstart', dragWeapon);
});

// 2. Drop box เเรก
// >> https://codepen.io/bradtraversy/pen/odmVgN
// ฟังชั่นนี้จะทำงานเมื่อมีการลากไปจัดจุด box
function dragOverWeapon(event) {
    event.preventDefault();
}
function dropWeapon1(event) {
    console.log("drop")
    event.preventDefault();
    if(!event.dataTransfer) return console.log('box one None input');
    // จะเก็บ id class ที่เราวางลง
    const id = event.dataTransfer.getData('text/plain');
    const image = document.querySelector('#' + id);
    equipWeapon1.src = image.src;
}


function dropWeapon2(event) {
 
    event.preventDefault();
    if(!event.dataTransfer) return console.log('box one None input');
    // จะเก็บ id class ที่เราวางลง
    const id = event.dataTransfer.getData('text/plain');
    const image = document.querySelector('#' + id);
    equipWeapon2.src = image.src
}

function dropWeapon3(event) {
    event.preventDefault();
    if(!event.dataTransfer) return console.log('box one None input');
    // จะเก็บ id class ที่เราวางลง
    const id = event.dataTransfer.getData('text/plain');
    const image = document.querySelector('#' + id);
    equipWeapon3.src = image.src;
}


equipSlot1.addEventListener('dragover', dragOverWeapon);
equipSlot1.addEventListener('drop', dropWeapon1);


equipSlot2.addEventListener('dragover', dragOverWeapon);
equipSlot2.addEventListener('drop', dropWeapon2);

equipSlot3.addEventListener('dragover', dragOverWeapon);
equipSlot3.addEventListener('drop', dropWeapon3);


