const textElement = document.getElementById('text')
const optionsButtonsElement = document.getElementById('option-buttons')
const expElement = document.getElementById('exp')
const moneyElement = document.getElementById('money')





let state = {}

function startGame() {
    state = {}
    showTextNode(1)

}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id ===
        textNodeIndex)
        textElement.innerText = textNode.text
        while (optionsButtonsElement.firstChild) {
            optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)
        }

        textNode.options.forEach(option => {
            if (showOption(option)) {
              const button = document.createElement('button')
              button.innerText = option.text
              button.classList.add('btn')
              button.addEventListener('click', () => selectOption(option))
              optionsButtonsElement.appendChild(button)


          }
        })

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}



function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0 ){
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a dimly lit cave and see a sword near you',
        options: [
            {
                text:'Take sword',
                setState: { sword: true},
                nextText: 2
            },
            {
                text: 'Leave the sword',
                nextText: 2
            }
        ]
    }, {
        id:2,
        text: 'You encounter a Goblin',
        options: [
            {
             text: 'Fight unarmed',
             requiredState: (currentState) => !currentState.sword,
             nextText: 4
            },
            {
             text: 'Fight with sword',
             requiredState: (currentState) => currentState.sword,
             nextText: 6
            }
     ]
    },
    {
        id: 4,
        text: 'Your pathetic punches do nothing to the Goblin',
        options: [
            {
             text: 'Keep trying',
             nextText: 5

            },
            {
             text: 'Admit defeat',
             nextText: -1
            }
     ]
    },
    {
        id:5,
        text: 'The Goblin slips your punch and returns with an uppercut',
        options: [
            {
             text: 'You died',
             nextText: -1

            },
     ]
    },
    {
    id:6,
    text: 'You recklessly swing your sword at the Goblin while screaming the following',
    options: [
        {
         text: 'SCOTLAND FOREVER',
         nextText: 7
        },
    ]
},
{
    id:7,
    text: 'You slash the Goblins chest and it falls to the ground, Scotland is proud',
    options: [
        {
         text: 'Search the goblin for loot',
         nextText: 8
        },
        {
         text: 'Leave the area and continue forward',
         nextText: 9
        },
    ]
},
{
    id:8,
    text: 'You notice the Goblin is wearing a gold amulet with strange runes',
    options: [
        {
         text: 'Take the amulet',
         setState: {amulet: true},
         nextText: 9
        },
        {
         text: 'Leave the amulet',
         nextText: 9
        }
    ]
},
{
    id:9,
    text: 'You notice two paths forward which do you take?',
    options: [
        {
         text: 'Left',
         nextText: 8
        },
        {
         text: 'Right',
         nextText: 9
        },
    ]
},
]   



startGame()