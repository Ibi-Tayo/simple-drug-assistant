# MARC. - Medicines assistant and resource companion

This is an application that experiments / makes use of artificial intelligence (GPT-3) that has been trained extensively by deep learning to provide basic information about a given medicine.

## Technologies used

-   React 17
-   Node JS / Express 4
-   MongoDB / Mongoose
-   Passport

![WebAppArchitecture](/demo/architecture.png)

## Functionality

Firstly, the user can choose to **login** using either their GitHub account or they can create an account with a username and password.

Then, the main functionality is to prompt the AI to provide information about medication. This can obviously get very very detailed such as requesting for the chemical structure of a drug, pharmacodynamics, absorption, distribution, metabolism etc.. However, this app was made to target a more simple 'patient focused' approach. Therefore, I decided to just limit to:

1. Drug summary (what does this drug do)
2. Pharmacological class (what kind of drug is it)
3. Mechanism of action (how does this drug work)
4. Side effects (how could it affect someone adversely)

![AppDemo](/demo/demo1.png)

## Demo

Demo can be accessed here -->

## Further thoughts

More about the AI --> what its really doing, why its cool and how it can be fine-tuned to be much much better. does it have a place in health care?

Introspection --> things i would change/improve next time, things i learnt. (look at code, look at folder structure)
e.g. looking at how the code is structured, the components could be improved so that some of them are actually reusable.
For example, the input component has a lot of specific functionality to getting drug data.
