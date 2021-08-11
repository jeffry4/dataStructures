var RetiredForagerBee = function() {
    ForagerBee.call(this, 40, 'grey' ,'gamble', false)
};
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() { return 'I am too old, let me play cards instead'; }
RetiredForagerBee.prototype.gamble = function() { this.treasureChest.push('waterbuffalo') }
//bol