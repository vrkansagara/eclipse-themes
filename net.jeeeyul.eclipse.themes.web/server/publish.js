var pageSize = 12;

Meteor.publish("EPF", function(id) {
	return [ EPFs.find({
		"_id" : id
	}), Comments.find({
		"epfId" : id
	}) ];
});

Meteor.publish("allEPFs", function(page) {
	if(page == undefined){
		page = 0;
	}
	return EPFs.find({}, {
		sort : {
			date : -1
		},
		skip: page * pageSize,
		limit : pageSize
	});
});

Meteor.publish("EPFsByAuthor", function(authorId) {
	return [ EPFs.find({
		"authorId" : authorId
	}, {
		sort : {
			"date" : 1
		}
	}), Meteor.users.find({
		"_id" : authorId
	}) ];
});