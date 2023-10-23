const textElement = document.getElementById('text')
const optionsButtonsElement = document.getElementById('option-buttons')


// player info

let state = {

    name: "Unknown",

    health: 1000,

    strength: 10,
  
    money: 0,
    
    abilities: [],
};



function userName() {
    state.name = prompt("Enter your name")
};





// shows players stats
function displayStats() {
    document.getElementById("game").innerHTML ="Name: " + state.name + "<br/>" +"Strength: " + state.strength + "<br>" + "Money: " + state.money + "<br>" + "Health: " + state.health + "<br />";
  };


// displays buttons if they have the required state
function inRequiredStateForOption(option) {
    return option.requiredState == null || option.requiredState(state)
}


// when clicking a button
function selectOption(option) {
    // checks if textnode is is less than or equal to 0 if it does then restarts the game
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0 ){
        return startGame(1)
    }
    // adds state option to state store
    state = Object.assign(state, option.setState)
    state.money += (option.money),
    
    startGame(nextTextNodeId)
    console.log(state)
}

// start game
function startGame(textNodeIndex) {
   // sets textnode to the id passed into startgame
   const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
   // changes the text to the text inside of the textnode object passed into the function
   console.log(textElement)
   console.log(textNode.text)
   textElement.innerText = textNode.text
   // while a button exists clear the buttons 
     while (optionsButtonsElement.firstChild) {
     optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)
    }

    // creates a button and changes the text within to the options
    // for each option inside text node options add them to the screen
    textNode.options.forEach(option => {
          if (inRequiredStateForOption(option)) { 
          const button = document.createElement('button')
          button.innerText = option.text
          button.classList.add('btn')
          button.addEventListener('click', () => selectOption(option))
          optionsButtonsElement.appendChild(button)
      }
    })
}




console.log(state)

userName()
startGame(1)


 