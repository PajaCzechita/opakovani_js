'use strict'

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isDigit = (vstup) => {
  return digits.includes(vstup);
};

const validujRodneCislo = (rodneCislo) => {

  return Array.from(rodneCislo).map((num) => {
    return {
      char: num,
      digit: isDigit(num)
    }
  });

}

document.getElementById('form').addEventListener('submit', (e) => {
  let rodneCisloInput = document.querySelector('input').value;
  const vysledekValidace = validujRodneCislo(rodneCisloInput);
  e.preventDefault();

  const elmRodneCislo = document.getElementById('rodneCislo');

  elmRodneCislo.innerHTML = '';
  vysledekValidace.forEach(elm => {
    elmRodneCislo.innerHTML += Digit(elm)
  });
})

const Digit = (props) => {
  return `<span class=${props.digit ? "green" : "red"}>${props.char}</span>`
}



