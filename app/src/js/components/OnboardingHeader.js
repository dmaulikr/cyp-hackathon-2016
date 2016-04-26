var Container = require('react-container');
var React = require('react');

module.exports = React.createClass({
	getInitialState () {
		return {};
	},
	render () {
		return (
			<Container align="center" justify="center" direction="column" className="onboarding-header">
				<img src="./img/logo-mark.png" className="onboarding-logo" />
				<div className="onboarding-heading onboarding-heading-1">N-Dolphins</div>
				<div className="onboarding-heading onboarding-heading-2">1.0</div>
			</Container>
		);
	}
});
