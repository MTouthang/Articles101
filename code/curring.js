function fun1() {
  return function fun2(m) {
    console.log(m * 2);
  };
}

fun1()(2);
