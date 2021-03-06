const structure = {
    trackers: [
        {
            id: 0,
            title: "Sport",
            type: "normal",
            period: "week",
            goal: 2,
        },
        {
            id: 1,
            title: "Sleep",
            type: "normal",
            period: "day",
            goal: null,
        },
        {
            id: 2,
            title: "Period",
            type: "normal",
            period: "day",
            goal: 1,
        },
        {
            id: 3,
            title: "Cinema",
            type: "normal",
            period: "month",
            goal: 4,
        },
        {
            id: 4,
            title: "Mood",
            type: "mood",
            period: "day",
            goal: null,
        }
    ],
    today: [
        {
            id: 0,
            value: 0
        },
        {
            id: 1,
            value: 7
        },
        {
            id: 2,
            value: 1
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: "happy"
        }
    ],
    history: [
        [[], [], [], [], [[], [], [], [
            {
                date
            }
        ]]],
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ],
    history: {
        year: [{
            value: 2019,
            children: [ //month
                {
                    value: 1,
                    trackers: [],
                    children: [ //week
                        { 
                            value: 4,
                            trackers: [],
                            children: [ //day
                                { 
                                    value: 24,
                                    trackers: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }]
    }
}