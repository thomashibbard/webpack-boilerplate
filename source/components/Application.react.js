var React = require('react')
	// , Stream = require('./Stream.react')
	// , Collection = require('./Collection.react');

	var  Application = React.createClass({

		getInitialState: function(){
			return {
				collectionTweets: {}
			};
		},

		addTweetToCollection: function(tweet){
			var collectionTweets = this.state.collectionTweets;
			collectionTweets[tweet.id] = tweet;
		},

		removeTweenFromCollection: function(tweet){
			var collectionTweets = this.state.collectionTweets;
			delete collectionTweets[tweet.id];
			this.setState({
				collectionTweets: collectionTweets
			});
		},

		removeAllTweetsFromCollection: function(){
			this.setState({
				collectionTweets: {}
			});
		},

		render: function(){
			return (
				<div className="container-fluid">
					<div className="col-md-4 text-center">
						<div onAddTweetToCollection={this.addTweetToCollection} />
					</div>
					<div className="col-md-8">
						<div tweets={this.state.collectionTweets}
							onRemoveTweetFromCollection={this.removeTweetFromCollection}
							onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
					</div>
				</div>
			);
		}

	});


	module.exports = Application;