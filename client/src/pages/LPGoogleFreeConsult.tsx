/**
 * LP 1 — Google Search: Free Consultation
 * URL: /marshcove/smilenow/google/free-consultation
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

export default function LPGoogleFreeConsult() {
  const surveyRef = useRef<HTMLDivElement>(null);

  const scrollToSurvey = () => {
    surveyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const SURVEY_ID = SURVEYS.googleFreeConsult;

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
        headline={<>The Most Comfortable, Cost Effective Dental Implant Transformation Ever</>}
        subheadline="If you are living with missing or damaged teeth, you have been through enough. Let us take it from here."
        ctaText="Claim Your Free Consultation"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowIntro
        sectionLabel="Free Consultation"
        headline="The Most Comfortable, Cost Effective Dental Implant Transformation Ever"
        bullets={introBullets}
        surveyId={SURVEY_ID}
        surveyCardTitle="Claim Your FREE Consultation"
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
        headline="Ready to Get Your Life Back?"
        ctaText="Claim Your Free Consultation"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowFooter />
    </div>
  );
}
