class HoneyMakerBee extends bee{
  // TODO..
  constructor(){
    super(10, 'make Honey')
  }
  giveHoney (){
    this.honeyPot --
  }
  makeHoney(){
    this.honeyPot ++
  }
};
