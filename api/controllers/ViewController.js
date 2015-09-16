 /* @description :: Server-side logic for managing views
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	// Load view for Public Website.
	loadDefaultView: function (req,res) {
		res.locals.layout = 'layout';
		res.view('index');
	},

	// Load view for App builder Website.
	loadChatWindowView: function (req,res) {
		res.locals.layout = 'layout';
		res.view('index');
	}
};