const textElement = document.getElementById('text')
const optionsButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame() {
    state = {}
    showTextNode(1)

}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id ===
        textNodeIndex)
        textElement.innerText = textNode.text
        console.log("line 17")
        while (optionsButtonsElement.firstChild) {
            optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)
        }

        textNode.options.forEach(option => {
            if (showOption(option)){
              const button = document.createElement('button')
              button.innerText = option.text
              button.classList.add('btn')
              button.addEventListener('click', () => selectOption(option))
              optionsButtonsElement.appendChild(button)


          }
        })

}
function selectOption(option) {

function showOption(option) {
    return true
}


}

const textNodes = [
    {
        id: 1,
        text: 'WOOOOOOO',
        options: [
            {
                text:'Take goo',
                setState: { blueGoo: true},
                nextText: 2
            },
            {
                text: 'Leave the goo',
                nextText:2

            }
        ]
    }
]

startGame()