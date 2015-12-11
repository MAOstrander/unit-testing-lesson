var module = module || {};

function verifyAlphaNumeric(testSubject) {
	var flag = true;
	if (testSubject.indexOf('$') !== -1) {
		flag = false
	} else if (testSubject.indexOf('%') !== -1) {
		flag = false
	} else if (testSubject.indexOf('^') !== -1) {
		flag = false
	} else if (testSubject.indexOf('&') !== -1) {
		flag = false
	} else if (testSubject.indexOf('*') !== -1) {
		flag = false
	}
  return flag;
}
function duplicateCheck(testSubject) {
  var i, out=[], obj={};

  for (i = 0; i<testSubject.length; i++) {
    obj[testSubject[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }
  return (testSubject.length === out.length);
}
function checkWordCount(testSubject) {
  return testSubject.length;
}

document.getElementById("runTest").addEventListener("click", function doStuff(event) {
	var inputTextArea = document.getElementById("inputText").value;
	console.log("inputTextArea", inputTextArea);

	console.log("ANY ILLEGAL CHARACTERS?", verifyAlphaNumeric(inputTextArea)); 
	inputTextArea = inputTextArea.split(" ");
	console.log("ANY DUPLICATES?", duplicateCheck(inputTextArea));
	console.log("LESS THAN 100 WORDS?", checkWordCount(inputTextArea));
})

module.exports = { verifyAlphaNumeric, duplicateCheck, checkWordCount };