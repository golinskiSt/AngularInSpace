export class SpaceShip {
  modelName:string;
  imageUrl = "";
  health:number;
  activeShields:boolean;
  activeWeapons:boolean;

  constructor(name, image, health, shield, weapon){
    this.modelName = name;
    this.imageUrl = image;
    this.health = health;
    this.activeShields = shield;
    this.activeWeapons = weapon;
  }
}
