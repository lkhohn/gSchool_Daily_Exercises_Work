//Write your Constructor Function that will generate a different response for each day of the week

var AutoResponse = function() {
  var dayOfWeek = function(currentDay) {
    switch (currentDay) {
      case 'Monday':
        return 'Today is Monday';
        break;
      case 'Tuesday':
        return 'Today is Tuesday';
        break;
      case 'Wednesday':
        return 'Today is Wednesday';
        break;
      case 'Thursday':
        return 'Today is Thursday';
        break;
      case 'Friday':
        return 'Today is Friday';
        break;
      case 'Saturday':
        return 'Today is Saturday';
        break;
      case 'Sunday':
        return 'Today is Sunday';
        break;
      default:
        return 'Unknown date';
    }
  };

  return {
    getResponse: function(currentDay) {
      return dayOfWeek(currentDay);
    }
  };
};
module.exports = AutoResponse();
