function doSomething() {
  sum(10, 10);
  //! Default value
  function sum(number1, number2 = 0) {
    console.log(number1 + number2);
  }
}

doSomething();
