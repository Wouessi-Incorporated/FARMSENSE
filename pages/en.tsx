import Head from 'next/head';
import Image from 'next/image';

export default function HomeEN() {
  return (
    <>
      <Head>
        <title>FARMSENSE – Livestock Intelligence Platform</title>
        <meta name="description" content="FARMSENSE turns poultry houses and cattle barns into intelligent, connected assets." />
      </Head>
      <header>
        <div className="brand">
          <Image src="/assets/img/farmsense_logo.png" alt="FARMSENSE logo" className="logo" width={44} height={44} />
          <div>
            <strong>FARMSENSE™</strong><br />
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Intelligence for Every Farm. Everywhere.</span>
          </div>
        </div>
        <nav>
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#modules">Modules</a>
          <a href="#gov">Governments</a>
          <a href="#invest">Investors</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div>
            <div className="badge">AI-powered early warning system for poultry &amp; cattle</div>
            <h1>See every flock. Protect every herd.</h1>
            <p className="lead">
              FARMSENSE™ turns poultry houses and cattle barns into intelligent, connected assets.
              Cameras, sensors and MicroLabs feed a national AI engine that detects risks before losses explode.
            </p>
            <div className="hero-actions">
              <a href="#gov" className="btn btn-primary">Government &amp; FAO pilots</a>
              <a href="#invest" className="btn btn-outline">Investor brief</a>
            </div>
            <p style={{ fontSize: '0.78rem', marginTop: '0.8rem', color: '#555' }}>
              Designed for remote regions, low connectivity and multilingual rural populations.
            </p>
          </div>
          <div className="hero-visual">
            <Image src="/assets/img/farmsense_photo_1.jpg" alt="Poultry barn monitored by FARMSENSE" width={900} height={600} />
          </div>
        </section>

        <section id="problem">
          <h2>The problem</h2>
          <p className="subtitle">Livestock systems operate blind in many regions.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Late detection = massive losses</h3>
              <p>Most poultry and cattle farms discover problems when mortality is already visible. Behaviour, environment and stress are rarely monitored continuously.</p>
            </div>
            <div className="card">
              <h3>Weak diagnostics in remote areas</h3>
              <p>Laboratories are far, veterinary capacity is limited and smallholders cannot afford repeated visits. Governments lack real-time, consolidated information.</p>
            </div>
          </div>
          <div className="highlight">
            FARMSENSE™ acts as a <strong>distributed early-warning network</strong> for animal health, welfare and productivity – from barn level to national dashboards.
          </div>
        </section>

        <section id="solution">
          <h2>The FARMSENSE™ solution</h2>
          <p className="subtitle">From individual barn to national early-warning system.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Inside the barns</h3>
              <p>Smart cameras and environmental sensors watch poultry and cattle 24/7. Edge AI detects abnormal behaviour, heat, humidity and gas build-up.</p>
              <div className="chip-row">
                <span className="chip">Poultry houses</span>
                <span className="chip">Cattle barns</span>
                <span className="chip">Remote regions</span>
              </div>
            </div>
            <div className="card">
              <h3>National &amp; regional view</h3>
              <p>Data feeds secure cloud dashboards for ministries, agencies and partners. Officials see hotspots, trends and alerts across regions and species.</p>
              <div className="chip-row">
                <span className="chip">Early warning</span>
                <span className="chip">Food security</span>
                <span className="chip">Climate adaptation</span>
              </div>
            </div>
          </div>
          <div className="gallery" style={{ marginTop: '1.2rem' }}>
            <Image src="/assets/img/farmsense_photo_4.jpg" alt="Large poultry house" width={600} height={400} />
            <Image src="/assets/img/farmsense_photo_2.jpg" alt="Cattle in barn" width={600} height={400} />
            <Image src="/assets/img/farmsense_photo_3.jpg" alt="Young calf in barn" width={600} height={400} />
          </div>
        </section>

        <section id="modules">
          <h2>Core modules</h2>
          <p className="subtitle">Modular architecture – deployable in phases.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Vision &amp; behaviour AI</h3>
              <p>Cameras analyse movement, clustering, agitation and inactivity in flocks and herds. The system flags anomalies before farmers notice them.</p>
            </div>
            <div className="card">
              <h3>Environment &amp; comfort</h3>
              <p>Sensors track temperature, humidity, gases and ventilation. Thresholds and trends drive alerts, recommendations and benchmarking between farms.</p>
            </div>
            <div className="card">
              <h3>MicroLab &amp; health</h3>
              <p>Portable MicroLabs support rapid field tests when AI or sensors detect unusual patterns, reducing the time between suspicion and decision.</p>
            </div>
            <div className="card">
              <h3>Access for all</h3>
              <p>Smartphone apps, USSD menus and voice interfaces in local languages make FARMSENSE usable by both tech-savvy cooperatives and basic phone users.</p>
            </div>
          </div>
        </section>

        <section id="gov">
          <h2>For governments &amp; agencies</h2>
          <p className="subtitle">A strategic infrastructure for livestock resilience.</p>
          <div className="grid-2">
            <div className="card">
              <h3>National early-warning dashboard</h3>
              <p>View alerts, mortality risk and environmental stress across poultry and cattle regions. Integrate with existing surveillance and veterinary systems.</p>
            </div>
            <div className="card">
              <h3>Programmatic deployments</h3>
              <p>Roll-out by region or value chain with donor support (FAO, IFAD, development banks). FARMSENSE is designed for procurement and public–private models.</p>
            </div>
          </div>
        </section>

        <section id="invest">
          <h2>For investors &amp; partners</h2>
          <p className="subtitle">Recurring revenue + national-scale impact.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Business model</h3>
              <p>Hardware kits plus monthly SaaS per barn, cooperative and region. National licenses for ministries and agencies, with optional data-as-a-service layers.</p>
            </div>
            <div className="card">
              <h3>Why now?</h3>
              <p>Livestock losses, climate volatility and disease risks are increasing. Countries need tools that reduce uncertainty while improving productivity.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contact-box">
            <div>
              <h2>Contact &amp; pilots</h2>
              <p style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>
                Interested in a pilot region, a national program or an investment partnership?
                Share a few details and the FARMSENSE team will follow up with a tailored brief.
              </p>
            </div>
            <form method="post" action="/api/contact">
              <input type="text" name="name" placeholder="Name / Organisation" />
              <input type="email" name="email" placeholder="Email" />
              <textarea name="message" rows={3} placeholder="Region, species (poultry / cattle) and type of collaboration"></textarea>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div>© FARMSENSE™ – Livestock Intelligence Platform.</div>
        <div className="lang-switch">Language:
          <a href="/en">EN</a> · <a href="/fr">FR</a>
        </div>
      </footer>
    </>
  );
}