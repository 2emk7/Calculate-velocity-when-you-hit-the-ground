javascript:
var height = prompt("What height are you jumping from? ");

height = Math.round(height/3.281);
var s1 = 9.8 * height;
var s2 = s1 * 2;
var s3 = Math.sqrt(s2);

alert("If you jump off a building " + height + " meters tall, your impact velocity will be "  + Math.round(s3) + " m/s");
