// examples of this.prototype

var Car = function() {
  return {
    make: 'Subaru',
    model: 'Outback',
    getType: function() {
      return this.make + ' ' + this.model;
    }
  }
}

var Car = function() {
  this.make = 'Subaru';
  this.model = 'Outback';
  this.getType: function() {
    return this.make + ' ' + this.model;
  };
}
