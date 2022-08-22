function checkScope() {
  var a = 3;
  if (true) {
    var c = 3;
  }

  console.log(c);
}

checkScope();
