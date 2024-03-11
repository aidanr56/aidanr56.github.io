const npc_1_data = [
    //xp requirements and rewards
    {   
        //requirements
        ethics_requirement: 0,
        explainability_requirement: 0,
        data_requirement: 0,
        //rewards
        ethics_reward: 10,
        explainability_reward: 0,
        data_reward: 10,
        //other
        interaction_complete: false
    },
    //node 1
    {
        node: 1,
        text: "Welcome player to the game. Give them a very brief initial introduction to what AI is. AI refers to technology that enables computers and machines to simulate human-like intelligence, and often encompasses the field of machine and deep learning. This is accomplished by mathematically evaluating input data, and producing a corresponding prediction based on this For example, statistical algorithms, such as linear regression, may be used to find links between trends. Let's try an example, here is a table that shows the price of an apple and the weather for seven consecutive days:",
        responses: [
            {
                text: 'Continue',
                correct: null,
                nextNode: 2
            }
        ]
    },
    {
        node: 2,
        text: "DAY --- COST --- WEATHER \n 1 ---    5.00 --- Light Rain \n 2 ---    8.00 --- Partially Cloudy \n 3 ---    3.00 --- Stormy \n 4 ---    12.00 --- Sunny",
        responses : [
            {
                text: "There is no connection between the weather and the cost of apples.",
                correct: false,
                nextNode: 4
            },
            {
                text: "The nicer the weather, the more expensive the apples.",
                correct: true,
                nextNode: 3
            },
            {
                text: "The worse the weather, the more expensive the apples.",
                correct: false,
                nextNode: 4
            }
        ]
    },
    {
        node: 3,
        text: "That is correct, as you saw, the apples are more expensive on days with nicer weather. Now let's try an exercise, this time we'll show you a table, but without the price. Can you tell me what day the apples will probably be the cheapest?",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 5
            }
        ]
    },
    {
        node: 4,
        text: "Unfortunately, that wasn't quite right. In the previously shown table, the cost of Apples was actually higher on days with nicer weather (i.e. Sunny days). It's important to remember that we are not trying to differentiate between correlation and causation here. While it is true that the nice weather may not be the reason for the change in price, there is still a correlation. Now, based on this, let's try another example. Except this time I want you to tell me which days you think the Apples will be cheapest. (Keep in mind we are basing this off the data in the previous example).",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 5
            }
        ]
    },
    {
        node: 5,
        text: "DAY --- WEATHER \n 1 ---     Sunny \n 2 ---      Partially Cloudy \n 3 ---       Stormy \n 4 --      Light Rain",
        responses: [
            {
                text: "Day 1",
                correct: false,
                nextNode: 7
            },
            {
                text: "Day 2",
                correct: false,
                nextNode: 7
            },
            {
                text: "Day 3",
                correct: true,
                nextNode: 6
            },
            {
                text: "Day 4",
                correct: false,
                nextNode: 7
            }
        ]
    },
    {
        node: 6,
        text: "That was correct, well done. This is a very primitive example of how an AI might work. Modern AI’s such as ChatGPT use vast “neural networks” that take into account millions of different parameters to make predictions. Don’t worry if this seems confusing, for now, it is time for you to begin your adventure. AI-landia is filled with helpful people, try talking to them, and I have no doubt you’ll learn something new!",
        responses: []
    },
    {
        node: 7,
        text: "That wasn't quite right, let's try that one again. Remember what we saw in this first table. As the weather was increasing, so was the price of the apples.",
        responses: [
            {
                text: "Try Again",
                correct: null,
                nextNode: 5
            }
        ]
    }
]

export { npc_1_data }