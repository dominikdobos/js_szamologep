const KIJELZO = document.querySelector(".kifejezes");

export function szamokLetrehozasa() {
  const SZAMOK_TAROLO = document.querySelector(".szamok");
  for (let index = 0; index < 10; index++) {
    SZAMOK_TAROLO.innerHTML += `<button>${index}</button>`;
  }
}

export function szamokMegadas() {
  const SZAMOK = document.querySelectorAll(".szamok button");
  let szam = "";
  for (let index = 0; index < SZAMOK.length; index++) {
    SZAMOK[index].addEventListener("click", function () {
      szam += index;
      KIJELZO.innerHTML = szam;
    });
  }
}

export function muveletiJelek() {
  let szoveg = KIJELZO;
  const OSSZEADAS_ELEM = document.querySelector(".osszeadas");
  const KIVONAS_ELEM = document.querySelector(".kivonas");
  const SZORZAS_ELEM = document.querySelector(".szorzas");
  const OSZTAS_ELEM = document.querySelector(".osztas");
  const PONT_ELEM = document.querySelector("..");

  OSSZEADAS_ELEM.addEventListener("click", function () {
    if (
      !(
        szoveg[szoveg.length - 1] == "+" ||
        szoveg[szoveg.length - 1] == "-" ||
        szoveg[szoveg.length - 1] == "*" ||
        szoveg[szoveg.length - 1] == "/" ||
        szoveg[szoveg.length - 1] == "." ||
        szoveg.length == 0
      )
    ) {
      szoveg += "+";
      KIJELZO.innerHTML += szoveg;
    }
  });
}
