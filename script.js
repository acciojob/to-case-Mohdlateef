function toCase(text) {
  // write your code here
	let str1=text.toLowerCase();
	let str=text.toUpperCase()
	let str3=str1;
	str3=str3+"-";
	str3=str3+str;
	return str3;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
