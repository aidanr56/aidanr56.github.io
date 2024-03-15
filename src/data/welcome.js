const welcome = [
    {
        //requirements
        ethics_requirement: 0,
        explainability_requirement: 0,
        data_requirement: 0,
        //rewards
        ethics_reward: 20,
        explainability_reward: 0,
        data_reward: 20,
        //other
        interaction_complete: false
    },
    {
        node: 1,
        text: "Hello Traveller! Welcome to AI-Landia, my name is Sarah. We're so glad you were able to make it here, I hope your journey went well. All of us here on AI-Landia are passionate about the world of AI, and can't wait to share our knowledge with you. Currently, we have experts on Ethics of AI, Explainable AI, and Data Literacy. As you explore this island feel free to approach any of the locals, they'd love to have a chat. But first, let's start with a little introduction on AI to make sure your ready to go. Sound good?",
        responses: [
            {
                text: 'Continue',
                nextNode: 2
            }
        ]
    },
    {
        node: 2,
        text: "AI has been a pretty big buzz word, it feels like everyone is talking about it. In case you weren't sure, AI stands for Artificial Intelligence. Generally speaking, AI refers to the fields of Machine Learning and/or Deep Learning, but of which are sub-fields of computer science. Put simply, these fields are concerned with mathematically evaluating large sets of data, to consequently make predictions or classifications. An example of this could be predicting how much a house will cost. For example, we might give an AI a set of data that has information on thousands of houses. For each house, we could include its price, location, size, number of bedrooms, and number of bathrooms. Now let's say in our training data we saw that a house with 2 bedrooms cost 100,000 and a house with 3 bedrooms cost 150,000. Do you think a house with 4 bedrooms will cost more or less than 150,000?",
        responses: [
            {
                text: "The house with 4 bedrooms will cost more",
                correct: true,
                nextNode: 3
            },
            {
                text: "The house with 4 bedrooms will cost the same",
                correct: false,
                nextNode: 4
            },
            {
                text: "The house with 4 bedrooms will cost less",
                correct: false,
                nextNode: 4
            }
        ]
    },
    {
        node: 3,
        text: "That's exactly right, and that's similar to how an AI would view this problem. The system would be able to see that as the number of bedrooms increases, so does the cost. More complex systems might take into account a larger number of 'features'. Features refers to the components of the dataset, in this case, the price, location, size, number of bedrooms/bathrooms in the house.",
        responses: [
            {
                text: 'Continue',
                nextNode: 5
            }
        ]
    },
    {
        node: 4,
        text: "Unfortunately, I'd have to disagree. Based on the information we were given, it appears that as the number of bedrooms increases, so does the cost of the house. Based on this we can predict that a house with 4 bedrooms will cost more than a house with 3, so long as we have no other information to go off. This is similar to how an AI would view this problem. The system would be able to see that as the number of bedrooms increases, so does the cost. More complex systems might take into account a larger number of 'features'. Features refers to the components of the dataset, in this case, the price, location, size, number of bedrooms/bathrooms in the house."
    },
    {
        node: 5,
        text: "I hope that example was able to get you thinking about how we can make predictions based on past data. It's a very primitive example of how some AI systems work. However, it is important to note that AI is a broad term. Every AI system works differently, and is designed to accomplish a different goal. While the definition of AI is not exactly clear the consensus seems to be that it refers to technology that has the capability to simulate human-like intelligence. However, most contemporary AI systems are quite niche, so called narrow AI. This means that they are capable of dealing with a specific set of tasks, and are unable to complete tasks beyond what they were explicitly trained on.",
        responses: [
            {
                text: 'Continue',
                nextNode: 6
            }
        ]
    },
    {
        node: 6,
        text: "Now, that's all I have for you. I just wanted to give you a little introduction. For now, feel free to explore the island some more. Try and talk to as many people as you can, they all have interesting stuff to say, and I'm sure you'd learn a lot. Good luck out there!",
        responses: [
            {
                text: "Leave"
            }
        ]
    }
]

export { welcome }