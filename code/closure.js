function x() {
  let x = 10;
  function y() {
    console.log(x);
  }
  y();
}
x();

// reference --
function a() {
  const c = 09;
  function b() {
    console.log(c);
  }
  return b;
}

let result = a();
result();
