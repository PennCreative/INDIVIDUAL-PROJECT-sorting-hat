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
  
  for (const names of houseNames) {
    domString += `
    <div id="${names.house}" class="${names.house.charAt(0).toLowerCase()}House house">
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
  renderToDom("#houses", domString);
};

const sortToAny = (studentFilter, house) => {
  let domString = '';
  
  for (const character of studentFilter) {
    domString += `
    <div class="studentIdCard">
  <div class="row row-cols-auto">
    <div class="col classIcon">${character.houseName.charAt(0)}</div>
    <div class="col">${character.studentFirstName} ${character.studentLastName}</div>
  </div>
</div>
    `;
  }

  renderToDom(`#house${house.house}`, domString);
};

const idCard = () => {
  for (const house of houseNames) {
    console.log(house);
    let studentFilter = students.filter(eachStudent => eachStudent.houseName === house.house);
    console.log(studentFilter);

    sortToAny(studentFilter, house);
  };
  }

const eventListeners = () => {
  
  document.querySelector("#filter").addEventListener("click", (e) => {

    if (e.target.id === "clear") {
      idCard(students);
      console.log(students)
    } else if (e.target.id) {
      const topic = students.filter((taco) => taco.houseName.toLowerCase() === e.target.id.innerHTML     
      );
      idCard(topic);
    } else {
      console.log('something went wrong');
    }
  });

  const addOne = document.querySelector("#getSorted");
  addOne.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentInput = document.querySelector('#inputGroupSelect01').value;

    let sortingTo = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    if (sortingTo.includes(studentInput)) {
      sortingTo.push(studentInput)
    } else {
      console.log('You appear to have no preference...')
    }

    const newStudent = {
      studentId: students.length + 1,
      studentFirstName: document.querySelector('.firstName').value,
      studentLastName: document.querySelector('.lastName').value,
      houseName: sortingTo[Math.floor(Math.random() * sortingTo.length)],
      rank: 'student',
      enlisted: false,
      defeated: false,
    };
    console.log(newStudent)
    console.log(students)
    students.push(newStudent);

    idCard(newStudent);

    
    addOne.reset();
  });

};
const turnOn = () => {
  welcome();
  filterBtn();
  renderHouses();
  idCard()
  eventListeners();
};

turnOn();
