var ForagerBee = function(passedAge, passedColor, passedJob, passedCanFly) {
    Bee.call(this, passedAge || 10, passedJob||'find pollen', passedColor);
    this.treasureChest = [];
    (passedCanFly === false ? this.canFly = false : this.canFly = true);
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (arg){
    this.treasureChest.push(arg);
}

