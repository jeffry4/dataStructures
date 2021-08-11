class ForagerBee extends Bee {
  constructor(passedAge, passedColor, passedJob, passedCanFly){
    super(passedAge || 10, passedJob||'find pollen', passedColor)
    this. treasureChest = [];
    (passedCanFly === false ? this.canFly = false : this.canFly = true);
  }
  forage (arg){
    this.treasureChest.push(arg);
  }
};
