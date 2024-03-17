const data_xai = [
    {
        //requirements
        ethics_requirement: 0,
        explainability_requirement: 0,
        data_requirement: 0,
        //rewards
        ethics_reward: 0,
        explainability_reward: 80,
        data_reward: 0,
        //other
        interaction_complete: false
    },
    {
        node: 1, // intro
        text: "Greetings, data enthusiasts! I'm Kaz, and I'm here to unveil the fascinating world of Explainable AI, or XAI for short. Artificial intelligence is making incredible strides, but sometimes these powerful models can feel like black boxes. XAI is our key to unlocking the secrets behind these AI decisions.  Are you ready to peek under the hood and understand how AI makes its choices? Let's embark on this journey together!",
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
        text: "Let's dive into Explainable AI (XAI)! Imagine you built an AI system to analyze loan applications. It works great for most cases, but you're curious about borderline applications - why might the AI approve or reject them? This is where LIME (Local Interpretable Model-agnostic Explanations) comes in. How do you think LIME could help us understand the AI's decision-making process for these borderline loan applications?",
        responses: [
          {
            text: "LIME requires retraining the entire AI model, making it too time-consuming.",
            correct: false,
            nextNode: 3
          },
          {
            text: "LIME can only be used with simple AI models and wouldn't work for complex loan approval systems.",
            correct: false,
            nextNode: 4
          },
          {
            text: "LIME analyses individual loan applications and highlights the factors most influential in the AI's decision, providing insights into borderline cases.",
            correct: true,
            nextNode: 5
          }
        ]
    },
    { // debrief of 1
        node: 3,
        text: "LIME is actually quite efficient! It works by creating a simpler model to explain a specific prediction from the original AI model. This doesn't require retraining the entire complex model, making it a faster and more focused approach.",
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
        text: "LIME is a versatile tool! While complexity can affect how LIME is applied, it can work with various AI models, including those used for loan approvals.  LIME helps us understand the key factors influencing the AI's decisions, even for complex systems.",
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
        text: "You're on the right track! LIME excels at analyzing individual cases.  Imagine a loan application on the borderline of approval. LIME can examine this specific application and highlight the factors that most influenced the AI's decision (positive or negative). This sheds light on why the AI approved or rejected the loan and helps you understand its reasoning for borderline cases.",
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
        text: "Let's explore another XAI technique!  Imagine you're building a spam filter AI for a new email service. It catches most spam, but some important emails sneak through as false positives. How do you think G-REX (Genetic Rule Extraction System) could help improve the Explainability (XAI) of your spam filter?",
        responses: [
            {
                text: "G-REX requires a complete redesign of the spam filter AI, making it impractical.",
                correct: false,
                nextNode: 7
            },
            {
                text: "G-REX can analyse the spam filter's decisions and extract symbolic rules that explain why certain emails are flagged as spam. This helps identify potential biases or misunderstandings in the AI's logic.",
                correct: true,
                nextNode: 8
            },
            {
                text: "G-REX is a separate spam filtering system and wouldn't work for improving the existing AI.",
                correct: false,
                nextNode: 9
            }
        ]
    },
    { // debrief of 2
        node: 7,
        text: "Not quite! G-REX works alongside your existing AI,  like a detective examining the AI's reasoning.  It doesn't require a complete overhaul, making it a practical solution.",
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
        text: "You've got it! G-REX is a powerful tool for XAI (Explainable AI). Imagine a mysterious email flagged as spam –  G-REX analyzes the AI's decision and extracts clear rules.  These rules might reveal the AI flags emails with a specific combination of words or formatting, even if they're legitimate.  By understanding the AI's logic behind spam classification, G-REX helps identify potential biases or misunderstandings, allowing you to refine the filter and reduce false positives.",
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
        text: "G-REX works within the AI system! It doesn't create a separate filter.  Think of it as a tool to unlock the 'black box' of the AI and understand its decision-making process for spam filtering.",
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
        text: "Let's delve deeper into XAI! Imagine you're building a movie recommendation AI. It analyzes users' watch history, but you want to ensure recommendations are diverse and go beyond just popular genres a user has already seen. How do you think SHAP (SHapley Additive exPlanations) could help you understand the factors influencing the AI's movie recommendations and promote diversity in suggestions?",
        responses: [
            {
                text: "SHAP can calculate SHAP values for each movie feature (genre, director, actors) considered by the AI. Analysing these values can reveal if the AI prioritises popular genres too heavily, allowing you to adjust the recommendation algorithm for more diverse.",
                correct: true,
                nextNode: 11
            },
            {
                text: "SHAP requires users to manually input their movie preferences, making it cumbersome.",
                correct: false,
                nextNode: 12
            },
            {
                text: "SHAP is only for image recognition AI and wouldn't be useful for movie recommendations.",
                correct: false,
                nextNode: 13
            }
        ]
    },
    { //debrief of 3
        node: 11,
        text: "You're on the right track! SHAP excels at explaining AI decisions. In your movie recommendation system, SHAP can analyze each movie feature the AI considers (genre, director, actors, etc.). By calculating SHAP values, you can see how much influence each feature has on a particular recommendation. If genres a user has already watched consistently have high SHAP values, it might indicate the AI prioritizes popular genres too heavily. This insight allows you to adjust the recommendation algorithm to consider other factors and promote a more diverse movie selection.",
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
        text: "SHAP is user-friendly! It doesn't require manual input of preferences.  SHAP works with the data the AI already uses, like a user's watch history, to explain the AI's decision-making process.",
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
        text: "SHAP is a versatile tool! While it's often used for image recognition, it can be applied to various AI models, including those used for movie recommendations. SHAP helps you understand the factors influencing the AI's movie suggestions,  allowing you to promote a wider range of movie choices.",
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
        text: "Great job exploring XAI techniques! Now, let's test your data detective skills. Imagine you're researching a historical event online. You find two websites: Website A: Presents a clear, well-sourced explanation with citations. Website B: Offers a more sensationalized story without clear sources. Both websites offer AI chatbots to answer your follow-up questions. How can you determine which AI chatbot is likely to provide more reliable information?",
        responses: [
            {
                text: "Focus on the website content - the one with the clearer explanation is more reliable, so its chatbot must be too.",
                correct: false,
                nextNode: 15
            },
            {
                text: "Ask the chatbot its opinion on the event. A more objective response suggests reliability.",
                correct: false,
                nextNode: 16
            },
            {
                text: "Ask the chatbot to explain its sources for the information it provides.",
                correct: true,
                nextNode: 17
            }
        ]
    },
    { // debrief of 4
        node: 15,
        text: "That's a good initial thought!  The website with clear explanations likely used reliable sources.  However, the chatbot on that website might not necessarily inherit the same quality.  It's crucial to evaluate the chatbot itself to ensure it can provide accurate information.",
        responses: [
            {
                text: "Leave",
                correct: null
            }
        ]
    },
    {
        node: 16,
        text: "Interesting strategy, but opinions can be subjective.  For historical events, factual accuracy is key.  By asking about sources, you can assess the chatbot's access to reliable information and its transparency in providing it.",
        responses: [
            {
                text: "Leave",
                correct: null
            }
        ]
    },
    {
        node: 17,
        text: "Spot on!  The website content provides clues, but the chatbot might be independent.  Asking the chatbot directly about its sources is the best way to gauge its reliability.  If it can cite credible sources for its information, that's a strong indicator of trustworthiness.",
        responses:[
            {
                text: "Leave",
                correct: null
            }
        ]
    }
]

export {data_xai}