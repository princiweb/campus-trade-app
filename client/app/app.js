moment.locale('pt-br');

Meteor.subscribe('trades');

Template.body.helpers({
  trades: function() {
    var options = {};
    if(Session.get('busca-offered')){
      options.offered = {  $text: { $search: Session.get('busca-offered') } };
    }
    if(Session.get('busca-wanted')){
      options.wanted = { $text: { $search: Session.get('busca-wanted') }};
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
