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
      szam = index;
      if (!(szam === 0 && KIJELZO.innerHTML.length === 0)) {
        KIJELZO.innerHTML += szam;
      }
    });
  }
}

export function muvJelek() {
  const OSSZEADAS_ELEM = document.querySelector("#osszeadas");
  const KIVONAS_ELEM = document.querySelector("#kivonas");
  const SZORZAS_ELEM = document.querySelector("#szorzas");
  const OSZTAS_ELEM = document.querySelector("#osztas");
  const PONT_ELEM = document.querySelector("#pont");
  function evtKreal(valtozo, jel) {
    valtozo.addEventListener("click", function () {
      let szoveg = KIJELZO.innerHTML;
      if (
        !(
          szoveg[szoveg.length - 1] === "+" ||
          szoveg[szoveg.length - 1] === "-" ||
          szoveg[szoveg.length - 1] === "*" ||
          szoveg[szoveg.length - 1] === "/" ||
          szoveg[szoveg.length - 1] === "." ||
          szoveg.length === 0
        )
      ) {
        KIJELZO.innerHTML += jel;
      }
    });
  }
  evtKreal(OSSZEADAS_ELEM, "+");
  evtKreal(SZORZAS_ELEM, "*");
  evtKreal(OSZTAS_ELEM, "/");
  evtKreal(PONT_ELEM, ".");
  KIVONAS_ELEM.addEventListener("click", function () {
    let szoveg = KIJELZO.innerHTML;
    if (
      !(
        szoveg[szoveg.length - 1] === "+" ||
        szoveg[szoveg.length - 1] === "-" ||
        szoveg[szoveg.length - 1] === "*" ||
        szoveg[szoveg.length - 1] === "/" ||
        szoveg[szoveg.length - 1] === "."
      )
    ) {
      KIJELZO.innerHTML += "-";
    }
  });
}

export function szamolasEsTorles() {
  const EGYENLO_ELEM = document.querySelector("#egyenlo");
  const TORLES_ELEM = document.querySelector("#torles");
  EGYENLO_ELEM.addEventListener("click", function () {
    KIJELZO.innerHTML = eval(KIJELZO.innerHTML);
  });
  TORLES_ELEM.addEventListener("click", function () {
    KIJELZO.innerHTML = "";
  });
}
