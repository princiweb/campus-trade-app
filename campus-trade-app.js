Trades = new Mongo.Collection('trades');


if (Meteor.isClient) {

  moment.locale('pt-br');

  Template.body.helpers({
    trades: function() {
      return Trades.find({}, {sort: {createdAt: -1} }).fetch();
    },

    timeFromNow: function(date) {
      return moment(date).fromNow();
    }
  });

  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
