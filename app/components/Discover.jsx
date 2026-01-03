import React from "react";
import Section from "@/app/components/Section";
import imageWhiteboard from "../images/whiteboard.jpg";
import { TagList, TagListItem } from "@/app/components/TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
          what makes their business tick.
        </p>
        <p>
          Our discovery process involves deep-dives into your brand, market, and
          audience. We conduct comprehensive research to identify opportunities
          and challenges, ensuring our strategy is built on a solid foundation
          of
          <strong className="font-semibold text-neutral-950">business</strong>
          intelligence.
        </p>
        <p>
          Once our audit is complete, we report back with a comprehensive
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          more importantly, a clear roadmap for success.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Market analysis</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Strategy workshops</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
