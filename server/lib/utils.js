exports.checkBlank = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (
			arr[i] === null ||
			arr[i] === undefined ||
			arr[i].toString().trim() === ""
		) {
			return true;
		}
	}
	return false;
};

exports.isNegativeNumber = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			return true;
		}
	}
	return false;
};
