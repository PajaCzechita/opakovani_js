const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isDigit = (vstup) => {
  return digits.includes(vstup);
};
/*
isDigit(2);
isDigit('2');
isDigit('A');
isDigit('50');
*/
const rodneCislo = prompt('Zadej rodné číslo (bez lomítka): ');

console.log(`Uživatel zadal rodné číslo? ${rodneCislo}`);

const validujRodneCislo = (rodneCislo) => {
  if (rodneCislo.length !== 10) {
    console.error(`Rodné číslo ${rodneCislo} má chybnou délku ${rodneCislo.length} znaků!`);
    return false;
  }
  let obsahujeJenCislice = true;
  for (let i = 0; i < rodneCislo.length; i++) {
    const jeCislice = isDigit(rodneCislo[i])
    if (!jeCislice) {
      console.error(`Znak ${rodneCislo[i]} není číslice!`);
      obsahujeJenCislice = false;
    }
  }
  if (!obsahujeJenCislice) {
    return false;
  }
  const rodneCisloNumber = Number(rodneCislo);

  if (rodneCisloNumber % 11 !== 0) {
    console.error(`Rodné číslo ${rodneCislo} není dělitelné 11!`);
    return false;
  }
  console.log(`Hurá, ${rodneCislo} je správné rodné číslo`);
  return true;
}

validujRodneCislo(rodneCislo);