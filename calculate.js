javascript:
var height = prompt("What height are you jumping from (meters)? ");
var weight = prompt("What is your weight (in kg)?");

var s1 = 9.8 * height;
var s2 = s1 * 2;
var s3 = Math.sqrt(s2);

alert("If you jump off a building " + height + "meters tall, your impact velocity will be "  + s3 + " m/s");
