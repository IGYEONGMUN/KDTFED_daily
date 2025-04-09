"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// name,moveSpeed,move 반드시 가지고있어야함- implements
class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.moveSpeed}속도로 이동가능`);
    }
}
