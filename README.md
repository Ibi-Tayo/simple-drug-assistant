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
![login](/demo/authentication.png)

Then, the main functionality is to prompt the AI to provide information about medication.
![search](/demo/search.png)

This can obviously get very very detailed such as requesting for the chemical structure of a drug, pharmacodynamics, absorption, distribution, metabolism etc.. However, this app was made to target a more simple 'patient focused' approach. Therefore, I decided to just limit to:

1. Drug summary (what does this drug do)
2. Pharmacological class (what kind of drug is it)
3. Mechanism of action (how does this drug work)
4. Side effects (how could it affect someone adversely)

![AppDemo](/demo/demo1.png)

## Demo


what the website looks like (not fully functioning) (deployed to vercel)
https://simple-drug-assistant-marc-abqyt5owq-ibitayo95.vercel.app/
