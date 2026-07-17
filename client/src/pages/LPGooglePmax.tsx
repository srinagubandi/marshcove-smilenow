/**
 * LP 2 — Google PMAX
 * URL: /marshcove/smilenow/google/pmax
 * Survey: mKWOx0AwEPzswPS0x7mn
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

export default function LPGooglePmax() {
  const surveyRef = useRef<HTMLDivElement>(null);

  const scrollToSurvey = () => {
    surveyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const SURVEY_ID = SURVEYS.googlePmax;

  const introBullets = [
    "Advanced technology for perfect implant placement",
    "Full zirconia bridge",
    "4 to 6 high quality dental implants",
    "Digitally designed to ensure natural beauty",
    "Engineered for maximum stability and longevity",
    "Teeth delivered within 24 hours",
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <SmileNowNav onCtaClick={scrollToSurvey} />

      <SmileNowHero
        headline={<>A Permanent Smile That Lasts a Lifetime</>}
        subheadline="Stop hiding your smile. Marsh Cove Dental specializes in full-arch dental implants for Naples and Fort Myers residents."
        ctaText="See If You Qualify — Free"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowIntro
        sectionLabel="Dental Implants"
        headline="A Permanent Smile That Lasts a Lifetime"
        bullets={introBullets}
        surveyId={SURVEY_ID}
        surveyCardTitle="See If You Qualify — Free"
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
        headline="Take the First Step Toward a Permanent Smile"
        ctaText="See If You Qualify — Free"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowFooter />
    </div>
  );
}
