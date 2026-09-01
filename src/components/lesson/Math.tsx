import katex from "katex";

function render(tex: string, display: boolean) {
  return katex.renderToString(tex, {
    throwOnError: true,
    displayMode: display,
    output: "htmlAndMathml",
  });
}

/** Inline math, rendered to static HTML at build time via KaTeX. */
export function Math({ tex, className }: { tex: string; className?: string }) {
  return (
    // eslint-disable-next-line react/no-danger
    <span className={className} dangerouslySetInnerHTML={{ __html: render(tex, false) }} />
  );
}

/** Block/display math, rendered to static HTML at build time via KaTeX. */
export function MathBlock({ tex, className }: { tex: string; className?: string }) {
  return (
    // eslint-disable-next-line react/no-danger
    <div className={className} dangerouslySetInnerHTML={{ __html: render(tex, true) }} />
  );
}
