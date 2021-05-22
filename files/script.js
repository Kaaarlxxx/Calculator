function justNumbers(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57) || (x >= 40 && x <= 43) || (x >= 45 && x <= 47)) return true;
 else if(e.keycode=="Enter"){
	  solve();
	  return true;
 }
  else return false;
}

function set(val) {
  disp = document.getElementById("display");

  if (val >= 1 && val <= 9) {
    if (disp.value.slice(-1) == ".") {
      disp.value = disp.value += val;
      return;
    }
    if (disp.value == 0) {
      disp.value = val;
      return;
    }
  }
  if (val == "/" || val == "*" || val == "+" || val == "-") {
    if (
      disp.value.slice(-1) == "/" ||
      disp.value.slice(-1) == "*" ||
      disp.value.slice(-1) == "+" ||
      disp.value.slice(-1) == "-"
    ) {
      alert("You Can't add two operations in a row. Add some numbers !");
      return;
    }
    if (disp.value == "") {
      alert("You need to start from Number!");
      return;
    }
  }

  if (val == ")") {
    if (disp.value.slice(-1) == "(") {
      alert("fill in the parentheses before closing them!");
      return;
    }
    if (!display.value.includes("(", 0)) {
      alert("You have to open bracket before closing it!");
      return;
    }
  }

  disp.value = disp.value += val;
}

function solve() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      str = disp.value + "=" + res;
      document.getElementById("history").innerHTML += str + "</br>";
      disp.value = res;
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function square() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = Math.pow(disp.value, 2);
      if (disp.value < 0)
        document.getElementById("history").innerHTML +=
          "(" + disp.value + ")" + "² = " + res + "</br>";
      else
        document.getElementById("history").innerHTML +=
          disp.value + "² = " + res + "</br>";
      disp.value = res;
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}
function third() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = Math.pow(disp.value, 3);
      if (disp.value < 0)
        document.getElementById("history").innerHTML +=
          "(" + disp.value + ")" + "³ = " + res + "</br>";
      else
        document.getElementById("history").innerHTML +=
          disp.value + "³ = " + res + "</br>";
      disp.value = res;
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function remone() {
  disp = document.getElementById("display");
  res = disp.value.substring(0, disp.value.length - 1);
  disp.value = res;
}

function clearDisp() {
  disp = document.getElementById("display");
  disp.value = "";
}

function trig(val) {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      if (val == "sin") {
        disp.value = eval(disp.value);
        res = Math.sin(disp.value);
        document.getElementById("history").innerHTML +=
          "sin(" + disp.value + ") = " + res + "</br>";
      } else if (val == "cos") {
        disp.value = eval(disp.value);
        res = Math.cos(disp.value);
        document.getElementById("history").innerHTML +=
          "cos(" + disp.value + ") = " + res + "</br>";
      } else if (val == "tg") {
        disp.value = eval(disp.value);
        res = Math.tan(disp.value);
        document.getElementById("history").innerHTML +=
          "tg(" + disp.value + ") = " + res + "</br>";
      } else if (val == "ctg") {
        disp.value = eval(disp.value);
        res = 1 / Math.tan(disp.value);
        document.getElementById("history").innerHTML +=
          "ctg(" + disp.value + ") = " + res + "</br>";
      }
      if (!isFinite(res))
        alert("Range exceeded for that operation");
      else disp.value = res;
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function changeSign() {
  disp = document.getElementById("display");
  res = parseFloat(disp.value);
  if (res < 0) {
    display.value = display.value.substring(1);
    return;
  }
  if (res > 0) {
    display.value = "-" + display.value;
    return;
  }
  if (res == 0 || disp.value == "") {
    alert("Add number before changing a sign");
  } else {
    alert("Add number , not the operation ");
    return;
  }
}

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function factor() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = factorial(disp.value);
      document.getElementById("history").innerHTML +=
        disp.value + "! = " + res + "</br>";
      disp.value = res;
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function oneforx() {
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = factorial(disp.value);
      res = 1 / disp.value;
      if (isFinite(res)) {
        document.getElementById("history").innerHTML +=
          "1/" + disp.value + " = " + res + "</br>";
        disp.value = res;
      } else alert("You can not devide by 0");
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function el() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = Math.sqrt(disp.value);
      if (isFinite(res)) {
        document.getElementById("history").innerHTML +=
          "√" + disp.value + " = " + res + "</br>";
        disp.value = res;
      } else alert("The're is no square root of a negative number");
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function twotox() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = Math.pow(2, disp.value);
      document.getElementById("history").innerHTML +=
        "2^" + disp.value + " = " + res + "</br>";
      disp.value = res;
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function log() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = Math.log10(res);
      if (isFinite(res)) {
        document.getElementById("history").innerHTML +=
          "log₁₀(" + disp.value + ") = " + res + "</br>";
        disp.value = res;
      } else alert("Bad format or range exceeded!");
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function lnx() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = Math.log(res);
      if (isFinite(res)) {
        document.getElementById("history").innerHTML +=
          "ln(" + disp.value + ") = " + res + "</br>";
        disp.value = res;
      } else alert("Bad format or range exceeded!");
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}

function etox() {
  disp = document.getElementById("display");
  try {
    res = eval(disp.value);
    if (!isFinite(res)) {
      alert("Bad format or range exceeded!");
      return;
    } else {
      disp.value = eval(disp.value);
      res = Math.pow(Math.E, res);
      document.getElementById("history").innerHTML +=
        "e^" + disp.value + " = " + res + "</br>";
      disp.value = res;
    }
  } catch (error) {
    alert("Bad format or range exceeded!");
  }
}
function clearSheet() {
  document.getElementById("history").innerHTML = "";
}
