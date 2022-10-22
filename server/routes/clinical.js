const router = require("express").Router();
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const fdaAPIkey = process.env.FDA_API_KEY;

async function doesDrugExistInFda(fdaUrl) {
  try {
    const response = await axios.get(fdaUrl);
    return response.status;
  } catch (error) {
    return error.response.status;
  }
}

const drugInformation = {
  name: "",
  drugClass: "",
  drugSummary: "",
  sideEffects: "",
  MOA: "",
};

// get drug info from medline and fda and use this to update drugInfo object
router.get("/", async function (req, res, next) {
  const drugQuery = req.query.drugQuery;
  const fdaUrl = `https://api.fda.gov/drug/ndc.json?api_key=${fdaAPIkey}&search=finished:true+AND+generic_name:${drugQuery}&limit=1`;
  console.log(drugQuery);

  const status = await doesDrugExistInFda(fdaUrl);

  if (status === 200) {
    console.log("ok lets do something with this drug");
    drugInformation.name = drugQuery;

    // ****************************************

    const drugClassRes = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: What Pharmacological class does ${drugQuery} belong to?\n`,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    drugInformation.drugClass = drugClassRes.data.choices[0].text;

    // ****************************************

    const drugSummaryRes = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: What medical conditions can ${drugQuery} be used for?\n`,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    drugInformation.drugSummary = drugSummaryRes.data.choices[0].text;

    // ****************************************

    const drugSideEffectsRes = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: What side effects can occur when taking ${drugQuery}?\n`,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    drugInformation.sideEffects = drugSideEffectsRes.data.choices[0].text;

    // ****************************************

    const drugMoaRes = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: What is the mechanism of action of ${drugQuery}?\n`,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    drugInformation.MOA = drugMoaRes.data.choices[0].text;

    // ****************************************

    res.send(drugInformation);
  } else {
    res.status(404).send({ error: "this drug doesnt exist in our database" });
  }
});

module.exports = router;
