exports.count = function(start, end) {
	var output = start;
	for (var i = start; i < end; i += 1)  {
		output = output + " " + (i + 1);
	}

	return output;
};
