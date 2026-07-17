/**
 * LP 4 — Meta: Symptomatic / Same-Day Implants
 * URL: /marshcove/smilenow/meta/same-day-implants
 * Survey: z2Fo0JJOtLK5R7HD5GM5
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

export default function LPMetaSameDay() {
  const surveyRef = useRef<HTMLDivElement>(null);

  const scrollToSurvey = () => {
    surveyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const SURVEY_ID = SURVEYS.metaSameDay;

  const introBullets = [
    "Walk in with failing teeth, leave with a full smile the same day",
    "Advanced 3D imaging for precise implant placement",
    "Full zirconia or PMMA bridge placed same day",
    "4 to 6 implants for a secure, permanent foundation",
    "No more loose dentures or painful extractions",
    "99% implant success rate",
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <SmileNowNav onCtaClick={scrollToSurvey} />

      <SmileNowHero
        headline={<>Walk In With Failing Teeth. Leave With a Full Smile. Same Day.</>}
        subheadline="Stop suffering with loose, painful, or missing teeth. Our same-day implant procedure changes everything."
        ctaText="Find Out If I Qualify"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowIntro
        sectionLabel="Same-Day Implants"
        headline="Walk In With Failing Teeth. Leave With a Full Smile. Same Day."
        bullets={introBullets}
        surveyId={SURVEY_ID}
        surveyCardTitle="Find Out If You Qualify"
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
        headline="Your New Smile Could Be Ready Today"
        ctaText="Find Out If I Qualify"
        onCtaClick={scrollToSurvey}
      />

      <SmileNowFooter />
    </div>
  );
}
