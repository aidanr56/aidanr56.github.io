const data_literacy = [
    {
        //requirements
        ethics_requirement: 0,
        explainability_requirement: 0,
        data_requirement: 0,
        //rewards
        ethics_reward: 0,
        explainability_reward: 0,
        data_reward: 80,
        //other
        interaction_complete: false
    },
    {
        node: 1, // intro
        text: "Hey there! I'm Beck, your guide to the exciting world of data literacy. In today's digital age, information is everywhere, but can you always trust what you see? Data literacy is your superpower to navigate this information overload. It's about understanding how data is collected, analyzed, and used. Ready to unlock your data detective skills and become a master of information?",
        responses: [
            {
                text: 'Continue',

                correct: null,
                nextNode: 2
            }
        ]
    },
    {
        node: 2, //question 1
        text: "So AI is pretty cool, right? Imagine you're working on a new fitness app that recommends personalised workout routines. This app uses a type of AI called a Deep Neural Network (DNN) to analyse user data and suggest exercises. How do you think a DNN typically learns and makes predictions?",
        responses: [
          {
            text: "It analyses all user data at once to identify patterns.",
            correct: false,
            nextNode: 3
          },
          {
            text: "It processes data through multiple interconnected layers, learning from examples to improve its accuracy.",
            correct: true,
            nextNode: 4
          },
          {
            text: "It requires a human expert to program the specific workout routines for each user.",
            correct: false,
            nextNode: 5
          }
        ]
    },
    { // debrief of 1
        node: 3,
        text: "Not quite. While DNNs can analyze large amounts of data, they don't simply analyze everything at once.",
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
        text: "Exactly! Deep Neural Networks (DNNs) are powerful because of their layered structure. Imagine each layer as a step in the learning process.",
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
        text: "That's not quite how DNNs work. While human experts might design the overall framework of the app, the DNN learns to personalize workouts based on the data it receives.",
        responses: [
          {
            text: "Continue",
            correct: null,
            nextNode: 6
          }
        ]
    },
    { // question 2
        node: 6,
        text: "AI systems are built using a field called data science. Imagine a giant pot of information, like all the reviews on a movie website. Data scientists clean and organise that information, then use it to train AI to recognise patterns. The better quality and quantity of data the AI has, the better it gets at making predictions.What do you think is MOST important for an AI system to learn effectively?",
        responses: [
            {
                text: "Well-organised and relevant data for the specific task.",
                correct: true,
                nextNode: 7
            },
            {
                text: "The amount of data, regardless of its quality.",
                correct: false,
                nextNode: 8
            },
            {
                text: "The opinions of human experts on the topic.",
                correct: false,
                nextNode: 9
            }
        ]
    },
    { // debrief of 2
        node: 7,
        text: "Clean data is key!  Just like you learn best with clear instructions, AI needs well-organized data relevant to its task. This helps it recognize patterns and make accurate predictions.",
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
        text: "More data isn't always better!  Imagine learning a language with random words. AI works best with focused, high-quality data for the specific task.",
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
        text: "Experts help, but data teaches!  While human input is valuable, AI learns from patterns in data. This data, along with expert guidance, helps AI systems truly shine.",
        responses: [
          {
            text: "Continue",
            correct: null,
            nextNode: 10
          }
        ]
    },
    { // question 3
        node: 10,
        text: "Now, you may be aware that social media platforms use a ton of data about your activity to personalise your experience. But data doesn't always appear magically! Let's say you want to investigate music streaming habits across different age groups (teenagers vs. adults).Now imaage you need a large, objective dataset on music listening habits to compare age groups. Which data collection method would be MOST beneficial?",
        responses: [
            {
                text: "Conduct surveys asking people their favourite music genres.",
                correct: false,
                nextNode: 11
            },
            {
                text: "Analyse follower demographics of popular music artists on social media.",
                correct: false,
                nextNode: 12
            },
            {
                text: "Scrape data from music streaming platforms (following their terms of service).",
                correct: true,
                nextNode: 13
            }
        ]
    },
    { //debrief of 3
        node: 11,
        text: "Surveys can be a good way to gather information, but they rely on self-reported data. People might forget what they listen to or give answers that aren't entirely accurate. For a large, objective dataset, scraping data directly from music streaming platforms can be more reliable (as long as you follow their terms of service, of course!).",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 14
            }
        ]
    },
    {
        node: 12,
        text: "Analysing follower demographics can give some insights, but it's not very precise.  Someone might follow an artist for various reasons, not just because they like their music.  For a more accurate picture of music listening habits across age groups, you'd ideally want data on what people are actually listening to.",
        responses: [
            {
                text: "Continue",
                correct: null,
                nextNode: 14
            }
        ]
    },
    {
        node: 13,
        text: "This is a great choice! Scraping data from music streaming platforms allows you to collect a large amount of objective data on actual listening habits. By following the platform's terms of service, you ensure you're ethically accessing the data and respecting user privacy.",
        responses:[
            {
                text: "Continue",
                correct: null,
                nextNode: 14
            }
        ]
    },
    { // question 4
        node: 14,
        text: "And finally, imagine you're a data journalist investigating the energy consumption of different household appliances. You've collected data on the average hourly energy usage of various appliances. How could you best visualise this data to effectively communicate your findings to a general audience?",
        responses: [
            {
                text: "Create a complex scatter plot with appliance type on the X-axis and energy usage on the Y-axis.",
                correct: false,
                nextNode: 15
            },
            {
                text: "Develop a bar chart with each bar representing an appliance type and the bar height proportional to its average hourly energy usage.",
                correct: true,
                nextNode: 16
            },
            {
                text: "Write a detailed text report explaining the energy usage of each appliance.",
                correct: false,
                nextNode: 17
            }
        ]
    },
    { // debrief of 4
        node: 15,
        text: "Scatter plots can be tough.  While scatter plots can show trends, they might be confusing for a general audience.  For straightforward comparisons, a bar chart is more effective.",
        responses: [
            {
                text: "Leave",
                correct: null
            }
        ]
    },
    {
        node: 16,
        text: "Bar chart power!  A bar chart with appliance types on the X-axis and bar heights showing energy usage is easy to understand. People can quickly compare energy use between appliances at a glance",
        responses: [
            {
                text: "Leave",
                correct: null
            }
        ]
    },
    {
        node: 17,
        text: "Text reports have their place, but visuals engage!  Data visualizations like bar charts can make complex information easier to digest for a general audience.",
        responses:[
            {
                text: "Leave",
                correct: null
            }
        ]
    }
]

export {data_literacy}