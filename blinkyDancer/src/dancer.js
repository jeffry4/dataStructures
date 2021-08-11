// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
};

Dancer.prototype.setPosition = function() {
  var styleSettings = {                                                                                                       
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.oldStep = function(time){
  setTimeout(() => { this.step();}, time || this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(){
  this.$node.css('top', 0);
  this.top = 0;
}

