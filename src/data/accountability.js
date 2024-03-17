const accountability = [
    {
        //requirements
        ethics_requirement: 0,
        explainability_requirement: 0,
        data_requirement: 0,
        //rewards
        ethics_reward: 30,
        explainability_reward: 0,
        data_reward: 0,
        //other
        interaction_complete: false
    },
    {
        node: 1,
        text: "Hi! My name is Tara. I hope you've been enjoying your time here on AI-landia. It's beautiful here this time of year.",
        responses: [
            {
                text: "Yes it's been fantastic!",
                nextNode: 2
            },
            {
                text: "Honestly, I'm really a huge fan of it here",
                nextNode: 3
            },
            {
                text: "Do you guys even have seasons here?",
                nextNode: 4
            }
        ]
    },
    {
        node: 2,
        text: "I'm delighted to hear that you like it here, and I hope that you've learned lots from my colleagues. Personally, I'm very interested in the topic of accountability and AI. For example, if an AI system causes harm to someone, who do you think is responsible?",
        responses: [
            {
                text: "The developers of the AI system",
                nextNode: 6
            },
            {
                text: "The person who is using the AI system at the time",
                nextNode: 7
            },
            {
                text: "The AI itself is responsible for any harm it causes",
                nextNode: 8
            }
        ]
    },
    {
        node: 3,
        text: "Well, I'm very sorry to hear that. AI might not be an interesting topic for everyone, but we firmly believe that it is important for people to understand it. Its role in the world will only continue to grow, and want to emower people to make informed decisions!",
        responses: [
            {
                text: "Continue",
                nextNode: 5
            }

        ]
    },
    {
        node: 4,
        text: "As a wise man once said 'Life is a cycle of change, and the seasons are just another reminder of that.' (I don't actually know who said, the source is 'Anonymous', but they were probably wise).",
        responses: [
            {
                text: "Continue",
                nextNode: 5
            }
        ]
    },
    {
        node: 5,
        text: "Nonetheless, I'm here to talk about accountability. So, let's start this off with a question. If an AI system causes harm to someone, who do you think is responsible?",
        responses: [
            {
                text: "The developers of the AI system",
                nextNode: 6
            },
            {
                text: "The person who is interacting the AI system at the time (such as the driver of a self driving car)",
                nextNode: 7
            },
            {
                text: "The AI itself is responsible for any harm it causes",
                nextNode: 8
            }
        ]
    },
    {
        node: 6,
        text: "For many people this is probably the obvious answer. The developers are the ones who made it, so they should be responsible. For example, some developers may argue that they did not make the decision, the AI did. While technically this could be considered true, many people would not be satisfied with this answer. To answer this question it is important to think more deeply about accountability, and why it is so important. Humans, generally speaking, try to find someone/something to blame, and/or punish, when something goes wrong, but why do we do this? For example, hurting someone because they hurt another, does not lessen the pain of the initial victim. So what exactly is the purpose of punishing the perpetrator?",
        responses: [
            {
                text: "It is important to punish people, because they deserve punishment for committing a wrong-doing.",
                nextNode: 9
            },
            {
                text: "The goal of punishing people is to ensure that they do not commit the crime again",
                nextNode: 10
            },
            {
                text: "I think punishment is wrong, we shouldn't be punishing people",
                nextNode: 11
            }
        ]
    },
    {
        node: 7,
        text: "Having the user accountable to for the AI creates an interesting situation. This is because AI's act semi-autonomously, sometimes even fully autonomously. This means that the user is directly responsible for the decisions the AI makes, but are more tangentially related. In the example of self-driving cars, the issue would lie in the user not doing something, i.e. not intervening before a crash happened. This raises questions regarding the ethics of inaction, is it our fault if we don't do something we could do? The issue here is how far does this idea go, because it could be argued that most of could be doing more. For example, we could spend our free time volunteering or could be donating all of the money that we don't need.",
        responses: [
            {
                text: 'Continue',
                nextNode: 12
            }
        ]
    },
    {
        node: 8,
        text: "Now, this is a very interesting response, and it raises some very interesting questions regarding AI. To some extent it could be argued that AI's could be responsible for their decisions, as technically speaking they did make the decision. There are some interesting arguments on this topic that involve details on how AI works, and intricacies in Irish IP law, but unfortunately, we'll need to stick to the simpler arguments today. I can't keep you here forever after all (If you're interested in this topic you should talk to Clemens, he lives on the south side of the island). The main argument against this is that current AI are not capable of handling any legal repercussions in response to their wrongdoing, such as going to jail or paying a fine.",
        responses: [
            {
                text: 'Continue',
                nextNode: 12
            }
        ]
    },
    {
        node: 9,
        text: "While this does make sense to some extent, this stance can be hard to defend when taken to a deeper level. What exactly does it mean to 'deserve' something? Another argument against this is the perputation of harm. Harming the perpetrator does not take away the pain of the victim, so now it can argued that no one has gained, but the person who harmed the perpetrator also should be punished. Which creates a bit of a paradox. That is not to say this stance is wrong, but its important to think about all the implications of this stance.",
        responses: [
            {
                text: 'Continue',
                nextNode: 12
            }
        ]
    },
    {
        node: 10,
        text: "This is a very reasonable response, and a very popular one for that matter. While in many ways this logic is quite sound, and overall beneficial (hypothetically), there is one main issue with it. Unfortunately, punishment is not a particularly effective in causing people to change. In fact, we have many more effective ways of helping people change, such as counselling.",
        responses: [
            {
                text: "Continue",
                nextNode: 12
            }
        ]
    },
    {
        node: 11,
        text: "In many ways this a good answer, as it means no one gets harmed. Unfortunately, there is a strong theme of punishment across human history. While this stance is arguably morally 'better' there is another important side of this to consider. The truth of ethics is that it can be easy to talk about what ought to be done, but in situations such as Ethics of AI we need to consider what can/will be done. We need to take into account human psychology, just because people ought to do something, doesn't mean they will. This is especially relevant in when thinking about ethical situations that have real world implications.",
        responses: [
            {
                text: "Continue",
                nextNode: 12
            }
        ]
    },
    {
        node: 12,
        text: "Accountability is a rather complicated subject in AI, especially because modern AI's are changing so rapidly. It is very hard to say who exactly is responsible for the decisions made by an AI, and as they get more advanced this will become increasingly difficult. Not to mention hypothetical concepts such as conscious AI, and the implications that would have. For now, I hope you've been able to form your opinion on this topic a bit more. It was great talking to you traveller, I wish you the best!",
        responses: [
            {
                text: "Leave"
            }
        ]
    }
];

export { accountability }