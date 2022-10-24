import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h2>MARC - Medication Assistant and Reference Companion</h2>
      <hr />

      <p> 'Omeprazole?, 'Digoxin?', What? ... </p>
      <p>
        Introducing MARC, your new AI-powered drug expert! MARC is supercharged
        by the latest in deep-learning technology (GPT-3), and he has graciously
        decided to share his vast knowledge of pharmaceuticals with us mere
        mortals. MARC can only comment on drugs approved by the FDA, but don't
        worry, he knows a lot about them. If there's something he doesn't know,
        he'll just say 'unknown' - but that's pretty unlikely. (He's been doing
        a lot of reading).
      </p>

      <p>
        Disclaimer 1: I did not create the AI model, MARC purely harnesses this
        model's power, credit goes to OpenAI.{" "}
      </p>
      <p>
        Disclaimer 2: As a Pharmacist, I wouldn't really go to MARC for clinical
        advice and therefore you shouldn't either. He's just not ... fine-tuned
        with sources that I trust.
      </p>
      <p>Created by Ibi. ☻ </p>
    </div>
  );
}
