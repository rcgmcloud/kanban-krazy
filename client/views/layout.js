Template.tasks.created = function (){
  console.log('created');
};

Template.tasks.rendered = function (){
  console.log('rendered');
};

Template.tasks.destroyed = function (){
  console.log('destroyed');
};

Template.tasks.helpers({
  'tasks': function(){
    return TasksCollection.find().fetch();
  }
});

Template.tasks.events({

});
