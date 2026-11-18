import { useState } from "react";
import RetroWindow from "../components/RetroWindow";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const questions = [
  {
    question: "If we were stuck together on a rainy couch with zero distractions for the entire weekend, what's the ratio of movie-watching to making out?",
    options: [
      "50% movies, 50% kissing (with a lot of snacks in between).",
      "10% movies just playing in the background while we ignore them completely.",
      "Let's be real, the TV wouldn't even get turned on."
    ]
  },
  {
    question: "If I told you that you could only use your hands in one spot on my body for the next 10 minutes, where are you going straight to?",
    options: [
      "Tracing up my waist and holding my hips close.",
      "Tangling your fingers in my hair while pulling me in.",
      "Running them slowly down my back until I'm shivering."
    ]
  },
  {
    question: "Be honest: do you like it better when I take full control and tell you exactly what to do, or when you get to take the lead?",
    options: [
      "I love watching you take charge and run the show.",
      "I want to take control and leave you speechless.",
      "A 50/50 split — let's see who breaks first."
    ]
  },
  {
    question: "Multiple choice, no lying: when you're trying to fall asleep at night and thinking about me, what scenario plays out in your head first?",
    options: [
      "Just holding you close and falling asleep wrapped up together.",
      "Replaying every little detail of the last time we were intimate.",
      "Daydreaming about all the things we haven't done yet, but definitely will."
    ]
  },
  {
    question: "What drives you crazy the most when we're alone together?",
    options: [
      "The way your breathing changes when I get close to your ear.",
      "Hearing you whisper my name when you lose your patience.",
      "Those little quiet sounds you try to hold back."
    ]
  },
  {
    question: "If you were allowed to leave one visible reminder on me tomorrow that I have to hide from the world, where are you putting it?",
    options: [
      "Right on the side of your neck where everyone can see.",
      "Somewhere hidden right below your collarbone just for us.",
      "On your hip so it's our little secret under your clothes."
    ]
  },
  {
    question: "What kind of energy are we bringing to the bedroom next time?",
    options: [
      "Slow, agonizingly sweet, and making every single touch last.",
      "Passionate, intense, and completely caught up in each other.",
      "Starting slow and sweet until someone completely snaps."
    ]
  },
  {
    question: "Which specific memory of us replays in your head the most when you're trying to sleep?",
    options: [
      "The exact look in your eyes right before we kissed.",
      "How tight you held onto me when we couldn't get close enough.",
      "That one time we barely managed to keep quiet."
    ]
  }
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [finished, setFinished] = useState(false);
  const question = questions[current];
  const selected = answers[current];
  const answeredCount = answers.filter((answer) => answer !== -1).length;

  const choose = (optionIndex: number) => {
    setAnswers((previous) => previous.map((value, index) => index === current ? optionIndex : value));
  };

  const restart = () => {
    setAnswers(Array(questions.length).fill(-1));
    setCurrent(0);
    setFinished(false);
  };

  return (
    <section className="section" id="quiz">
      <div className="section-heading">
        <span>03 / PAHAD'S MANDATORY INTERROGATION</span>
        <h2>THE BOYFRIEND QUIZ</h2>
        <p>HONEST ANSWERS ONLY. PAHAD IS WATCHING. 👀</p>
      </div>
      <RetroWindow title="betu_interrogation.exe">
        <div className="quiz-content">
          {!finished ? (
            <>
              <div className="quiz-topline">
                <span className="question-number">QUESTION {String(current + 1).padStart(2, "0")} / 08</span>
                <span className="question-number">{answeredCount}/8 ANSWERED</span>
              </div>
              <div className="quiz-progress"><div style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div>
              <h3 className="quiz-question">{question.question}</h3>
              <div className="quiz-options">
                {question.options.map((option, index) => (
                  <button key={option} className={`quiz-option ${selected === index ? "selected" : ""}`}
                    onClick={() => choose(index)} aria-pressed={selected === index}>
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    <span>{option}</span>
                    {selected === index && <Heart size={17} fill="currentColor" />}
                  </button>
                ))}
              </div>
              <div className="quiz-navigation">
                <button className="quiz-nav-button" onClick={() => setCurrent((value) => Math.max(0, value - 1))} disabled={current === 0}>
                  <ChevronLeft size={16} /> PREVIOUS
                </button>
                <button className="quiz-nav-button next" onClick={() => current < 7 ? setCurrent((value) => value + 1) : setFinished(true)} disabled={selected === -1}>
                  {current === 7 ? "FINISH" : "NEXT"} <ChevronRight size={16} />
                </button>
              </div>
              {selected === -1 && <p className="quiz-hint">Pahad requires an answer before you proceed. No escaping, Betu.</p>}
            </>
          ) : (
            <div className="quiz-finished">
              <div className="finished-heart">💗</div>
              <h3>INTERROGATION COMPLETE!</h3>
              <p>Betu has answered {answeredCount} out of 8 extremely important questions.</p>
              <p className="quiz-verdict">FINAL VERDICT: STILL PAHAD'S PROBLEM. STILL PAHAD'S FAVOURITE. ♡</p>
              <button className="pixel-button" onClick={restart}>RETAKE THE TEST</button>
            </div>
          )}
        </div>
      </RetroWindow>
    </section>
  );
}