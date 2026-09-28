"use client";

import { useState } from "react";
import { Check, X, Shuffle } from "lucide-react";
import { getQuestionOfTheDay, getRandomQuestion, type QuizQuestion } from "@/data/quiz";

export function ExerciceDuJour() {
  const [question, setQuestion] = useState<QuizQuestion>(() => getQuestionOfTheDay());
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  function handleSelect(i: number) {
    setSelected(i);
    setRevealed(true);
  }

  function handleNext() {
    setQuestion(getRandomQuestion(question.id));
    setSelected(null);
    setRevealed(false);
  }

  const isCorrect = selected !== null && question.options[selected]?.correct;

  return (
    <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">
          🧠 Exercice du jour
        </span>
        <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-foreground-muted">
          {question.level} · {question.theme}
        </span>
      </div>

      <p className="mt-4 text-lg font-medium text-foreground">{question.prompt}</p>

      <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          const showState = revealed && (isSelected || opt.correct);
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => handleSelect(i)}
              className={`flex items-center justify-center gap-2 rounded-md border px-4 py-3 font-mono text-sm font-medium transition-colors ${
                showState && opt.correct
                  ? "border-green-600 bg-green-100 text-green-700 dark:border-green-500 dark:bg-green-950/40 dark:text-green-400"
                  : showState && isSelected
                    ? "border-red-500 bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400"
                    : "border-border text-foreground hover:border-navy-400 dark:hover:border-navy-500"
              }`}
            >
              {showState && opt.correct && <Check className="h-4 w-4" />}
              {showState && isSelected && !opt.correct && <X className="h-4 w-4" />}
              {opt.label}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-5 rounded-md border border-border bg-surface-muted p-4 text-sm leading-relaxed text-foreground-muted">
          <p className={`font-mono text-xs font-semibold ${isCorrect ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {isCorrect ? "✅ Bonne réponse !" : "❌ Essaie encore"}
          </p>
          <p className="mt-2">
            <span className="font-mono font-medium text-foreground">Correction : </span>
            {question.correction}
          </p>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-foreground-muted">
          Chaque leçon contient plusieurs exercices comme celui-ci, avec correction détaillée en un clic.
        </p>
        {revealed && (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-navy-400 dark:hover:border-navy-500"
          >
            <Shuffle className="h-3.5 w-3.5" />
            Un autre exercice →
          </button>
        )}
      </div>
    </div>
  );
}
