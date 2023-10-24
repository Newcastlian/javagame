



const textNodes = [
    {
        id: 1,
        text: 'You wake up in a dimly lit cave and see a sword near you',
        options: [
            {
                text:'Take sword',
                setState: {sword: true},
                money: + 0,
                nextText: 2
            },
            {
                text: 'Leave the sword',
                money: + 0,
                nextText: 2,
            }
        ]
    },
    { 
        id:2,
        text: 'You encounter a Goblin',
        options: [
            {
             text: 'Fight unarmed',
             money: + 0,
             requiredState: (currentState) => !currentState.sword,
             nextText: 4,    
            },
            {
             text: 'Fight with sword',
             requiredState: (currentState) => currentState.sword,
             money: + 0,
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
             money: + 0,
             nextText: 5

            },
            {
             text: 'Admit defeat',
             money: + 0,
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
             money: + 0,
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
         money: + 0,
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
         money: + 0,
         nextText: 8
        },
        {
         text: 'Leave the area and continue forward',
         money: + 0,
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
         money: + 0,
         nextText: 9
        },
        {
         text: 'Leave the amulet',
         money: + 0,
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
         money: + 0,
         nextText: 11
        },
        {
         text: 'Right',
         money: + 0,
         nextText: 10
        },
    ]
},
{
    id:10,
    text: 'After walking what feels like hours you notice the path leads into a large cave',
    options: [
        {
         text: 'Enter',
         money: + 0,
         nextText: 12
        },
        {
         text: 'Turn back around',
         money: + 0,
         nextText: 9
        },
    ]
},
{
    id: 11,
    text: 'The path is straight and narrow and you see a light at the end',
    options: [
        {
         text: 'Contine forward',
         money: + 0,
         nextText: 13
        },
        {
         text: 'Turn around',
         money: + 0,
         nextText: 9
        },
    ]
},
{
    id:13,
    text: 'Walking into the room you see a Jeremy Clarkson like figure',
    options: [
        {
         text: 'Hello there',
         money: + 0,
         nextText: 16
        },
        {
         text: 'Scrap him',
         money: + 0,
         nextText: 14
        },
    ]
},
{
    id:14,
    text: 'You lunge forward fist in hand and attempt a sucker punch',
    options: [
        {
         text: 'KACHOW',
         money: + 0,
         nextText: 15
        },
    ]
},
{
    id:15,
    text: 'As if he already predicted your movement Jeremy steps to the side and returns a left hook',
    options: [
        {
         text: 'You died',
         money: + 0,
         nextText: -1
        },
    ]
},
{
    id:16,
    text: 'Do you want to be a millionaire? he asks',
    options: [
        {
         text: 'Yes',
         money: + 0,
         nextText: 17
        },
        {
         text: 'No',
         money: + 0,
         nextText: -1
        },
    ]
},
{
    id:17,
    text: 'You take a seat infront of the live studio audience',
    options: [
        {
         text: 'Im ready',
         money: + 0,
         nextText: 18
        },
        {
         text: 'KYS',
         money: + 0,
         nextText: -1
        },
    ]
},
{
    id:18,
    text: 'In the UK, the abbreviation NHS stands for National what Service?',
    options: [
        {
         text: 'Humanity',
         money: + 0,
         nextText: 20
        },
        {
         text: 'Health',
         money: + 0,
         nextText: 19
        },
        {
         text: 'Honour',
         money: + 0,
         nextText: 20
        },
        {
         text: 'Household',
         money: + 0,
         nextText: 20
        },
    ]
},
{
    id: 20,
    text: 'Jeremy Clarkson shoots you in the face',
    options: [
        {
         text: 'You died',
         money: + 0,
         nextText: -1
        },
    ]
},
{
    id:19,
    text: 'Correct',
    options: [
        {
         text: 'Next question',
         money: + 0,
         nextText: 21
        },
    ]
},
{
    id:21,
    text: '200 - Which Disney character famously leaves a glass slipper behind at a royal ball',
    options: [
        {
         text: 'Pocahontas',
         money: + 0,
         nextText: 20
        },
        {
         text: 'Sleeping Beauty',
         money: + 0,
         nextText: 20
        },
        {
         text: 'Cinderella',
         money: + 0,
         nextText: 22
        },
        {
         text: 'Elsa',
         money: + 0,
         nextText: 20
        },
    ]
},
{
    id:22,
    text: 'Correct',
    options: [
        {
         text: 'Next question',
         money: + 0,
         nextText: 23
        },
    ]
},
{
    id:23,
    text: 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?',
    options: [
           {
            text: 'Hangar',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Terminal',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Concourse',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Carousel',
            money: + 0,
            nextText: 24
           },
    ]
},
{
    id:24,
    text: 'Correct',
    options: [
        {
         text: 'Next question',
         money: + 0,
         nextText: 25
        },
    ]
},
{
    id:25,
    text: 'Which of these brands was chiefly associated with the manufacture of household locks?',
    options: [
           {
            text: 'Phillips',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Flymo',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Chubb',
            money: + 0,
            nextText: 26
           },
           {
            text: 'Ronseal',
            money: + 0,
            nextText: 20
           },
    ]
},
{
    id:26,
    text: 'Correct',
    options: [
        {
         text: 'Next question',
         money: + 0,
         nextText: 27
        },
    ]
},
{
    id:27,
    text: 'The hammer and sickle is one of the most recognisable symbols of which political ideology?',
    options: [
           {
            text: 'Republicanism',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Communism',
            money: + 0,
            nextText: 28
           },
           {
            text: 'Conservatism',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Liveralism',
            money: + 0,
            nextText: 20
           },
    ]
},
{
    id:28,
    text: 'Correct, you are doing well',
    options: [
        {
         text: 'Next question',
         money: + 0,
         nextText: 29
        },
    ]
},
{
    id:29,
    text: 'Which toys have been marketed with the phrase “robots in disguise”?',
    options: [
           {
            text: 'Bratz Dolls',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Sylvanian Families',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Hatchimals',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Transformers',
            money: + 0,
            nextText: 30
           },
    ]
},
{
    id:30,
    text: 'Correct',
    options: [
        {
         text: 'Next question',
         money: + 0,
         nextText: 31
        },
    ]
},
{
    id:31,
    text: 'What does the word loquacious mean?',
    options: [
           {
            text: 'Angry',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Chatty',
            money: + 0,
            nextText: 32
           },
           {
            text: 'Beautiful',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Shy',
            money: + 0,
            nextText: 20
           },
    ]
},
{
    id:32,
    text: 'Correct',
    options: [
        {
         text: 'Next question',
         money: + 0,
         nextText: 33
        },
    ]
},
{
    id:33,
    text: 'Obstetrics is a branch of medicine particularly concerned with what?',
    options: [
           {
            text: 'Childbirth',
            money: + 0,
            nextText: 34
           },
           {
            text: 'Broken bones',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Heart conditions',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Old age',
            money: + 0,
            nextText: 20
           },
    ]
},
{
    id:34,
    text: 'Correct',
    options: [
        {
         text: 'Next question',
         money: + 0,
         nextText: 35
        },
    ]
},
{
    id:35,
    text: ' In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?',
    options: [
           {
            text: 'Bow-tie, braces and tweed jacket',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Pinstripe suit and trainers',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Cape, velvet jacket and frilly shirt',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Wide-brimmed hat and extra long scarf',
            money: + 0,
            nextText: 36
           },
    ]
},
{
    id:36,
    text: 'Correct, here is your final question',
    options: [
        {
         text: 'Im ready',
         money: + 0,
         nextText: 37
        },
    ]
},
{
    id:37,
    text: 'In 1718, which pirate died in battle off the coast of what is now North Carolina?',
    options: [
           {
            text: 'Calico Jack',
            money: + 0,
            nextText: 20
           },
           {
            text:'Blackbeard',
            money: + 0,
            nextText: 38
           },
           {
            text: 'Bartholomew Roberts',
            money: + 0,
            nextText: 20
           },
           {
            text: 'Captain Kidd',
            money: + 0,
            nextText: 20
           },
    ]
},

{
    id:38,
    text: 'Congratulations you are now a millionaire',
    options: [
        {
         text: 'Im so happy',
         nextText: 39,
         money: + 1000000
        },
     
    ]
},
{
    id:39,
    text: '"Now hand it over" he points his pistol at you',
    options: [
        {
         text: 'Why jeremy',
         money: + 0,
         nextText: 40,
        },
        {
         text: 'I dont think so',
         money: + 0,
         requiredState: (currentState) => currentState.uno,
         nextText: 56
        },
    ]
},
{
    id:12,
    text: 'You see an altar with a glowing card',
    options: [
        {
         text: 'Walk over to it',
         money: + 0,
         nextText: 50,
        },
        {
         text: 'Inspect the room',
         money: + 0,
         nextText: 51
        },
    ]
},
{
   id:50,
   text: "The floor beneath you crumbles and you are sent plummeting towards the abyss",
   options: [
    {
        text: 'You died',
        money: + 0,
        nextText: -1
    }
   ]
   },
   {
    id:51,
    text:'You notice a tripwire',
    options: [
        {
         text:'Step over it and head over to the altar',
         money: + 0,
         nextText: 53
        },
        {
         text:'Attempt to disable it',
         money: + 0,
         nextText:52
        }
    ]
   },
   {
    id: 52,
    text: 'You have no idea how to disable a tripwire and end up setting it off',
    options: [
        {
         text:'Whoops',
         money: + 0,
         nextText: 50
        }
    ]
   },
   {
    id:53,
    text: 'You gracefully step over the tripwire and reach the altar',
    options: [
        {
         text:'Grab the card',
         setState: {uno: true},
         money: + 0,
         nextText:54
        },
        {
         text:'Leave the card and head back',
         money: + 0,
         nextText: 9,
        }
    ]
   },
   {
    id:54,
    text: 'You grab the card and notice its an uno reverse card',
    options: [
        {
         text:'This will come in handy',
         money: +0,
         nextText:55,
        }

    ]
   },
   {
    id:55,
    text:'There is nothing left to explore this way time to head back',
    options:[
        {
         text:'Turn back',
         nextText: 9 ,
         money: +0,
        }

    ]
   },
   {

    id:56,
    text:'Jeremy succumbs to the power of the uno reversal and hands you another million and his gun',
    options:[
        {
         text:'Easy money',
         money: + 1000000,
         nextText: 57,
        },
        {
         text:'Heh my trump card',
         money: + 1000000,
         nextText: 57,

        }
    ]
   },
   {

    id:57,
    text: 'Jeremy breaks down and starts crying',
    options:[
        {
         text:'Ignore him and carry on',
         money: +0,
         nextText: 58,
        },
        {
         text:'Spit on him and carry on',
         money: +0,
         nextText: 58,
        }
    ]
   },
   {

    id:58,
    text:'You see a door open and sunlight coming through',
    options:[
        {
         text:'Head through the door',
         money: +0,
         nextText: 59,
        }
    ]
   },
   {

    id: 59,
    text:'You feel a strong wind and see a helicopter',
    options:[
        {
         text:'Climb in and win the game',
         money: +0,
         nextText: 60,
        }
    ]
   },
   {
    id:60,
    text:'Thanks for playing I harbour no ill will towards Jeremy Clarkson',
   } 

]   
