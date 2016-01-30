moment.locale('pt-br');

Meteor.subscribe('trades');

Template.body.helpers({
  trades: function() {
    var options = {};
    if(Session.get('busca-offered')){
      options.offered = {'$regex': '/' + Session.get('busca-offered') + '/i'};
    }
    if(Session.get('busca-wanted')){
      options.wanted = {'$regex': '/' + Session.get('busca-wanted') + '/i'};
    }
    return Trades.find(options, {sort: {createdAt: -1} }).fetch();
  },

  timeFromNow: function(date) {
    return moment(date).fromNow();
  }
});

Template.body.events({
  'keyup #busca-offered': function(event, template){
    Session.set('busca-offered', event.target.value);
  },
  'keyup #busca-wanted': function(){
    Session.set('busca-wanted', event.target.value);
  }
});
