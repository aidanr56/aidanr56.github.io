const npc_1_data = [
    //requirements
    {
        ethics: 0,
        explainability: 0,
        data: 0
    },
    //node 1
    {
        node: 1,
        text: 'first line here',
        responses: [
            {
                text: 'option 1',
                correct: true,
                nextNode: 2
            },
            {
                text: 'option 2',
                correct: false,
                nextNode: 3
            }
        ]
    },
    //node 2
    {
        node: 2,
        text: 'second line here',
        responses: [
            {
                text: 'option 1',
                correct: true,
                nextNode: 2
            },
            {
                text: 'option 2',
                correct: false,
                nextNode: 3
            }
        ]
    },
    //node 3
    {
        node: 3,
        text: 'third line here',
        responses: [
            {
                text: 'option 1',
                correct: true,
                nextNode: 2
            },
            {
                text: 'option 2',
                correct: false,
                nextNode: 3
            }
        ]
    },
]

export { npc_1_data }