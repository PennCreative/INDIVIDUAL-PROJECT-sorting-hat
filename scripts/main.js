const students = [
  {studentId: 1,
  studentName: 'Harry',
  houseName: 'Gryffindor',
  rank: 'student',
  enlisted: false,
  defeated: false,
},
{ 
  studentId: 2,
  studentName: 'Luna',
  houseName: 'Ravenclaw',
  rank: 'student',
  enlisted: false,
  defeated: false,
},
{ 
  studentId: 3,
  studentName: 'Newt',
  houseName: 'Hufflepuff',
  rank: 'student',
  enlisted: false,
  defeated: false,
},
{ 
  studentId: 4,
  studentName: 'Draco',
  houseName: 'Slytherin',
  rank: 'student',
  enlisted: false,
  defeated: false,
},
{ 
  studentId: 5,
  studentName: 'Voldemort',
  houseName: 'Army',
  rank: 'leader',
  enlisted: false,
  defeated: false,
}
];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const welcome = () => {
  let domString = `<h3>WELCOME</h3>
  <h4>to the amazing world of</h4>
  <h1>HOGWORX!</h1>
<form>
<div class="input-group">
<span class="input-group-text">First Name</span>
<input type="text" aria-label="First name" class="form-control">
<span class="input-group-text">Last Name</span>
<input type="text" aria-label="Last name" class="form-control">
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
  renderToDom('#welcomeMsg', domString);
}

const houseCards = (array) => {
  let domString = ''; 
  
  for (const people in array) {
    domString += ``;
  }
};

const filterBtn = () => {
  let domString = `
  <div class="buttons">
  <button class="btn btn-outline-danger btn-lg buttonRow" id="gryffindor">Gryffindor</button>
  <button class="btn btn-outline-success btn-lg buttonRow" id="slytherin">Slytherin</button>
  <button class="btn btn-outline-warning btn-lg buttonRow" id="hufflepuff">Hufflepuff</button>
  <button class="btn btn-outline-primary btn-lg buttonRow" id="ravenclaw">Ravenclaw</button>
  <button class="btn btn-outline-secondary btn-lg buttonRow" id="army">Voldemort's Army</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="clear">Clear</button>
</div>
  `;
  renderToDom('#filterGroup', domString);
};

const eventListeners = () => {

  document.querySelector('#filterGroup').addEventListener('click', (e) => {
    if  (e.target.id === 'clear'){ 
      peopleOnDom(students)
    } else if (e.target.id) {
      const house = students.filter((taco) => taco.houseName.toLowerCase() === e.target.id)
      peopleOnDom(house);
    } else {
        peopleOnDom(students)
      }
  });

  const addOne = document.querySelector('#addStudent');
  
  addOne.addEventListener('submit', (e) => {
    e.preventDefault();
    const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

    const newStudent = {
      studentId: students.length++,
      studentName: document.querySelector('#name').value,
      houseName: houses[Math.floor(Math.random * houses.length)],
      rank: 'student',
      enlisted: false,
      defeated: false,
    };
    console.log(newStudent)
    students.unshift(newStudent);

    peopleOnDom(students);
  }); 
} 
const turnOn = () => {
  welcome()
  filterBtn()
  eventListeners()
  peopleOnDom(students)
};

turnOn();
