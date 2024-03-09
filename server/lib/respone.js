const constants = require("../lib/constant");

exports.parameterMissing = function (res) {
	var response = {
		status: constants.responseFlags.PARAMETER_MISSING,
		message: "Few Parameter(s) are missing",
	};
	res.send(response);
};

exports.userNotFound = function (res) {
	var response = {
		status: constants.responseFlags.USER_NOT_FOUND,
		message: "You Are Not Registered With Us. Please SignUp.",
	};
	res.send(response);
};

exports.invalidArgument = function (res) {
	var response = {
		status: constants.responseFlags.INVALID_ARGUMUENT,
		message: "Invalid Argument",
	};
	res.send(response);
};

exports.userNameExists = function (handlerInfo, res) {
	var response = {
		status: constants.responseFlags.USERNAME_ALREADY_EXISTS,
		message: "This Username Already Exist.",
	};
	res.send(response);
};

exports.itemNotFound = function (res) {
	var response = {
		status: constants.responseFlags.ITEM_NOT_FOUND,
		message: "Item Does Not Exist",
	};
	res.send(response);
};

exports.actionComplete = function (res, data) {
	var response = {
		status: constants.responseFlags.ACTION_COMPLETE,
		message: "Ok",
		data: data,
	};
	res.send(response);
};
