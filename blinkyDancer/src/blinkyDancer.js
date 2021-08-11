var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype)
BlinkyDancer.prototype.contructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.$node.toggle()
  this.oldStep();
}