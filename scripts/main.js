let students = [
  {
    studentId: 1,
    studentFirstName: "Harry",
    studentLastName: "Potter",
    houseName: "Gryffindor",
    rank: "student",
    enlisted: false,
    defeated: false,
  },
  {
    studentId: 2,
    studentFirstName: "Luna",
    studentLastName: "Lovegood",
    houseName: "Ravenclaw",
    rank: "student",
    enlisted: false,
    defeated: false,
  },
  {
    studentId: 3,
    studentFirstName: "Newt",
    studentLastName: "Scamander",
    houseName: "Hufflepuff",
    rank: "student",
    enlisted: false,
    defeated: false,
  },
  {
    studentId: 4,
    studentFirstName: "Draco",
    studentLastName: "Malfoy",
    houseName: "Slytherin",
    rank: "student",
    enlisted: false,
    defeated: false,
  },
  {
    studentId: 5,
    studentFirstName: "Lord",
    studentLastName: "Voldemort",
    houseName: "DeathEaters",
    rank: "leader",
    enlisted: true,
    defeated: false,
  },
  {
    studentId: 6,
    studentFirstName: "Tom",
    studentLastName: "Riddle",
    houseName: "DeathEaters",
    rank: "leader",
    enlisted: true,
    defeated: false,
  },
];

const houseNames = [
  {
    house: "Gryffindor",
    sigil: "cat",
    table: "danger",
  },
  {
    house: "Slytherin",
    sigil: "dragon",
    table: "success",
  },
  {
    house: "Hufflepuff",
    sigil: "otter",
    table: "warning",
  },
  {
    house: "Ravenclaw",
    sigil: "crow",
    table: "primary",
  },
  {
    house: "DeathEaters",
    sigil: "skull",
    table: "secondary",
  },
];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const welcome = () => {
  let domString = `<h3>WELCOME</h3>
  <h4>to the amazing world of</h4>
  <h1>HOGWORX!</h1>
<form id="getSorted">
<div class="input-group">
<span class="input-group-text">First Name</span>
<input type="text" aria-label="First name" class="firstName form-control" required>
<span class="input-group-text">Last Name</span>
<input type="text" aria-label="Last name" class="lastName form-control" required>
<select class="form-select" id="inputGroupSelect01" required>
    <option selected>Your choice will be considered</option>
    <option value="Gryffindor">Gryffindor</option>
    <option value="Slytherin">Slytherin</option>
    <option value="Hufflepuff">Hufflepuff</option>
    <option value="Ravenclaw">Ravenclaw</option>
  </select>
<button class="btn btn-outline-dark" type="submit" id="button-addon2"><i class="fa-solid fa-hat-wizard"></i></button>
</div>
</form>
  `;
  renderToDom("#welcomeMsg", domString);
};

const filterBtn = () => {
  let domString = `
  <div id="filter" class="buttons">
  <button type="button" class="btn btn-outline-danger btn-lg buttonRow" id="gryffindorBtn">Gryffindor</button>
  <button type="button" class="btn btn-outline-success btn-lg buttonRow" id="slytherinBtn">Slytherin</button>
  <button type="button" class="btn btn-outline-warning btn-lg buttonRow" id="hufflepuffBtn">Hufflepuff</button>
  <button type="button" class="btn btn-outline-primary btn-lg buttonRow" id="ravenclawBtn">Ravenclaw</button>
  <button type="button" class="btn btn-outline-secondary btn-lg buttonRow" id="armyBtn">Voldemort's Army</button>
  <button type="button" class="btn btn-outline-dark btn-lg buttonRow" id="allBtn">All</button>
</div>
  `;
  renderToDom("#filterGroup", domString);
};

const renderHouses = () => {
  let domString = "";
  for (const names of houseNames) {
    domString += `
    <div id="${names.house}" class="${names.house
      .charAt(0)
      .toLowerCase()}House house">
     <div class = 'bannerHead'> 
     <h1>
        <i class="fa-solid fa-${names.sigil}"></i>
        <p id='p${names.house}'>${names.house}</p>
    </h1>
     </div>
      <div id='house${names.house}' class='bannerBody'>
          <div class="classTable">

          </div>
      </div>
    </div>
    `;
  }
  renderToDom("#hogWarts", domString);
};

//Creating a 
const sortToAny = (studentFilter, house) => {
  let domString = "";
  for (const character of studentFilter) {
    if (character.enlisted === false) {
      domString += `
    <div class="studentIdCard">
  <div class="row row-cols-auto">
    <div class="col">${character.studentFirstName} ${character.studentLastName}</div>
    <div class="col" id='e-${character.houseName}'><button type="button" id="expel--${character.studentId}" class="btn expel btn-outline-dark">x</button></div>
  </div>
</div>
    `;} else {
      domString += `
    <div class="studentIdCard">
  <div class="row row-cols-auto">
    <div class="col">${character.studentFirstName} ${character.studentLastName}</div>
  </div>
</div>
    `;
    }

  }
  
  renderToDom(`#house${house.house}`, domString);
};

const idCard = () => {
  for (const house of houseNames) {
    let studentFilter = students.filter(
      (eachStudent) => eachStudent.houseName === house.house
    );

    sortToAny(studentFilter, house);
  }
};

const eventListeners = () => {
  const btnSelector = document.querySelector("#filter.buttons");
  console.log(btnSelector.textContent);

  const sly = document.querySelector(".sHouse");
  const huff = document.querySelector(".hHouse");
  const death = document.querySelector(".dHouse");
  const rave = document.querySelector(".rHouse");
  const gryf = document.querySelector(".gHouse");

  btnSelector.addEventListener("click", (e) => {
    if (e.target.id === "allBtn") {
      sly.style.display = "";
      huff.style.display = "";
      death.style.display = "";
      rave.style.display = "";
      gryf.style.display = "";
    } else if (e.target.id === "gryffindorBtn") {
      sly.style.display = "none";
      huff.style.display = "none";
      death.style.display = "none";
      rave.style.display = "none";
      gryf.style.display = "flex";
    } else if (e.target.id === "ravenclawBtn") {
      sly.style.display = "none";
      huff.style.display = "none";
      death.style.display = "none";
      rave.style.display = "flex";
      gryf.style.display = "none";
    } else if (e.target.id === "hufflepuffBtn") {
      sly.style.display = "none";
      huff.style.display = "flex";
      death.style.display = "none";
      rave.style.display = "none";
      gryf.style.display = "none";
    } else if (e.target.id === "slytherinBtn") {
      sly.style.display = "flex";
      huff.style.display = "none";
      death.style.display = "none";
      rave.style.display = "none";
      gryf.style.display = "none";
    } else if (e.target.id === "armyBtn") {
      sly.style.display = "none";
      huff.style.display = "none";
      death.style.display = "flex";
      rave.style.display = "none";
      gryf.style.display = "none";
    }
  });

  const addOne = document.querySelector("#getSorted");
  addOne.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentInput = document.querySelector("#inputGroupSelect01").value;

    let sortingTo = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    if (sortingTo.includes(studentInput)) {
      sortingTo.push(studentInput);
    } else {
      console.log("You appear to have no preference...");
    }
    // Grabbing the entire house ID... may change in the future
    
    const newStudent = {
      studentId: students.length + 1,
      studentFirstName: document.querySelector(".firstName").value,
      studentLastName: document.querySelector(".lastName").value,
      houseName: sortingTo[Math.floor(Math.random() * sortingTo.length)],
      rank: "student",
      enlisted: false,
      defeated: false,
    };
    students.push(newStudent);

    idCard(newStudent);

    addOne.reset();

    
  });

  const changeHouse = document.querySelector("#hogWarts");

    changeHouse.addEventListener("click", (e) => {
      
      if (e.target.id) {
        const [method, studentId] = e.target.id.split("--");

        let index = students.findIndex((taco) => taco.studentId === parseInt(studentId));

        if (e.target.id.includes('expel')) {

         const newHouse = students[index].houseName = 'DeathEaters';
          students.push(students[index]);
          
        }
        students.splice(index, 1);

        idCard(students);
      }
    });

};
const turnOn = () => {
  welcome();
  filterBtn();
  renderHouses();
  idCard();
  eventListeners();
};

turnOn();
