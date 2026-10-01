export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function SiteOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0b1f3a",
        backgroundImage: "radial-gradient(circle at 25% 15%, #1c3a63 0%, #0b1f3a 55%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 96,
          height: 96,
          borderRadius: 9999,
          border: "3px solid rgba(255,255,255,0.25)",
          marginBottom: 32,
          fontSize: 44,
          fontWeight: 700,
          color: "#f59e0b",
        }}
      >
        π
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 64,
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
          padding: "0 60px",
        }}
      >
        Les maths deviennent plus simples
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: 2,
          color: "#f59e0b",
          textTransform: "uppercase",
        }}
      >
        Profdemath.com
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 16,
          fontSize: 26,
          color: "#8fb0da",
        }}
      >
        Cours clairs · Exercices corrigés · Collège &amp; Lycée
      </div>
    </div>
  );
}
