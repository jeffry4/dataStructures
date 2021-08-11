var PortalDancer = function (top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);

}

PortalDancer.prototype = Object.create(Dancer.prototype)
PortalDancer.prototype.contructor = PortalDancer;

PortalDancer.prototype.step = function(){
    const colors = ['green', 'blue', 'grey', 'red', 'purple']
    this.$node.css('border-color', `${colors[Math.floor(Math.random() * colors.length)]}`)
    this.$node.css({'height': Math.random() * 100, 'width': Math.random() * 100})
    this.$node.addClass('portal');
    console.log(window.dancers)
    this.oldStep();
  } 