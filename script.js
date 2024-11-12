let arrayTable = [];
function getData() {
  arrayTable = [
    document.getElementById("fullName").value,
    document.getElementById("email").value,
    document.getElementById("etatDepart").value,
    document.getElementById("etatArrive").value,
    document.getElementById("date").value,
  ];

  console.log(arrayTable);
  return arrayTable;
}

function scrollintrodPage(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  section.style.display = "block";
}

function scrollPage(sectionId) {
  getData();

  if (
    arrayTable[0] !== "" &&
    arrayTable[1] !== "" &&
    arrayTable[2] !== "" &&
    arrayTable[3] !== "" &&
    arrayTable[4] !== ""
  ) {
    console.log(arrayTable[0]);
    console.log(arrayTable[1]);
    console.log(arrayTable[2]);
    console.log(arrayTable[3]);
    console.log(arrayTable[4]);

    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    section.style.display = "block";
  } else {
    alert("entrer les info ");
  }
}

//----------------------------------------------------------------------------------

let plusValeurAdult = document.querySelector(".plusbuttonAdult");
let moinsValeurAdult = document.querySelector(".minusbuttonAdult");
let numbeerAdult = document.querySelector("#numbeerAdult");
let plusValeurMoins = document.querySelector(".plusbuttonSmall");
let moinsValeurMoins = document.querySelector(".moinsbuttonSmall");
let numbeerMoins = document.querySelector("#numbeerSmall");
let checkbox = document.querySelectorAll(".checkbox");

// adult-----------------------

//plus o mois button adult

let i = 0;
//  let count = 0
plusValeurAdult.addEventListener("click", function () {
  if (i < 10) {
    i = i + 1;
    // count= i
    numbeerAdult.innerHTML = i;
  }
});

// })

moinsValeurAdult.addEventListener("click", () => {
  if (i > 0) {
    i--;
    numbeerAdult.innerHTML = i;
  }
});

// fin adult-----------------------

//enfant-------------------------------------------------------

//plus o mois button enfant
let z = 0;

plusValeurMoins.addEventListener("click", function () {
  if (z < 10) {
    z = z + 1;

    numbeerMoins.innerHTML = z;
  }
});

// })

moinsValeurMoins.addEventListener("click", () => {
  if (z > 0) {
    z--;
    numbeerMoins.innerHTML = z;
  }
});

// fin enfant-------------------------------------------------------

// calcuuele total sur  button--------------------------------------

//adult-------------------------------------------------------------

plusValeurAdult.addEventListener("click", function () {
  let a = 0;
  let sum = 0;
  a = a + 500;

  sum += 500 * i;

  document.querySelector("#newPrixAdult").innerHTML = `${sum}`;
});

moinsValeurAdult.addEventListener("click", function () {
  let a = 0;
  let sum = 0;
  a = a - 500;

  sum += 500 * i;

  document.querySelector("#newPrixAdult").innerHTML = `${sum}`;
});

// fin   adult-------------------------------------------------------------

// start enfant-------------------------------------------------------------

plusValeurMoins.addEventListener("click", function () {
  let b = 0;
  let sumMois = 0;
  b = b + 100;

  sumMois += 100 * z;

  document.querySelector("#newPrixMoins").innerHTML = `${sumMois}`;
});

moinsValeurMoins.addEventListener("click", function () {
  let c = 0;
  let sumMois = 0;
  c = c - 100;
  sumMois += 100 * z;

  console.log(z);

  document.querySelector("#newPrixMoins").innerHTML = `${sumMois}`;
});

//fin enfant-------------------------------------------------------------

//final prix totalll

let buttonTotal = document.querySelector("#totttal");

buttonTotal.addEventListener("click", function () {
  let ValueTotal = document.querySelector("#prixTotal");
  let valueTotall1 = document.querySelector("#newPrixAdult").innerText;
  let valueTotall2 = document.querySelector("#newPrixMoins").innerText;

  let adultPrix = parseInt(valueTotall1);
  let childPrix = parseInt(valueTotall2);

  let sumTottal = adultPrix + childPrix;

  console.log(sumTottal);
  ValueTotal.innerHTML = ` total : ${sumTottal} dh`;
});

//formulaire

let myformButton = document.getElementById("formulaire");

myformButton.addEventListener("click", function () {
  getData();
  let newFullName = document.getElementById("fullname");
  let email = document.getElementById("fullEmail");
  let etatDepart = document.getElementById("depart");
  let etatArrive = document.getElementById("arrivee");

  let dateRes = document.getElementById("dateFinal");

  let oldvaleur = document.getElementById("finalPricce");
  let ValueTotal = document.querySelector("#prixTotal").innerText;

  console.log(ValueTotal);
  console.log(arrayTable[4]);

  newFullName.innerText = arrayTable[0];
  email.innerText = arrayTable[1];
  etatDepart.innerText = arrayTable[2];
  etatArrive.innerText = arrayTable[3];
  dateRes.innerText = arrayTable[4];

  console.log(dateRes);

  oldvaleur.innerText = ValueTotal;

  console.log(oldvaleur);

  //   console.log(newFullName)
});

for (let j = 0; j < 8; j++) {
  checkbox[j].onclick = function () {
    var checknbr = document.querySelectorAll(".checkbox:checked");
    if (checknbr.length > i + z) {
      this.checked = false;
      alert("ne pas depasse");
    }
  };
}

// form pdf
function printForm() {
  const element = document.getElementById("myformule");
  html2pdf().from(element).save();
}

//formulaire plusieurs

let btnShowFormil = document.getElementById("addFormulaire");

btnShowFormil.addEventListener("click", () => {
  if (i != 0) {
    getData();
    console.log(arrayTable);

    let myResults = document.getElementById("myformule");

    for (let countAdult = 0; countAdult < i; countAdult++) {
      const newForm = `
        <div style="height: 500px; display: flex; justify-content: center; align-items: center;">
          <div class="card content" id="newFormss${countAdult}">
            <div class="user-info" id="mynewInfo${countAdult}">
              <p>Full Name: <span id="fullname${countAdult}">${arrayTable[0]}</span></p>
              <p>Email: <span id="fullEmail${countAdult}">${arrayTable[1]}</span></p>
              <p>Depart: <span id="depart${countAdult}">${arrayTable[2]}</span></p>
              <p>Arrivee: <span id="arrivee${countAdult}">${arrayTable[3]}</span></p>
              <p>Date: <span id="dateFinal${countAdult}">${arrayTable[4]}</span></p>
            </div>
            <div class="qr-code">
              <p>Code QR :</p>
              <img src="images/qr-code.svg" alt="QR Code"/>
            </div>
          </div>
        </div>
      `;
      myResults.insertAdjacentHTML("beforeend", newForm);
    }
  }
});
