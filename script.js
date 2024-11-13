//regex
function validEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
//date

function validDate(date) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const inputDate = new Date(date);

  return inputDate >= today;
}

function getData() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const etatDepart = document.getElementById("etatDepart").value;
  const etatArrive = document.getElementById("etatArrive").value;
  const date = document.getElementById("date").value;

  // Email valid
  if (!validEmail(email)) {
    alert("plz valid email .");
    return false;
  }

  // Date valids
  if (!validDate(date)) {
    alert("valid date plz.");
    return false;
  }

  arrayTable = [fullName, email, etatDepart, etatArrive, date];
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
  console.log(a);
});

// nbr 100*1 or 100*2

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
  let b = 0;
  let sumMois = 0;
  b = b - 100;
  sumMois += 100 * z;

  // let valB=b.value;

  console.log(z);

  document.querySelector("#newPrixMoins").innerHTML = `${sumMois}`;
  console.log(b);
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

// let myformButton = document.getElementById("formulaire");

// myformButton.addEventListener("click", function () {
//   getData();
//   let newFullName = document.getElementById("fullname");
//   let email = document.getElementById("fullEmail");
//   let etatDepart = document.getElementById("depart");
//   let etatArrive = document.getElementById("arrivee");

//   let dateRes = document.getElementById("dateFinal");

//   let oldvaleur = document.getElementById("finalPricce");
//   let ValueTotal = document.querySelector("#prixTotal").innerText;

//   console.log(ValueTotal);
//   console.log(arrayTable[4]);

//   newFullName.innerText = arrayTable[0];
//   email.innerText = arrayTable[1];
//   etatDepart.innerText = arrayTable[2];
//   etatArrive.innerText = arrayTable[3];
//   dateRes.innerText = arrayTable[4];

//   console.log(dateRes);

//   oldvaleur.innerText = ValueTotal;

//   console.log(oldvaleur);

//   //   console.log(newFullName)
// });

//checkbox

for (let j = 0; j < checkbox.length; j++) {
  checkbox[j].onclick = function () {
    const checknbr = document.querySelectorAll(".checkbox:checked");
    const maximum = i + z;
    if (checknbr.length > maximum) {
      this.checked = false;
      alert(`no  more  ${maximum} checkbox.`);
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
  getData();
  console.log(arrayTable);

  let myResults = document.getElementById("myformule");
  const adulltPrice = 500;

  const enffantPrix = 100;
  myResults.innerHTML = "";

  for (let countAdult = 0; countAdult < i; countAdult++) {
    const newAdultForm = `
        <div style="height: 500px; display: flex; justify-content: center; align-items: center;">
          <div class="card content" id="newFormAdult${countAdult}">
            <div class="user-info">
              <p>Full Name: <span id="fullnameAdult${countAdult}">${arrayTable[0]}</span></p>
              <p>Email: <span id="fullEmailAdult${countAdult}">${arrayTable[1]}</span></p>
              <p>Depart: <span id="departAdult${countAdult}">${arrayTable[2]}</span></p>
              <p>Arrivee: <span id="arriveeAdult${countAdult}">${arrayTable[3]}</span></p>
              <p>Date: <span id="dateFinalAdult${countAdult}">${arrayTable[4]}</span></p>
              <p>Prix: <span id="finalPriceAdult">${adulltPrice} dh</span></p>
            </div>
            <div class="qr-code">
              <p>Code QR :</p>
              <img src="images/qr-code.svg" alt="QR Code"/>
            </div>
          </div>

        </div>
                            <button class="scroll-btnForm" type="button" onclick="printForm()">print</button>

        
      `;
    myResults.insertAdjacentHTML("beforeend", newAdultForm);
  }

  for (let countChild = 0; countChild < z; countChild++) {
    const newChildForm = `
        <div style="height: 500px; display: flex; justify-content: center; align-items: center;">
          <div class="card content" id="newFormChild${countChild}">
            <div class="user-info">
              <p>Full Name: <span id="fullnameChild${countChild}">${arrayTable[0]}</span></p>
              <p>Email: <span id="fullEmailChild${countChild}">${arrayTable[1]}</span></p>
              <p>Depart: <span id="departChild${countChild}">${arrayTable[2]}</span></p>
              <p>Arrivee: <span id="arriveeChild${countChild}">${arrayTable[3]}</span></p>
              <p>Date: <span id="dateFinalChild${countChild}">${arrayTable[4]}</span></p>
              <p>Prix: <span id="finalPriceChild">${enffantPrix} dh</span></p>
            </div>
            <div class="qr-code">
              <p>Code QR :</p>
              <img src="images/qr-code.svg" alt="QR Code"/>
            </div>
          </div>

        </div>
                    <button class="scroll-btnForm" type="button" onclick="printForm()">print</button>

      `;
    myResults.insertAdjacentHTML("beforeend", newChildForm);
  }
});
