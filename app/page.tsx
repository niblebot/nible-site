export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      margin: 0,
      fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
      color: '#eaf0ff',
      background:
        'radial-gradient(1000px 600px at 0% -10%, #102344 0%, transparent 55%), radial-gradient(900px 500px at 100% 0%, #10283c 0%, transparent 50%), #05080f',
      padding: '24px'
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 18 }}>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 1.2 }}>NIBLE RESEARCH INSTITUTE</div>
          <div style={{ fontSize: 12, border: '1px solid #3a578f', color: '#c7d8ff', padding: '6px 10px', borderRadius: 999 }}>Directive Stack: <strong>9.0.9</strong></div>
        </div>

        <section style={{ background: '#0d1423', border: '1px solid #29426d', borderRadius: 16, padding: 18 }}>
          <h1 style={{ fontSize: 42, lineHeight: 1.08, margin: '0 0 10px' }}>Quantitative Nine Systems for Civilizational Forecasting</h1>
          <p style={{ color: '#9fb3da', fontSize: 17, lineHeight: 1.55, margin: '0 0 14px' }}>
            Nible is an independent technical lab advancing the <strong>Doctrine of Nine</strong>: a numerically stable framework for
            modelling media systems, social entropy, signal collapse, and meme-propagation harmonics.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
            <a href="/research/index.html" style={btnPrimary}>Open Research Papers</a>
            <a href="/research/nhonic-calculator.html" style={btn}>Nhonic Flap Calculator</a>
            <a href="/archive/index.htm" style={btn}>Full Original Archive</a>
            <a href="mailto:lab@nible.com?subject=Nible%20materials" style={btn}>Submit Research Material</a>
          </div>

          <div style={{ marginTop: 14, color: '#8da5d6', fontSize: 12 }}>
            Film wing remains outside current public program. Legacy files preserved for continuity analysis.
          </div>
        </section>
      </div>
    </main>
  );
}

const btn = {
  display: 'inline-block',
  padding: '10px 12px',
  borderRadius: 10,
  border: '1px solid #44629d',
  background: '#132242',
  color: '#e9f0ff',
  fontWeight: 600,
  textDecoration: 'none'
} as const;

const btnPrimary = {
  ...btn,
  background: 'linear-gradient(90deg,#95b8ff,#62e0c1)',
  color: '#06203b',
  borderColor: 'transparent'
} as const;
