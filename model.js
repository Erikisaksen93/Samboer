const model = {
    points: [
        {
            name: 'Ina',
            points: 67,
        },
        {
            name: 'Erik',
            points: 999,
        },
    ],
    log: [
        {
            text: "Erik gjorde: 'Tøm oppvaskmaskinen'... for 13 poeng!",
        },
        {
            text: "Ina gjorde: 'Vaske badet'... for 23 poeng!",
        },
        {
            text: "Ina gjorde: 'Lage middag'... for 15 poeng!",
        },
        {
            text: "Erik gjorde: 'Handle mat'... for 13 poeng!",
        },
        {
            text: "Ina gjorde: 'Gå med søpla'... for 5 poeng!",
        },
        {
            text: "Ina gjorde: 'Støvsuge leiligheten'... for 17 poeng!",
        },
        {
            text: "Erik gjorde: 'Tømme kattedoen'... for 10 poeng!",
        },
        {
            text: "Erik kjøpte: '15 min massasje'... for 70 poeng!",
        },
    ],
    todo: [
        {
            chore: 'Lage middag',
            points: 13,
            selected: 'Ina Hillestad',
        },
        {
            chore: 'Vaske badet',
            points: 13,
            selected: 'Erik Isaksen',
        },
        {
            chore: 'Gå med søpla',
            points: 6,
            selected: 'Ina Hillestad',
        },
        {
            chore: 'Tømme kattekassa',
            points: 15,
            selected: 'Erik Isaksen',
        },
    ],
    addTodo: {
        chore: 'Hente posten',
        points: 3,
    },
    store: [
        {
            reward: '20 minutter massasje',
            price: 120,
            selected: 'none',
            allowErik: false,
            allowIna: false,
            allowBoth: true,

        },
        {
            reward: 'Frokost på senga',
            price: 90,
            selected: 'none',
            allowErik: false,
            allowIna: false,
            allowBoth: true,
        },
        {
            reward: 'Kaffe på senga',
            price: 45,
            selected: 'none',
            allowErik: false,
            allowIna: false,
            allowBoth: true,
        },
        {
            reward: 'Sex',
            price: 90,
            selected: 'none',
            allowErik: false,
            allowIna: false,
            allowBoth: true,
        },
        {
            reward: 'Får velge middag',
            price: 100,
            selected: 'none',
            allowErik: false,
            allowIna: false,
            allowBoth: true,
        },
        {
            reward: 'Blowjob',
            price: 120,
            selected: 'none',
            allowErik: true,
            allowIna: false,
            allowBoth: false,
        },
    ],
    addToStore: {
        reward: '',
        price: '',
        allowErik: false,
        allowIna: false,
        allowBoth: false,
    },
}