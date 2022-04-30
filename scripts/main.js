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
  <p>Created by Jkjk Rollin</p>
<form>
  <form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck">
      <label class="form-check-label" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</form>
  `;
  renderToDom('#welcomeMsg', domString);
}

const peopleOnDom = (array) => {
  let domString = "";

  for (const people of array) {
    domString += `<h1>${people.studentName} of ${people.houseName}</h1>`
  }
  renderToDom('#hogwarts', domString);
}

const filterBtn = () => {
  let domString = `
  <div class="buttons">
  <button class="btn btn-outline-dark btn-lg buttonRow" id="gryffindor">Gryffindor</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="slytherin">Slytherin</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="hufflepuff">Hufflepuff</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="ravenclaw">Ravenclaw</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="army">Voldemort's Army</button>
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
