class Bee extends Grub {
  constructor(passedAge, passedJob, passedColor){
    super(passedAge || 5, passedColor || 'yellow')
    this.job = passedJob || 'keep on growing';

  }
  
};
