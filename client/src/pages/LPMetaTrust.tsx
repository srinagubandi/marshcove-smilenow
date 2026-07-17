/**
 * LP 5 — Meta: Trust + Experience
 * URL: /marshcove/smilenow/meta/trust-experience
 * Survey: jT3Ik2Cp2pTsEF6tXVGb
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

export default function LPMetaTrust() {
  const surveyRef = useRef<HTMLDivElement>(null);

  const scrollToSurvey = () => {
    surveyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const SURVEY_ID = SURVEYS.metaTrust;

  const introBullets = [
    "5-star rated by hundreds of Naples and Fort Myers patients",
    "ICOI Fellow — International Congress of Oral Implantologists",
    "University of Florida College of Dentistry trained",
    "2,000+ successful implant procedures",
    "Husband-and-wife team with a patient-first philosophy",
    "99% implant success rate",
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <SmileNowNav onCtaClick={scrollToSurvey} />

      <SmileNowHero
        headline={<>Naples and Fort Myers Most Trusted Dental Implant Specialists</>}
        subheadline="Dr. Eugene and Dr. Olga Titov have transformed thousands of smiles. See why patients choose Marsh Cove Dental for life-changing results."
        ctaText="Book My Free Consultation"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowIntro
        sectionLabel="Trust and Experience"
        headline="Naples and Fort Myers Most Trusted Dental Implant Specialists"
        bullets={introBullets}
        surveyId={SURVEY_ID}
        surveyCardTitle="Book Your FREE Consultation"
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
        headline="Join Thousands of Patients Who Trust Marsh Cove Dental"
        ctaText="Book My Free Consultation"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowFooter />
    </div>
  );
}
