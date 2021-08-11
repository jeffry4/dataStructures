var PlanetDancer = function (top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);
    const colors = ['green', 'blue', 'grey', 'red', 'purple']
    const color = colors[Math.floor(Math.random() * colors.length)]
    const size = Math.random() * 100;
    this.$node.css({'border-color': color, 'background' : color, 'border-radius': '50%', 'height' : size, 'width' : size}).addClass('planet')
    this.target = {
        distance: null,
        reference: null
   }
   this.simulate = true;
}

PlanetDancer.prototype = Object.create(Dancer.prototype)
PlanetDancer.prototype.contructor = PlanetDancer;

PlanetDancer.prototype.step = function(){
    for(let i = 0; i < window.dancers.length; i++){
        if(window.dancers[i].$node.hasClass('planet') && window.dancers[i].$node !== this.$node){
           // console.log(window.dancers[i])
            let distanceX = (this.left ** 2) + (window.dancers[i].left ** 2);
            let distanceY = (this.top ** 2) + (window.dancers[i].top ** 2);
            let totalDistance = Math.sqrt(distanceX + distanceY);
            if(this.target.distance >= totalDistance || this.target.distance === null){
                this.target.distance = totalDistance
                this.target.reference = window.dancers[i].$node;
            }
        }else{
        }

    }
    //console.log(`This: ${this.$node} Distance: ${this.target.distance}`)
    if(this.target.distance >= 50 && this.target.distance && this.simulate === true){ //could turn off sim check meh 
        //console.log(this.target.reference[0].style.top)
        let slicedTop = this.target.reference[0].style.top.slice(0, -2);
        let slicedLeft = this.target.reference[0].style.left.slice(0, -2);
        let topInt = parseInt(slicedTop);
        let leftInt = parseInt(slicedLeft);
        (this.top > topInt ? this.top -= (0.1 * topInt) : this.top += (0.1 * topInt));
        (this.left > leftInt ? this.left -= (0.1 * leftInt) : this.left += (0.1 * leftInt));
        this.$node.css({'top' : this.top, 'left' : this.left});
    }else{
        console.log('No can do')//this.$node.css()
    }
    
    this.oldStep(1000);
  } 

  Dancer.prototype.lineUp = function(){
    if(this.simulate){
      this.simulate = false;
    }
    this.$node.css('top', 0);
    this.top = 0;
  }

// x-y= z z/2 = tree this.pos -tree  if(tree <1){this.top + 10px}
// a b a ++ b-- ++
// 
//   if(this.top > this.target.reference.top){this.top += 1}else{this.top -= 1}
//if(this.top 50)

//if this.top