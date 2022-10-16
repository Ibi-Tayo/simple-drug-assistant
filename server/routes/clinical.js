const router = require("express").Router();
const axios = require("axios");

// const configNhs = {
//   headers: {
//     "subscription-key": "fb4b1307f861469d918751d4dccd3cc6", // for NHS app
//   },
// };

const fdaAPIkey = "K080rucVHqBPW8fkFhZn4z7VzThh1VtQo6BIpc9X";

const drug = "melatonin"; // edit this variable for testing

// const url = `https://api.nhs.uk/medicines/${drug}/`;
const fdaUrl = `https://api.fda.gov/drug/ndc.json?api_key=${fdaAPIkey}&search=finished:true+AND+generic_name:${drug}&limit=1`;
const medlineUrl = `https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.69&mainSearchCriteria.v.dn=${drug}&informationRecipient.languageCode.c=en&knowledgeResponseType=application/json`;

async function getFdaInfo() {
  try {
    const response = await axios.get(fdaUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMedlineInfo() {
  try {
    const response = await axios.get(medlineUrl);
    return response.data;
  } catch (error) {
    console.error(error);
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
router.post("/", async function (req, res, next) {
  const drugQuery = req.body.drugQuery;
  const data1 = await getMedlineInfo();
  const data2 = await getFdaInfo();

  if (data1.feed.entry[0] != null) {
    const medlineSummary = data1.feed.entry[0].summary._value;
    drugInformation.drugSummary = medlineSummary;
  }
  if (data2) {
    const fdaName = data2.results[0].generic_name;
    drugInformation.name = fdaName;

    const fdaEPC = data2.results[0].pharm_class;
    drugInformation.drugClass = fdaEPC;
  }

  res.send(drugInformation);
  console.log(drugInformation);
});

module.exports = router;

// const nhsDrugName = data.about.name;
// const nhsOneLineDrugDescription = data.hasPart[0].description;
// const nhsWhatIsIt = data.mainEntityOfPage[0].mainEntityOfPage[0].text;
// const nhsWhatIsItUntagged = nhsWhatIsIt.replace(/<[^>]*>?/gm, "");
// drugInformation.name = nhsDrugName;
