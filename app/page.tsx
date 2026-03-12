import FeatureCard from '../components/FeatureCard';
import Header from '../components/Header';
import { features, roadmap } from '../lib/data';

export default function HomePage() {
  return (
    <main className="shell">
      <Header />

      <section className="hero">
        <p className="eyebrow">Nible video toolbox</p>
        <h1>Turn one long video into a full stack of high-impact nibles.</h1>
        <p className="subtitle">
          Upload source footage, let Nible detect the strongest moments, auto-reframe for vertical, and export a full content pack.
        </p>
        <div className="heroCta" id="cta">
          <a className="btn primary" href="mailto:hello@nible.com?subject=Nible%20early%20access">
            Get early access
          </a>
          <a className="btn" href="#features">
            View features
          </a>
        </div>
      </section>

      <section id="features">
        <h2>What it does</h2>
        <div className="grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section id="workflow" className="card workflow">
        <h2>Simple workflow</h2>
        <ol>
          <li>Upload footage and choose objective (awareness, leads, authority).</li>
          <li>Review auto-selected moments + reframe previews.</li>
          <li>Export your nible pack with platform-ready dimensions and captions.</li>
        </ol>
      </section>

      <section className="card roadmap">
        <h2>Roadmap</h2>
        <ul>
          {roadmap.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
