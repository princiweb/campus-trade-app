Meteor.publish('trades', function () {
  return Trades.find();
});
