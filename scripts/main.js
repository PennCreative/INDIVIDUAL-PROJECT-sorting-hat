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
  {
    studentId: 7,
    studentFirstName: "He Who",
    studentLastName: "Must Not Be Named",
    houseName: "DeathEaters",
    rank: "leader",
    enlisted: true,
    defeated: false,
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
<input type="text" aria-label="First name" class="firstName form-control">
<span class="input-group-text">Last Name</span>
<input type="text" aria-label="Last name" class="lastName form-control">
<select class="form-select" id="inputGroupSelect01">
    <option selected>Your choice will be considered</option>
    <option value="1">Gryffindor</option>
    <option value="2">Slytherin</option>
    <option value="3">Hufflepuff</option>
    <option value="4">Ravenclaw</option>
  </select>
<button class="btn btn-outline-dark" type="submit" id="button-addon2"><i class="fa-solid fa-hat-wizard"></i></button>
</div>
</form>
  `;
  renderToDom("#welcomeMsg", domString);
};

const filterBtn = () => {
  let domString = `
  <div class="buttons">
  <button type="button" class="btn btn-outline-danger btn-lg buttonRow" id="gryffindor">Gryffindor</button>
  <button type="button" class="btn btn-outline-success btn-lg buttonRow" id="slytherin">Slytherin</button>
  <button type="button" class="btn btn-outline-warning btn-lg buttonRow" id="hufflepuff">Hufflepuff</button>
  <button type="button" class="btn btn-outline-primary btn-lg buttonRow" id="ravenclaw">Ravenclaw</button>
  <button type="button" class="btn btn-outline-secondary btn-lg buttonRow" id="army">Voldemort's Army</button>
  <button type="button" class="btn btn-outline-dark btn-lg buttonRow" id="clear">Clear</button>
</div>
  `;
  renderToDom("#filterGroup", domString);
};

const renderHouses = () => {
  let domString = "";
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

  for (const names of houseNames) {
    domString += `
    <div class="${names.house.charAt(0).toLowerCase()}House house">
     <div class = 'bannerHead'> 
     <h1>
        <i class="fa-solid fa-${names.sigil}"></i>
        <p id='${names.house}'>${names.house}</p>
    </h1>
     </div>
      <div id='house${names.house}' class='bannerBody'>
          <div id="rosterTable"></div>
      </div>
    </div>
    `;
  }
  renderToDom("#houses", domString);
};

const idCard = () => {
  let domString = "";
  for (const studentBody of students) {
    domString += `
      
    `;
  }
};

const roster = () => {
  let domString = "";
  for (const sorted of students) {
    if (sorted.houseName === document.querySelector("#Gryffindor").innerHTML) {
      document.querySelector("#houseGryffindor").innerHTML += `
    ${sorted.studentFirstName} ${sorted.studentLastName} <br>`;
    } else if (
      sorted.houseName === document.querySelector("#Slytherin").innerHTML
    ) {
      document.querySelector(
        "#houseSlytherin"
      ).innerHTML += `${sorted.studentFirstName} ${sorted.studentLastName} <br>`;
    } else if (
      sorted.houseName === document.querySelector("#Hufflepuff").innerHTML
    ) {
      document.querySelector(
        "#houseHufflepuff"
      ).innerHTML += `${sorted.studentFirstName} ${sorted.studentLastName} <br>`;
    } else if (
      sorted.houseName === document.querySelector("#Ravenclaw").innerHTML
    ) {
      document.querySelector(
        "#houseRavenclaw"
      ).innerHTML += `${sorted.studentFirstName} ${sorted.studentLastName} <br>`;
    } else if (
      sorted.houseName === document.querySelector("#DeathEaters").innerHTML
    ) {
      document.querySelector(
        "#houseDeathEaters"
      ).innerHTML += `${sorted.studentFirstName} ${sorted.studentLastName} <br>`;
    } else {
      console.log("something went wrong");
    }
  }

  renderToDom("#rosterTable", domString);
};

const eventListeners = () => {
  document.querySelector("#filterGroup").addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      peopleOnDom(students);
    } else if (e.target.id) {
      const house = students.filter(
        (taco) => taco.houseName.toLowerCase() === e.target.id
      );
      peopleOnDom(house);
    }
  });

  const addOne = document.querySelector("#getSorted");
  addOne.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentInput = document.querySelector('#inputGroupSelect01').value;
    console.log(studentInput);
    const sortingTo = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    const newStudent = {
      studentId: students.length++,
      studentFirstName: document.querySelector('.firstName').value,
      studentLastName: document.querySelector('.lastName').value,
      houseName: sortingTo[Math.floor(Math.random() * sortingTo.length)],
      rank: 'student',
      enlisted: false,
      defeated: false,
    };
    console.log(newStudent)
    students.push(newStudent);
    console.log(students);
    roster(students);
    
    addOne.reset();
  });
};
const turnOn = () => {
  welcome();
  filterBtn();
  renderHouses();
  roster();
  eventListeners();
};

turnOn();
