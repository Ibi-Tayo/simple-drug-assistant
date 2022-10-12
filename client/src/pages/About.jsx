import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h2>About Drugs for dummies</h2>
      <hr />

      <p> 'Omeprazole?, 'Digoxin?', Pardon? ... </p>
      <p>
        Medications have really complicated names. There are loads of them.
        Inspired by 'Simple English Wikipedia', This is an app that is for
        helping people have a better understanding of drugs and what they do.
        The aim is that for anyone who searches for a drug to recieve
        uncomplicated but accurate and detailed information about it. This is
        achieved by combining clinical data with artificial intelligence trained
        by deep-learning to convert the mumbo-jumbo you find on the internet
        into something that makes more sense to you. This is a proof of concept
        and is <strong>NOT for actual clinical advice.</strong>
      </p>
      <p> Made with care by a pharmacist from london ❤️ </p>
    </div>
  );
}
