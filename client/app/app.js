moment.locale('pt-br');

Meteor.subscribe('trades');

Template.body.helpers({
  trades: function() {
    return Trades.find({}, {sort: {createdAt: -1} }).fetch();
  },

  timeFromNow: function(date) {
    return moment(date).fromNow();
  }
});