import React from "react";
import Section from "@/app/components/Section";
import imageLaptop from "../images/laptop.jpg";
import Blockquote from "@/app/components/Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the discovery phase, we develop a comprehensive roadmap for each project and start working towards delivery. Our agile methodology ensures flexibility and continuous progress.
        </p>
        <p>
          Each client is assigned a dedicated project manager to keep lines of communication open and provide regular updates on project progress. They act as a bridge between your team and our developers.
        </p>
        <p>
          We prioritize clear and timely communication. Our project managers ensure that your questions are answered promptly and that you are always aware of the latest developments.
        </p>
      </div>
      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        The Built X team was incredible. Their regular progress updates and transparent process made us feel like a true partner in our own success.
      </Blockquote>
    </Section>
  );
};

export default Build;
