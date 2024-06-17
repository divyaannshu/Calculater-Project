buttons = document.querySelectorAll('button');
let inp = document.getElementById("input");
let output = "";
for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    inp.value = buttonText;
    if (e.target.innerHTML == "=") {
      output = eval(output);
      document.querySelector('input').value = output;
    }
    else if (e.target.innerHTML == "C") {
      // For Clear All Data 
      output = ""
      document.querySelector('input').value = output;
    }
    else if (e.target.innerHTML == "DEL") {
      // For Delete One Value
      output = output.slice(0, -1);
      inp.value = output;
      document.querySelector('input').value = output;
    }
    else {
      console.log(e.target);
      output = output + e.target.innerHTML;
      document.querySelector('input').value = output;
    }
  })
}
