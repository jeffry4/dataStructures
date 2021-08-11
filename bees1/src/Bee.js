var Bee = function(passedAge, passedJob, passedColor) {
    Grub.call(this, passedAge || 5, passedColor || 'yellow')
    this.job = passedJob || 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;