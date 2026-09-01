#!/usr/bin/env node
// One-off migration script: copies the original static lesson pages from the
// "Web math" source tree into public/lecons/<niveau>/<semestre>/<slug>/index.html
// using clean ASCII slugs. Source folders are never modified.
import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const SRC_ROOT = path.resolve(SITE_ROOT, "..");
const DEST_ROOT = path.join(SITE_ROOT, "public", "lecons");

const Y1 = "1 Annee du College ";
const Y2 = "2 Annee du college ";
const Y3 = "3 Annee du college ";

const manifest = [
  // 1AC — Semestre 1
  ["1ac", "s1", "operations-nombres-decimaux", Y1, "Semestre 1", "01 web page Les opérations sur les nombres décimaux"],
  ["1ac", "s1", "notions-geometrie-plan", Y1, "Semestre 1", "02 web page Les notions de base de la géométrie dans le plan"],
  ["1ac", "s1", "nombres-ecriture-fractionnaire", Y1, "Semestre 1", "03 web page Nombres en écriture fractionnaire"],
  ["1ac", "s1", "operations-nombres-fractionnaires", Y1, "Semestre 1", "04 web page Les opérations sur les nombres en écriture fractionnaire"],
  ["1ac", "s1", "inegalite-triangulaire-mediatrice", Y1, "Semestre 1", "05 web page inégalité triangulaire  et  médiatrice d'un segment"],
  ["1ac", "s1", "nombres-relatifs-presentation-comparaison", Y1, "Semestre 1", "06 web page Les nombres relatifs    Présentation  et  comparaison"],
  ["1ac", "s1", "nombres-relatifs-addition-soustraction", Y1, "Semestre 1", "07 web page Les nombres relatifs Addition et soustraction"],
  ["1ac", "s1", "nombres-relatifs-multiplication-division", Y1, "Semestre 1", "08 web page Les nombres relatifs     Multiplication  et  division"],
  ["1ac", "s1", "les-angles", Y1, "Semestre 1", "09 web page les angles"],
  ["1ac", "s1", "puissance", Y1, "Semestre 1", "10 web page Puissance"],
  ["1ac", "s1", "mediatrice-bissectrice-hauteur-triangle", Y1, "Semestre 1", "11 web page Médiatrice , bissectrice  et  hauteur  d'un  triangle"],
  // 1AC — Semstre 2 (typo on disk)
  ["1ac", "s2", "symetrie-centrale", Y1, "Semstre 2", "web page Symétrie centrale"],
  ["1ac", "s2", "droite-graduee-repere-plan", Y1, "Semstre 2", "web page Droite graduée , repère dans le plan"],
  ["1ac", "s2", "angles-alternes-correspondants", Y1, "Semstre 2", "web page Angles alternes internes  et  angles  correspondants"],
  ["1ac", "s2", "cercle-et-droite", Y1, "Semstre 2", "web page Cercle et droite"],
  ["1ac", "s2", "parallelogramme", Y1, "Semstre 2", "web page Le parallélogramme"],
  ["1ac", "s2", "quadrilateres-particuliers", Y1, "Semstre 2", "web page Les quadrilatères particuliers"],
  ["1ac", "s2", "prisme-droit-cylindre", Y1, "Semstre 2", "web page PRISME DROIT - CYLINDRE"],
  ["1ac", "s2", "proportionnalite", Y1, "Semstre 2", "web page La proportionnalité"],
  ["1ac", "s2", "developpement-factorisation", Y1, "Semstre 2", "web page Développement  et  factorisation"],
  ["1ac", "s2", "equations", Y1, "Semstre 2", "web page Les équations"],
  ["1ac", "s2", "statistiques", Y1, "Semstre 2", "web page Statistiques"],
  // 2AC — Semestre 1
  ["2ac", "s1", "nombres-rationnels-introduction-ordre", Y2, "Semestre 1", "web page les nombres rationnelles introduction et ordre"],
  ["2ac", "s1", "addition-soustraction-nombres-rationnels", Y2, "Semestre 1", "web page Addition-et-soustraction-des-nombres-rationnels"],
  ["2ac", "s1", "produit-division-nombres-rationnels", Y2, "Semestre 1", "web page produit et division des nombres rationnels"],
  ["2ac", "s1", "puissance", Y2, "Semestre 1", "web page Puissance"],
  ["2ac", "s1", "symetrie-axiale", Y2, "Semestre 1", "web page symétrie axial"],
  ["2ac", "s1", "droites-remarquables-triangle", Y2, "Semestre 1", "web page les droites remarquables dans un triangles"],
  ["2ac", "s1", "droites-des-milieux-triangle", Y2, "Semestre 1", "web page Droites des milieux dans un Triangle"],
  // 2AC — Semestre 2
  ["2ac", "s2", "ordre-et-operations", Y2, "Semestre 2", "web page ordre et operation"],
  ["2ac", "s2", "calcul-litteral", Y2, "Semestre 2", "web page Calcul littéral"],
  ["2ac", "s2", "equations", Y2, "Semestre 2", "web page les equations"],
  ["2ac", "s2", "proportionnalite", Y2, "Semestre 2", "web page Proportionalité"],
  ["2ac", "s2", "statistiques", Y2, "Semestre 2", "web page Statistique"],
  ["2ac", "s2", "triangle-rectangle-cercle", Y2, "Semestre 2", "web page triangle rectangle et cercle"],
  ["2ac", "s2", "vecteur-translation", Y2, "Semestre 2", "web page vecteur et translation"],
  ["2ac", "s2", "geometrie-espace", Y2, "Semestre 2", "web page géométrie dans l'espace"],
  // 3AC — semsstre 1 (typo on disk)
  ["3ac", "s1", "evaluations-diagnostiques", Y3, "semsstre 1", "web page Évaluations diagnostiques"],
  ["3ac", "s1", "ordre-et-operations", Y3, "semsstre 1", "web page ordre et opération"],
  ["3ac", "s1", "racine-carree", Y3, "semsstre 1", "Racine Carre"],
  ["3ac", "s1", "puissance", Y3, "semsstre 1", "puissance"],
  ["3ac", "s1", "developpement-factorisation-identites-remarquables", Y3, "semsstre 1", "web page Développement Factorisation et Identités Remarquables"],
  ["3ac", "s1", "theoreme-thales", Y3, "semsstre 1", "web page theoreme de thales"],
  ["3ac", "s1", "triangle-semblable", Y3, "semsstre 1", "web page Triangle semblable"],
  ["3ac", "s1", "theoreme-pythagore", Y3, "semsstre 1", "web page Théorème de Pythagore"],
  ["3ac", "s1", "triangle-rectangle-trigonometrie", Y3, "semsstre 1", "web page Triangle Rectangle et Trigonométrie"],
  ["3ac", "s1", "angle-inscrit-angle-au-centre", Y3, "semsstre 1", "web page Angle inscrit et Angle au centre"],
  // 3AC — semestre 2 (note: "Statistiques" duplicate intentionally skipped, keeping only "Statistique")
  ["3ac", "s2", "equations-inequations", Y3, "semestre 2", "web page Équations et Inéquation"],
  ["3ac", "s2", "systeme-deux-equations", Y3, "semestre 2", "web page Système de deux équations"],
  ["3ac", "s2", "fonction-lineaire-affine", Y3, "semestre 2", "web page Fonction Linéaire et Fonction Affine"],
  ["3ac", "s2", "repere-dans-le-plan", Y3, "semestre 2", "web page Repere dans le plan"],
  ["3ac", "s2", "equation-dune-droite", Y3, "semestre 2", "web page Équation d'une Droite"],
  ["3ac", "s2", "vecteur-translation", Y3, "semestre 2", "web page Vecteur et Translation"],
  ["3ac", "s2", "geometrie-espace", Y3, "semestre 2", "web page Géométrie dans l’espace"],
  ["3ac", "s2", "statistiques", Y3, "semestre 2", "web page Statistique"],
  ["3ac", "s2", "examens-regionaux", Y3, "semestre 2", "web page Examens Regionals"],
];

let ok = 0;
let fail = 0;
for (const [niveau, semestre, slug, yearFolder, semFolder, chapFolder] of manifest) {
  const srcFile = path.join(SRC_ROOT, yearFolder, semFolder, chapFolder, "index.html");
  const destDir = path.join(DEST_ROOT, niveau, semestre, slug);
  const destFile = path.join(destDir, "index.html");
  if (!existsSync(srcFile)) {
    console.error(`MISSING: ${srcFile}`);
    fail++;
    continue;
  }
  mkdirSync(destDir, { recursive: true });
  copyFileSync(srcFile, destFile);
  ok++;
}
console.log(`Copied ${ok} lesson(s), ${fail} missing.`);
