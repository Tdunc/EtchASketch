const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.color-choice');
const grayBtn = document.getElementById('gray');
const blackBtn = document.getElementById('black');
const whiteBtn = document.getElementById('white');
const rainbowBtn = document.getElementById('rainbow');
const clearBtn = document.getElementById('clear');
const gridBtn = document.getElementById('grid');



function createDivs(col, row) {
  for(let i = 0; i < (col * row); i++) {
    const div = document.createElement('div');
    // div.style.border = '1px solid black';
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.appendChild(div).classList.add("box");

  }
}

// createDivs(16, 16);

function grayColor() {
  const boxs = container.querySelectorAll('.box');
  grayBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      let rNumber = Math.floor(Math.random() * 255);
      box.style.background = `rgb(${rNumber}, ${rNumber}, ${rNumber})`
      console.log(rNumber);
    }))
  })
}

function blackColor() {
  const boxs = container.querySelectorAll('.box');
  blackBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
    box.style.background = 'black';
    }))
  })
}

function whiteColor() {
  const boxs = container.querySelectorAll('.box');
  whiteBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
    box.style.background = 'white';
    }))
  })
}

function rainbowColor() {
  const boxs = container.querySelectorAll('.box');
  rainbowBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      box.style.background = `rgb(${red}, ${green}, ${blue})`
    }))
  })
}

function clearAll() {
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.remove());
    promptUser();
  }

clearBtn.addEventListener('click', clearAll);


function promptUser() {
  let person = prompt("Enter a grid size between 1 and 100:");
  if (person <= 100 ) {
      createDivs(person, person);
      grayColor();
      blackColor();
      whiteColor();
      rainbowColor();
  } else if (person > 100){
    promptUser();
    
  }
}


promptUser();
