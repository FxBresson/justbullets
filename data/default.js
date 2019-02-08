import { defaultValue } from '../helper'

const defaultState = {
    trackers: [
      {
        id: 0,
        title: "Comment ça va aujourd'hui ?",
        type: 'mood',
        period: 'day',
        active: true,
      },
      {
        id: 1,
        title: 'Invoquer Satan',
        type: 'normal',
        period: 'week',
        goal: 2,
        active: true,
      },
      {
        id: 2,
        title: 'Nourrir Toothless',
        type: 'bool',
        period: 'day',
        active: true,
      },
      {
        id: 3,
        title: 'Cinéma',
        type: 'normal',
        period: 'month',
        goal: 4,
        active: true,
      },
      {
        id: 4,
        title: 'Heures de sommeil (dodo)',
        type: 'normal',
        period: 'day',
        goal: null,
        active: true,
      },
    ],
    today: [],
    history: {
        year: [{
            value: 2019,
            children: [ //month
                {
                    value: 1,
                    trackers: [
                        {id: 3,value: 4}
                    ],
                    children: [ //week
                        { 
                            value: 5,
                            trackers: [
                                {id: 2, value: 0}
                            ],
                            children: [ //day
                                { 
                                    value: 31,
                                    trackers: [
                                        {id: 0,value:'happy'},
                                        {id: 2,value:false},
                                        {id: 4,value:7},
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 2,
                    trackers: [
                        {id: 3,value: 1}
                    ],
                    children: [ //week
                        { 
                            value: 5,
                            trackers: [
                                {id: 2, value: 0}
                            ],
                            children: [ //day
                                { 
                                    value: 1,
                                    trackers: [
                                        {id: 0,value:'happy'},
                                        {id: 2,value:false},
                                        {id: 4,value:7},
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }]
    }
}

defaultState.today = defaultState.trackers.map(tracker => {
return {
    id: tracker.id,
    value: defaultValue(tracker.type),
}
})

export default defaultState