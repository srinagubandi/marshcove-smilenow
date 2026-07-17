/**
 * LP 3 — Meta: Affordable Implants / Price Focused
 * URL: /marshcove/smilenow/meta/affordable-implants
 * Survey: IxOrkIagtZmPfIDvTvnx
 */

import { useRef } from "react";
import {
  SmileNowNav,
  SmileNowHero,
  SmileNowIntro,
  SmileNowLifeTransformed,
  SmileNowCandidacy,
  SmileNowTreatmentOptions,
  SmileNowBeforeAfter,
  SmileNowDoctor,
  SmileNowReviews,
  SmileNowHowToStart,
  SmileNowFAQ,
  SmileNowFinalCTA,
  SmileNowFooter,
  SURVEYS,
} from "../components/SmileNowComponents";

export default function LPMetaAffordable() {
  const surveyRef = useRef<HTMLDivElement>(null);

  const scrollToSurvey = () => {
    surveyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const SURVEY_ID = SURVEYS.metaAffordable;

  const introBullets = [
    "$0 down financing available",
    "Low monthly payment options",
    "Full zirconia bridge included",
    "4 to 6 high quality dental implants",
    "Teeth delivered within 24 hours",
    "5-Year warranty on full-arch treatments",
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <SmileNowNav onCtaClick={scrollToSurvey} />

      <SmileNowHero
        headline={<>Affordable Dental Implants With $0 Down Financing</>}
        subheadline="Get a permanent, beautiful smile without the financial stress. Flexible payment plans available for Naples and Fort Myers residents."
        ctaText="See My Financing Options"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowIntro
        sectionLabel="Affordable Implants"
        headline="Affordable Dental Implants With $0 Down Financing"
        bullets={introBullets}
        surveyId={SURVEY_ID}
        surveyCardTitle="See Your Financing Options"
        surveyCardSubtitle="Takes less than 60 seconds — Naples & Fort Myers, FL"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowLifeTransformed onCtaClick={scrollToSurvey} />
      <SmileNowCandidacy onCtaClick={scrollToSurvey} />
      <SmileNowTreatmentOptions onCtaClick={scrollToSurvey} />
      <SmileNowBeforeAfter onCtaClick={scrollToSurvey} />
      <SmileNowDoctor onCtaClick={scrollToSurvey} />
      <SmileNowReviews />

      <div ref={surveyRef}>
        <SmileNowHowToStart surveyId={SURVEY_ID} onCtaClick={scrollToSurvey} />
      </div>

      <SmileNowFAQ />

      <SmileNowFinalCTA
        headline="A Permanent Smile Is More Affordable Than You Think"
        ctaText="See My Financing Options"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowFooter />
    </div>
  );
}
