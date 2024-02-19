const npc_1_data = {
    "num_questions" : 2,
    "text_1" : "As you know, AI’s are often trained using large data sets. Often, with millions of different data points being passed into the AI’s algorithm. The AI will then mathematically interpret this data, and look for patterns. Let’s look at an example of how this works. In Year— we saw that as ice cream sales rose, so did the occurrence of shark attacks. Imagine you are an AI, and were trained based on this information. Your job is to predict the likelihood of a shark attack. At the same time the local ice cream shop releases a new flavor, and ice cream sales spike. What might you predict regarding shark attacks?",
    "question_1" : ["Shark attacks will increase.", "Shark attacks will decrease.", "There will be no change in shark attacks."],
    "question_1_Correct" : "That's Correct",
    "question_1_Incorrect" : "That is Wrong",

    "text_2" : "Due to the limited data on which the AI was trained, it would expect shark attacks to increase. However, we know that the increase in shark attacks was not caused by the change in ice cream sales. Based on this, what ethical concerns does this raise for AI?",
    "question_2" : ["They can easily be misled by the data they are trained on.", "AI’s are good at making accurate predictions, regardless of the quality of the training data.", "The data used to train AI’s is not an ethical concern, the accuracy of AI is not an ethical issue."],
    "question_2_Correct" : "That's Correct",
    "question_2_Incorrect" : "That is Wrong",
}

export { npc_1_data }