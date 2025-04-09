interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// name,moveSpeed,move 반드시 가지고있어야함- implements
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}
  move(): void {
    console.log(`${this.moveSpeed}속도로 이동가능`);
  }
}
