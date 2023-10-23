



const textNodes = [
    {
        id: 1,
        text: 'You wake up in a dimly lit cave and see a sword near you',
        options: [
            {
                text:'Take sword',
                setState: {sword: true},
                money: + 50,
                nextText: 2
            },
            {
                text: 'Leave the sword',
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
             requiredState: (currentState) => !currentState.sword,
             nextText: 4,    
            },
            {
             text: 'Fight with sword',
             requiredState: (currentState) => currentState.sword,
             money:  - 50,
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
         nextText: 11
        },
        {
         text: 'Right',
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
         nextText: 12
        },
        {
         text: 'Turn back around',
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
         nextText: 13
        },
        {
         text: 'Turn around',
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
         nextText: 16
        },
        {
         text: 'Scrap him',
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
         nextText: 17
        },
        {
         text: 'No',
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
         nextText: 18
        },
        {
         text: 'KYS',
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
         nextText: 20
        },
        {
         text: 'Health',
         nextText: 19
        },
        {
         text: 'Honour',
         nextText: 20
        },
        {
         text: 'Household',
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
         nextText: 20
        },
        {
         text: 'Sleeping Beauty',
         nextText: 20
        },
        {
         text: 'Cinderella',
         nextText: 22
        },
        {
         text: 'Elsa',
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
            nextText: 20
           },
           {
            text: 'Terminal',
            nextText: 20
           },
           {
            text: 'Concourse',
            nextText: 20
           },
           {
            text: 'Carousel',
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
            nextText: 20
           },
           {
            text: 'Flymo',
            nextText: 20
           },
           {
            text: 'Chubb',
            nextText: 26
           },
           {
            text: 'Ronseal',
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
            nextText: 20
           },
           {
            text: 'Communism',
            nextText: 28
           },
           {
            text: 'Conservatism',
            nextText: 20
           },
           {
            text: 'Liveralism',
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
         nextText: 29
        },
    ]
},
{
    id:27,
    text: 'Which toys have been marketed with the phrase “robots in disguise”?',
    options: [
           {
            text: 'Bratz Dolls',
            nextText: 20
           },
           {
            text: 'Sylvanian Families',
            nextText: 20
           },
           {
            text: 'Hatchimals',
            nextText: 20
           },
           {
            text: 'Transformers',
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
         nextText: 31
        },
    ]
},
{
    id:27,
    text: 'What does the word loquacious mean?',
    options: [
           {
            text: 'Angry',
            nextText: 20
           },
           {
            text: 'Chatty',
            nextText: 32
           },
           {
            text: 'Beautiful',
            nextText: 20
           },
           {
            text: 'Shy',
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
            nextText: 34
           },
           {
            text: 'Broken bones',
            nextText: 20
           },
           {
            text: 'Heart conditions',
            nextText: 20
           },
           {
            text: 'Old age',
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
         nextText: 35
        },
    ]
},
{
    id:33,
    text: ' In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?',
    options: [
           {
            text: 'Bow-tie, braces and tweed jacket',
            nextText: 20
           },
           {
            text: 'Pinstripe suit and trainers',
            nextText: 20
           },
           {
            text: 'Cape, velvet jacket and frilly shirt',
            nextText: 20
           },
           {
            text: 'Wide-brimmed hat and extra long scarf',
            nextText: 35
           },
    ]
},
{
    id:35,
    text: 'Correct, here is your final question',
    options: [
        {
         text: 'Im ready',
         nextText: 36
        },
    ]
},
{
    id:36,
    text: 'In 1718, which pirate died in battle off the coast of what is now North Carolina?',
    options: [
           {
            text: 'Calico Jack',
            nextText: 20
           },
           {
            text:'Blackbeard',
            
            nextText: 37
           },
           {
            text: 'Bartholomew Roberts',
            nextText: 20
           },
           {
            text: 'Captain Kidd',
            nextText: 20
           },
    ]
},

{
    id:37,
    text: 'Congratulations you are now a millionaire',
    options: [
        {
         text: 'Im so happy',
         nextText: 38,
        },
     
    ]
},
{
    id:38,
    text: '"Now hand it over" he points his pistol at you',
    options: [
        {
         text: 'Why jeremy',
         nextText: 36
        },
        {
         text: '',
         nextText: 36
        },
    ]
},
]   


