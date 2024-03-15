const data_privacy = [
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
        text: "Hi, I'm Alan. I'm an expert in data privacy, I'd love to share some of what I know! In the modern world data has become an extremely valuable resource. Companies can use data in a variety of different ways, often aided by advanced AI’s. An extreme example of this was the Cambridge Analytica scandal in the U.S. Cambridge Analytica was able to get access to a huge amount of data from the popular social media platform Facebook. They were then able to use this data to influence the way people voted in U.S. presidential elections. While this was a rare case, it does exemplify what companies are able to do with people's data in the modern age. AI systems require vast amounts of data to be effective, and this has led to various approaches to data collection. Every time someone visits a website, that site has access to a large amount of data, including information such as IP addresses, which show the user's current location. Various laws exist to protect users and their data, unfortunately, they rely on traditional informed consent methods. Except these methods are not effective in the digital world. Almost every time a user opens a new website they are faced with a prompt regarding their “cookies”, and quite often these pop ups are accompanied with lengthy blocks of text. This has led to many users simply clicking whatever button will make the pop up disappear fastest, disregarding the implications of their choice. Methods such as these allow companies to collect large amounts of data, often without users being fully aware. Companies can then use this data in almost any way they’d like, without direct consent from the owner of said data. This has raised questions regarding what rights people should have in relation to their own data.",
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
        text: "For example, do you think users should be able to contact companies and request for their data to be removed? Sometimes referred to as the 'right to be forgotten'.",
        responses: [
            {
                text: 'Yes, I think users should be able to withdraw their own data',
                correct: null,
                nextNode: 3
            },
            {
                text: "No, I don't think users should be able to retrospectively withdraw their data",
                correct: null,
                nextNode: 4
            },
            {
                text: "I'm not really sure, I haven't quite made up my mind yet",
                correct: null,
                nextNode: 5
            }
        ]
    },
    {
        node: 3,
        text: "Many people would agree with you on that stance. For example, in Psychology it is standard practice to allow study participant to withdraw their data within a certain time frame. However, this does come with some issues. In order for a person's data to be removed, this data needs to tracked. This can lead to issues with anonymizing data. If the data is anonymized immediately upon collection it can be difficult to remove a specific persons data.",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 6
            }
        ]
    },
    {
        node: 4,
        text: "An interesting stance. By not allowing people to withdraw their data, they are effectively forfeiting ownership of their own personal information. This can lead to issues with their data being used in malicious ways, against their will. As demonstrated in the Cambridge Analytica scandal. People's own data may be used to subtly influence, possibly without them even realizing, and without the right to delete this data, there is little they can do to stop this.",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 6
            }
        ]
    },
    {
        node: 5,
        text: "Often it is better to have no opinion, than to have an ill informed opinion. Especially on such complex and ambigious topics as data privacy. Let's look a little bit at the role of data in creating AI.",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 6
            }
        ]
    },
    {
        node: 6,
        text: "Now, let's look a little bit at how data is used in creating AI, as this might inform your stance on modern data rights. As you know, data is a critical part of developing AI's. So-called 'Machine Learning' techniques can analyze this data and then make predictions regarding new data. Let's look at a hypothetical scenario. Say we gave an AI some person medical information from a group people, the AI would be given data on: each persons illnesses, their symptoms, blood type, and ethnicity. What do you think an AI could do with such data?",
        responses: [
            {
                text: "Attempt to diagnose patients based on their current symptoms",
                correct: true,
                nextNode: 7
            },
            {
                text: "Ensure that patients are up to date on their vaccines",
                correct: false,
                nextNode: 8
            },
            {
                text: "Recommend treatment options for patients",
                correct: true,
                nextNode: 9
            }
        ]
    },
    {
        node: 7,
        text: "That's correct! Patient diagnoses is currently a rapidly growing field of AI, and it shows great potential. Some AI's have been used to help diagnose rare diseases that can sometimes take years for human doctors to diagnose. They have also been used to expedite treatment for patients, as AI's can evaluate a large number of patients very quickly.",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 10
            }
        ]
    },
    {
        node: 8,
        text: "Unfortunately, based on the information that we have given this AI it won't be able to do anything regarding patients vaccines. The AI was not given any data on vaccines, and so isn't able to help with that. A common drawback of AI's is their inability to handle novel situations, they are generally unable to do much with data that they haven't seen before.",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 10
            }
        ]
    },
    {
        node: 9,
        text: "Yes, with this data AI's could potentially recommend treatment options for patients. While this is true, it's important to think about the possible issues with this. AI's are never 100% accurate, and will therefore make mistakes sometimes. The issue in this case is that they are making potentially critical recommendations for patients, and if they are wrong, who is help responsible? So while this is technically possible, it's always important to think beyond if something can be done, and think about whether it should be done.",
        responses:[
            {
                text: "Continue",
                correct: null,
                nextNode: 10
            }
        ]
    },
    {
        node: 10,
        text: "I have one last question for you my friend. In this last example we gave our AI four different pieces of information: illnesses, their symptoms, blood type, and ethnicity. Did any of these stand out to you from an ethical perspective?",
        responses: [
            {
                text: "Ethnicity",
                correct: true,
                nextNode: 11
            },
            {
                text: "Illness",
                correct: false,
                nextNode: 12
            },
            {
                text: "Symptoms",
                correct: false,
                nextNode: 12
            },
            {
                text: "Blood Type",
                correct: false,
                nextNode: 12
            }
        ]
    },
    {
        node: 11,
        text: "Well spotted! Including an individuals ethnicity in this dataset is a rather complicated matter. While this information may be relevant for diagnosing a patient, it may result in unintentional discrimination by the AI. But, I won't get in to that with you. My friend, Joseph however, he'd be happy to discuss this with you. Nonetheless, it was a pleasure meeting you my friend. I wish you the best on your journeys, feel free to come back any time!",
        responses: [
            {
                text: "Leave",
                correct: null
            }
        ]
    },
    {
        node: 12,
        text: "While it absolutely could be argued that this data point is ethically concerning, the one I was referring to was ethnicity. By including a persons ethnicity in a dataset for an AI, it is possible that the system will unintentionally exacerbate pre-existing biases. But, I won't get in to that with you. My friend, Joseph however, he'd be happy to discuss this with you. Nonetheless, it was a pleasure meeting you my friend. I wish you the best on your journeys, feel free to come back any time!",
        responses: [
            {
                text: "Leave",
                correct: null
            }
        ]
    }
]

export {data_privacy}