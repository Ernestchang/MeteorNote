// 先去掉autopublish这个包
Meteor.publish("postsKey", function() {
  return Posts.find({flagged:true});
});

Meteor.publish("postsByAuthor", function(author) {
  return Posts.find({flagged:true, author: author});
});

Meteor.publish("postById", function(postId) {
  return Posts.find({_id, postId});
});
