var Grub = function(passedAge, passedColor, passedFood) {
    this.age = passedAge || 0;
    this.color = passedColor || 'pink';
    this.food = passedFood || 'jelly' 
};

Grub.prototype.eat = function(){console.log('im eating ova ear')}


