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
    'Most showrooms only start selling once a client walks through the door. The right film starts that process long before the visit.',
    'This is about turning a physical environment into a commercial asset — content that pre-sells the experience, attracts better-fit residential clients and gives Potters a sharper edge before the first conversation even happens.'
  ],
  gardenTitle: 'Visit our Smart Home Garden…',
  gardenText: [
    'Outdoor living is one of the clearest ways to show the value of integrated design. The Smart Home Garden makes lighting, audio and control feel tangible, helping prospective clients understand not just how it looks, but why it changes how a space is used.',
    'Captured properly, this becomes more than a showroom feature. It becomes a high-value sales tool that creates stronger first impressions, increases enquiries and helps Potters stand apart from competitors still relying on static photography or generic product-led messaging.'
  ],
  quarterTitle: 'Project of the Quarter',
  quarterText: [
    'This project wasn’t about documenting a room. It was about showing how a considered living space can move effortlessly between everyday use and evening entertainment — and why that matters to the client buying into it.',
    'The detail is in how lighting shapes mood, how technology recedes into the design, and how the user experience feels from one moment to the next. That requires more than a camera on a tripod. It means understanding spatial design, user interaction and how lighting, audio and control systems are actually experienced in the room — then translating that physical experience into digital content that still sells online.'
  ],
  showroomTitle: 'Experience innovation at the Potters Home Digital showroom',
  showroomText: [
    'The showroom is one of Potters’ strongest commercial assets when it is presented properly. Instead of asking clients to imagine the difference, this content lets them see how multiple systems work together in a real residential environment before they ever book a visit.',
    'That makes the enquiry warmer, the conversation more informed and the showroom visit more valuable.'
  ],
  demoTitle: 'A showroom experience, not a demonstration',
  demoText: [
    'A strong showroom film does more than record products. It frames Potters as the specialist who understands how these systems are designed, integrated and lived with. The result is content that builds confidence early, qualifies interest more effectively and moves the conversation beyond features into experience, trust and design quality.'
  ],
  shopTitle: 'Buy Online or Shop In-Store',
  shopText: [
    'Not every client begins with a full integration project. For some, the relationship starts with better sound, a better screen or a more reliable system in one part of the home.',
    'That matters commercially. Product-led content broadens the entry point, supports in-store and online sales, and creates a clearer pathway from smaller purchases to larger residential projects over time.'
  ],
  becomesTitle: 'What this becomes',
  becomesText: [
    'A master showroom film that works on the website, in sales conversations and as a core brand asset.',
    'Short-form edits for LinkedIn and Instagram that keep the showroom visible and relevant between visits.',
    'Showroom walkthrough content that helps prospects understand the space before they arrive.',
    'Technical breakdown clips that explain lighting, audio and control in a way clients can actually grasp.',
    'An ongoing content pipeline built from the same environment, so this becomes a repeatable system rather than a one-off shoot.'
  ],
  impactTitle: 'Commercial impact',
  impactText: [
    'Stronger first impressions before client visits. Better-qualified enquiries. More productive showroom conversations. Better close potential from clients who already understand the value before they walk in.',
    'And beyond the immediate sales cycle, the result is a library of long-term marketing assets Potters can keep using across website, outreach and social content.'
  ],
  nextTitle: 'Next step',
  nextText: [
    'If Potters wants the showroom to work harder commercially, this is the next move: capture it with the same level of thought that went into designing it, then turn that into content that continues selling between visits.'
  ]
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
