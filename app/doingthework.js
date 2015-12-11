document.getElementById("runTest").addEventListener("click", function doStuff(event) {
	var inputTextArea = document.getElementById("inputText").value;
	console.log("inputTextArea", inputTextArea);

	verifyAlphaNumeric(inputTextArea);
	duplicateCheck(inputTextArea);
	checkWordCount(inputTextArea);
})