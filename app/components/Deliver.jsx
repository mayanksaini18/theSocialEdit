import React from "react";
import Section from "@/app/components/Section";
import imageMeeting from "../images/meeting.jpg";
import List, { ListItem } from "@/app/components/List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach the launch date, we are meticulous about quality assurance and final adjustments to meet your
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>
          . Our goal is a seamless and successful deployment.
        </p>
        <p>
          We believe in iterative development and continuous
          <strong className="font-semibold text-neutral-950">progress</strong>. Our team works diligently throughout the project lifecycle to ensure a high-quality product, not just at the last minute.
        </p>
        <p>
          We ensure that all aspects of the project are
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>
          at launch. Post-launch, we offer comprehensive
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>
          and support plans to ensure your continued success.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects undergo rigorous testing across multiple devices and browsers to ensure a flawless user experience.
        </ListItem>
        <ListItem title="Infrastructure">
          We deploy on scalable, secure, and reliable infrastructure to ensure your application is always available and performant.
        </ListItem>
        <ListItem title="Support">
          Our team provides ongoing support and maintenance to handle updates, security, and any new challenges that arise.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
