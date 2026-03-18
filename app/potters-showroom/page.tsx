import type { CSSProperties } from 'react';

const images = {
  logo: 'https://mcusercontent.com/3a522ae52b0a7d14dd0a7e997/images/ae086998-fc43-bab2-9850-3ea4b71aa547.png',
  hero: 'https://mcusercontent.com/3a522ae52b0a7d14dd0a7e997/images/3c9a4068-b748-bdbe-e5c0-2fbff011fcd5.jpg',
  quarterLeft: 'https://mcusercontent.com/3a522ae52b0a7d14dd0a7e997/images/3cd395e0-de0b-01b9-11c5-1b29e9f564b3.jpg',
  quarterRight: 'https://mcusercontent.com/3a522ae52b0a7d14dd0a7e997/images/54d3a8ec-d4eb-5921-ade0-be118d534ffc.jpg',
  showroom: 'https://mcusercontent.com/3a522ae52b0a7d14dd0a7e997/images/53449eb0-da03-235b-ce1b-ba9fe2b2c540.jpg',
  lounge: 'https://mcusercontent.com/3a522ae52b0a7d14dd0a7e997/images/16d03cba-bb1b-d6b2-0c2f-29b07a62cad8.jpg',
  shop: 'https://mcusercontent.com/3a522ae52b0a7d14dd0a7e997/images/9ae1c244-bda6-c1e3-89df-a3a483f89b28.jpg'
};

const copy = {
  heroTitle: 'Step into something different',
  heroText: [
    'With the days getting longer, it’s the right time to start thinking about how your home and garden are used in the months ahead.',
    'A well-designed space should feel effortless to live in — whether that’s opening up the house to the outside, setting the right atmosphere in the evening, or simply making everything easier to control day to day.',
    'It’s about creating an environment that works naturally, without needing to think about it.'
  ],
  gardenTitle: 'Visit our Smart Home Garden…',
  gardenText: [
    'Outdoor spaces should feel like a continuation of the home.',
    'As the light changes through the evening, the garden adapts — subtle lighting, carefully balanced audio, and simple control come together to create a space that feels calm and usable at any time.',
    'Whether you’re entertaining or just relaxing, everything works quietly in the background, allowing you to enjoy the space without interruption.'
  ],
  quarterTitle: 'Project of the Quarter',
  quarterText: [
    'This quarter’s project is a good example of how considered design and integration can shape how a home is experienced.',
    'Each element has been carefully planned and brought together — from lighting and audio to the way the system is controlled — creating a space that feels intuitive from the moment it’s used.',
    'The focus is always on simplicity. Technology is there to support the space, not dominate it.'
  ],
  showroomTitle: 'Home Cinema',
  showroomText: [
    'A cinema room is about more than performance — it’s about immersion.',
    'Every detail, from the acoustics of the room to the way lighting is handled, is designed to support the experience without distraction.',
    'The result is a space where you can fully settle in, with everything working together to create something that feels complete.'
  ],
  demoTitle: 'Audio',
  demoText: [
    'Sound plays an important role in how a space feels.',
    'Whether it’s background music throughout the day or something more focused, audio is designed to sit naturally within each room — present when you want it, and unobtrusive when you don’t.',
    'It becomes part of the environment, rather than something separate from it.'
  ],
  shopTitle: 'Experience innovation at the Potters Home Digital showroom',
  shopText: [
    'The best way to understand what’s possible is to experience it.',
    'Our showroom is designed to demonstrate how these systems work in real spaces — how they feel, how they respond, and how naturally they fit into everyday life.'
  ],
  becomesTitle: 'What this becomes',
  becomesText: [],
  impactTitle: 'Commercial impact',
  impactText: [],
  nextTitle: 'Next step',
  nextText: []
};

function Cta({ label }: { label: string }) {
  return (
    <div style={{ marginTop: 18, marginBottom: 6 }}>
      <a
        href="#next-step"
        style={{
          display: 'block',
          width: '100%',
          border: '1px solid #b8a7ab',
          color: '#7f2037',
          textAlign: 'center',
          padding: '11px 14px',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: 0.2,
          textDecoration: 'none'
        }}
      >
        {label}
      </a>
    </div>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <p
          key={item}
          style={{
            fontSize: 13,
            lineHeight: 1.9,
            color: '#5a5a5a',
            margin: '0 0 14px'
          }}
        >
          {item}
        </p>
      ))}
    </>
  );
}

export default function PottersShowroomPage() {
  return (
    <main
      style={{
        background: '#f3f1ef',
        minHeight: '100vh',
        padding: '24px 12px 40px',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
          background: '#ffffff',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ padding: '34px 36px 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 14 }}>
            <img src={images.logo} alt="Potters Home Digital" style={{ width: 141, height: 'auto' }} />
          </div>

          <section style={{ marginBottom: 18 }}>
            <h1
              style={{
                margin: '0 0 14px',
                color: '#b21f43',
                fontSize: 31,
                lineHeight: 1.15,
                textAlign: 'center',
                fontWeight: 700
              }}
            >
              {copy.heroTitle}
            </h1>
            <img src={images.hero} alt="Smart home garden" style={{ width: '100%', height: 'auto', display: 'block', marginBottom: 16 }} />
            <h2 style={headingStyle}>{copy.gardenTitle}</h2>
            <Paragraphs items={[...copy.heroText, ...copy.gardenText]} />
            <Cta label="Visit the Smart Home Garden" />
          </section>

          <hr style={ruleStyle} />

          <section style={{ margin: '0 0 18px' }}>
            <h2 style={headingStyle}>{copy.quarterTitle}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
              <img src={images.quarterLeft} alt="Project of the quarter view one" style={halfImageStyle} />
              <img src={images.quarterRight} alt="Project of the quarter view two" style={halfImageStyle} />
            </div>
            <Paragraphs items={copy.quarterText} />
            <Cta label="Project of the Quarter" />
          </section>

          <hr style={ruleStyle} />

          <section style={{ margin: '0 0 18px' }}>
            <h2 style={headingStyle}>{copy.showroomTitle}</h2>
            <img src={images.showroom} alt="Potters showroom" style={{ width: '100%', height: 'auto', display: 'block', marginBottom: 14 }} />
            <Paragraphs items={copy.showroomText} />
            <h2 style={{ ...headingStyle, marginTop: 16 }}>{copy.demoTitle}</h2>
            <img src={images.lounge} alt="Showroom living space" style={{ width: '100%', height: 'auto', display: 'block', marginBottom: 14 }} />
            <Paragraphs items={copy.demoText} />
            <Cta label="Experience the Showroom" />
          </section>

          <hr style={ruleStyle} />

          <section style={{ margin: '0 0 18px' }}>
            <h2 style={headingStyle}>{copy.shopTitle}</h2>
            <img src={images.shop} alt="Shop in-store or online" style={{ width: '100%', height: 'auto', display: 'block', marginBottom: 14 }} />
            <Paragraphs items={copy.shopText} />
            <Cta label="Buy Online or Shop In-Store" />
          </section>

          <hr style={ruleStyle} />

          <section style={{ margin: '0 0 18px' }}>
            <h2 style={headingStyle}>{copy.becomesTitle}</h2>
            <Paragraphs items={copy.becomesText} />
            <Cta label="What this becomes" />
          </section>

          <hr style={ruleStyle} />

          <section style={{ margin: '0 0 18px' }}>
            <h2 style={headingStyle}>{copy.impactTitle}</h2>
            <Paragraphs items={copy.impactText} />
          </section>

          <hr style={ruleStyle} />

          <section id="next-step" style={{ textAlign: 'center', paddingTop: 6 }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>{copy.nextTitle}</h2>
            <div style={{ maxWidth: 470, margin: '0 auto' }}>
              <Paragraphs items={copy.nextText} />
            </div>
            <div style={{ marginTop: 26, color: '#6f6f6f', fontSize: 11, lineHeight: 1.7 }}>
              <div>Visit us</div>
              <div>Potters Home Digital · Tunbridge Wells Road</div>
              <div>Pembury · Kent</div>
              <div>TN2 4JJ</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

const headingStyle: CSSProperties = {
  margin: '0 0 12px',
  color: '#b21f43',
  fontSize: 29,
  lineHeight: 1.25,
  fontWeight: 700
};

const ruleStyle: CSSProperties = {
  border: 0,
  borderTop: '1px solid #ededed',
  margin: '8px 0 22px'
};

const halfImageStyle: CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block'
};
