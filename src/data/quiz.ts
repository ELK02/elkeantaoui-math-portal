export interface QuizOption {
  label: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: string;
  level: string;
  theme: string;
  prompt: string;
  options: QuizOption[];
  correction: string;
}

/** Banque de questions pour "Exercice du jour" (accueil). Une question tirée par jour. */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "relatifs-1",
    level: "1AC",
    theme: "Nombres relatifs",
    prompt: "Calculer : (−7) + 5",
    options: [
      { label: "−2", correct: true },
      { label: "2", correct: false },
      { label: "−12", correct: false },
    ],
    correction: "(−7) + 5 : on garde le signe du plus grand en valeur absolue → −(7 − 5) = −2.",
  },
  {
    id: "fractions-1",
    level: "1AC",
    theme: "Fractions",
    prompt: "Simplifier la fraction 12/18",
    options: [
      { label: "2/3", correct: true },
      { label: "3/4", correct: false },
      { label: "6/9", correct: false },
    ],
    correction: "PGCD(12, 18) = 6, donc 12/18 = (12÷6)/(18÷6) = 2/3.",
  },
  {
    id: "puissance-1",
    level: "2AC",
    theme: "Puissances",
    prompt: "Calculer : 2³ × 2²",
    options: [
      { label: "2⁵ = 32", correct: true },
      { label: "2⁶ = 64", correct: false },
      { label: "4⁵", correct: false },
    ],
    correction: "Pour multiplier deux puissances de même base, on additionne les exposants : 2³ × 2² = 2³⁺² = 2⁵ = 32.",
  },
  {
    id: "equations-1",
    level: "2AC",
    theme: "Équations",
    prompt: "Résoudre : 2x + 3 = 13",
    options: [
      { label: "x = 5", correct: true },
      { label: "x = 8", correct: false },
      { label: "x = 6.5", correct: false },
    ],
    correction: "2x + 3 = 13 → 2x = 10 → x = 5.",
  },
  {
    id: "thales-1",
    level: "3AC",
    theme: "Théorème de Thalès",
    prompt: "Dans un triangle, si (MN) // (BC) avec AM/AB = 2/5, que vaut MN/BC ?",
    options: [
      { label: "2/5", correct: true },
      { label: "5/2", correct: false },
      { label: "3/5", correct: false },
    ],
    correction: "D'après Thalès, les rapports sont égaux : AM/AB = AN/AC = MN/BC = 2/5.",
  },
  {
    id: "pythagore-1",
    level: "3AC",
    theme: "Théorème de Pythagore",
    prompt: "Un triangle rectangle a des côtés de l'angle droit 3 cm et 4 cm. Quelle est l'hypoténuse ?",
    options: [
      { label: "5 cm", correct: true },
      { label: "7 cm", correct: false },
      { label: "√7 cm", correct: false },
    ],
    correction: "BC² = 3² + 4² = 9 + 16 = 25, donc BC = √25 = 5 cm.",
  },
  {
    id: "racine-1",
    level: "3AC",
    theme: "Racine carrée",
    prompt: "Simplifier : √50",
    options: [
      { label: "5√2", correct: true },
      { label: "25√2", correct: false },
      { label: "10√5", correct: false },
    ],
    correction: "√50 = √(25 × 2) = √25 × √2 = 5√2.",
  },
  {
    id: "developpement-1",
    level: "3AC",
    theme: "Développement",
    prompt: "Développer : (x + 3)²",
    options: [
      { label: "x² + 6x + 9", correct: true },
      { label: "x² + 9", correct: false },
      { label: "x² + 3x + 9", correct: false },
    ],
    correction: "(x + 3)² = x² + 2×x×3 + 3² = x² + 6x + 9 (identité remarquable).",
  },
  {
    id: "fonctions-1",
    level: "TC",
    theme: "Fonctions",
    prompt: "Soit f(x) = 2x − 1. Que vaut f(3) ?",
    options: [
      { label: "5", correct: true },
      { label: "6", correct: false },
      { label: "7", correct: false },
    ],
    correction: "f(3) = 2 × 3 − 1 = 6 − 1 = 5.",
  },
  {
    id: "trigo-1",
    level: "TC",
    theme: "Trigonométrie",
    prompt: "Que vaut cos(0) ?",
    options: [
      { label: "1", correct: true },
      { label: "0", correct: false },
      { label: "−1", correct: false },
    ],
    correction: "Sur le cercle trigonométrique, au point d'angle 0, l'abscisse (cosinus) vaut 1.",
  },
  {
    id: "ensembles-1",
    level: "TC",
    theme: "Ensembles de nombres",
    prompt: "Le nombre −3 appartient à quel ensemble le plus restrictif ?",
    options: [
      { label: "ℤ (entiers relatifs)", correct: true },
      { label: "ℕ (entiers naturels)", correct: false },
      { label: "𝔻 (décimaux) uniquement", correct: false },
    ],
    correction: "−3 est un entier négatif : il appartient à ℤ mais pas à ℕ (qui ne contient que les entiers positifs ou nuls).",
  },
  {
    id: "statistiques-1",
    level: "2AC",
    theme: "Statistiques",
    prompt: "Quelle est la moyenne de la série : 8, 10, 12 ?",
    options: [
      { label: "10", correct: true },
      { label: "12", correct: false },
      { label: "9", correct: false },
    ],
    correction: "Moyenne = (8 + 10 + 12) ÷ 3 = 30 ÷ 3 = 10.",
  },
];

/** Sélectionne une question de façon déterministe selon la date du jour (même question toute la journée). */
export function getQuestionOfTheDay(excludeId?: string): QuizQuestion {
  const pool = excludeId ? QUIZ_QUESTIONS.filter((q) => q.id !== excludeId) : QUIZ_QUESTIONS;
  const source = pool.length > 0 ? pool : QUIZ_QUESTIONS;
  const dayKey = new Date().toDateString();
  let hash = 0;
  for (let i = 0; i < dayKey.length; i++) hash = (hash * 31 + dayKey.charCodeAt(i)) | 0;
  const index = Math.abs(hash) % source.length;
  return source[index];
}

export function getRandomQuestion(excludeId?: string): QuizQuestion {
  const pool = excludeId ? QUIZ_QUESTIONS.filter((q) => q.id !== excludeId) : QUIZ_QUESTIONS;
  const source = pool.length > 0 ? pool : QUIZ_QUESTIONS;
  return source[Math.floor(Math.random() * source.length)];
}
