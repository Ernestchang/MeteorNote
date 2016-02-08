// 先去掉autopublish这个包
Meteor.publish("postsKey", function() {
  return Posts.find();
});
