const globalVariable = "Welcome";

function outer() {
  alert(globalVariable);
  const course = "Holberton";
  inner();

  function inner() {
    alert(globalVariable + ' ' + course);
    const exclamation = "!";
    inception();

    function inception() {
      alert(globalVariable + ' ' + course + exclamation);

      inner();
      outer();
    }
  }
}

outer();
