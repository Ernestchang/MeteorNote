if (Posts.find().count() === 0) {
  Posts.insert({
		title: 'Discover Meteor',
		url: 'http://wiki.jikexueyuan.com/project/discover-meteor/',
    flagged: true,
    author: 'bga',
    category: 'Java'
	});
  Posts.insert({
		title: 'Meteor Tutorial',
		url: 'https://www.meteor.com/tutorials/blaze/creating-an-app',
    flagged: true,
    author: 'bga',
    category: 'PHP'
	});
  Posts.insert({
		title: 'Baidu',
		url: 'http://www.baidu.com',
    flagged: false,
    author: 'user1',
    category: 'Python'
	});
  Posts.insert({
		title: 'Taobao',
		url: 'http://www.taobao.com',
    flagged: true,
    author: 'user2',
    category: 'Javascript'
	});
}
