var sayHello = function(name) {
  return "hello " + name;
}
sayHello("Bea");

var doAThing = function(x) {
  if (x > 10) {
    return x + 10;
  }
  return x;
}
doAThing(6);


var areBothEven = function(a,b){

  if(a%2 === 0 && b%0 === 0) {
    return true;
  } else {
  return false;
  }
}
areBothEven(4, 6);

var hotOrNot = function(temp){
  if(temp > 75){
    return "hot"
  } else {
    return "not hot"
  }
}
hotOrNot(79);

var threeofNum = function(num){
  if(num === null){
    return 3;
  } else {
    return num;
  }
}
threeofNum(5);


var greatest = function(a, b, c){
  greatest = a;
  if (greatest < b) {
    greatest = b;
  }
  if (greatest < c) {
    greatest = c;
  }
  return greatest;
};
greatest(5, 10, 1);


var biggest = function(a, b, c, d){
  biggest = a;
  if (biggest < b) {
    biggest = b;
  }
  if (biggest < c) {
    biggest = c;
  }
  if (biggest < d) {
    biggest = d;
  }
  return biggest;
};
biggest(1, 2, 3, 4);











