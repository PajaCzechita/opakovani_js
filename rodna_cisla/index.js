'use strict'

const rodneCislo = prompt('Zadej rodné číslo (bez lomítka): ');

console.log(`Uživatel zadal rodné číslo? ${rodneCislo}`);

const validujRodneCislo = (rodneCislo) => {
  if (rodneCislo.length !== 10) {
    console.error(`Rodné číslo ${rodneCislo} má chybnou délku ${rodneCislo.length} znaků!`);
    return;
  }
  const rodneCisloNumber = Number(rodneCislo);
  if (isNaN(rodneCisloNumber)) {
    console.error(`Rodné číslo ${rodneCislo} musí obsahovat číslice`);
    return;
  }
  if (!Number.isInteger(rodneCisloNumber)) {
    console.error(`Rodné číslo ${rodneCislo} nemůže být desetinné číslo`);
    return;
  }
  if (rodneCisloNumber % 11 !== 0) {
    console.error(`Rodné číslo ${rodneCislo} není dělitelné 11!`);
    return;
  }
  console.log(`Hurá, ${rodneCislo} je správné rodné číslo`)
}

validujRodneCislo(rodneCislo);

/*
if (rodneCislo % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
*/