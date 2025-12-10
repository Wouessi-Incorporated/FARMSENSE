import Head from 'next/head';
import Image from 'next/image';

export default function HomeFR() {
  return (
    <>
      <Head>
        <title>FARMSENSE – Plateforme d'intelligence pour l'élevage</title>
        <meta name="description" content="FARMSENSE transforme les poulaillers et étables bovines en actifs intelligents et connectés." />
      </Head>
      <header>
        <div className="brand">
          <Image src="/assets/img/farmsense_logo.png" alt="Logo FARMSENSE" className="logo" width={44} height={44} />
          <div>
            <strong>FARMSENSE™</strong><br />
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>L’intelligence pour chaque ferme. Partout.</span>
          </div>
        </div>
        <nav>
          <a href="#problem">Problème</a>
          <a href="#solution">Solution</a>
          <a href="#modules">Modules</a>
          <a href="#gov">Gouvernements</a>
          <a href="#invest">Investisseurs</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div>
            <div className="badge">Système d’alerte précoce pour poulets &amp; bovins</div>
            <h1>Voir chaque lot. Protéger chaque troupeau.</h1>
            <p className="lead">
              FARMSENSE™ transforme les poulaillers et étables bovines en actifs intelligents et connectés.
              Caméras, capteurs et MicroLabs alimentent une IA nationale qui détecte les risques avant les pertes.
            </p>
            <div className="hero-actions">
              <a href="#gov" className="btn btn-primary">Pilotes États &amp; agences</a>
              <a href="#invest" className="btn btn-outline">Dossier investisseurs</a>
            </div>
            <p style={{ fontSize: '0.78rem', marginTop: '0.8rem', color: '#555' }}>
              Conçu pour les zones reculées, les faibles connexions et les populations rurales multilingues.
            </p>
          </div>
          <div className="hero-visual">
            <Image src="/assets/img/farmsense_photo_5.jpg" alt="Poulailler surveillé par FARMSENSE" width={900} height={600} />
          </div>
        </section>

        <section id="problem">
          <h2>Le problème</h2>
          <p className="subtitle">Une grande partie de l’élevage fonctionne à l’aveugle.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Détection tardive = mortalités</h3>
              <p>La plupart des fermes découvrent les problèmes quand les mortalités sont visibles. Le comportement, l’environnement et le stress sont rarement suivis en continu.</p>
            </div>
            <div className="card">
              <h3>Diagnostic limité en zones reculées</h3>
              <p>Les laboratoires sont éloignés, les ressources vétérinaires limitées et les petits éleveurs ne peuvent pas multiplier les visites.</p>
            </div>
          </div>
          <div className="highlight">
            FARMSENSE™ agit comme un <strong>réseau distribué d’alerte précoce</strong> pour la santé, le bien-être et la productivité animale – du bâtiment jusqu’au niveau national.
          </div>
        </section>

        <section id="solution">
          <h2>La solution FARMSENSE™</h2>
          <p className="subtitle">Du poulailler individuel au système d’alerte précoce national.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Dans les bâtiments</h3>
              <p>Des caméras intelligentes et des capteurs environnementaux surveillent en continu poulets et bovins. L’IA embarquée détecte comportements anormaux, chaleur, humidité et gaz.</p>
            </div>
            <div className="card">
              <h3>Vue ministérielle</h3>
              <p>Les données alimentent des tableaux de bord sécurisés pour ministères et agences. Les décideurs visualisent foyers de risque, tendances et alertes par région.</p>
            </div>
          </div>
          <div className="gallery" style={{ marginTop: '1.2rem' }}>
            <Image src="/assets/img/farmsense_photo_4.jpg" alt="Grand poulailler" width={600} height={400} />
            <Image src="/assets/img/farmsense_photo_2.jpg" alt="Bovins en bâtiment" width={600} height={400} />
            <Image src="/assets/img/farmsense_photo_3.jpg" alt="Jeune veau en stabulation" width={600} height={400} />
          </div>
        </section>

        <section id="modules">
          <h2>Modules clés</h2>
          <p className="subtitle">Une architecture modulaire, déployable par phases.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Vision &amp; IA comportementale</h3>
              <p>Les caméras analysent mouvements, regroupements, agitation ou inactivité. Le système signale les anomalies avant même que l’éleveur ne les remarque.</p>
            </div>
            <div className="card">
              <h3>Environnement &amp; confort</h3>
              <p>Les capteurs suivent température, humidité, gaz et ventilation. Les seuils et tendances pilotent alertes, conseils et comparaisons entre fermes.</p>
            </div>
            <div className="card">
              <h3>MicroLab &amp; santé</h3>
              <p>Des MicroLabs portables permettent des tests rapides dès que l’IA ou les capteurs détectent un signal inhabituel.</p>
            </div>
            <div className="card">
              <h3>Accès universel</h3>
              <p>Applications mobiles, menus USSD et interfaces vocales en langues locales rendent FARMSENSE utilisable même avec de simples téléphones.</p>
            </div>
          </div>
        </section>

        <section id="gov">
          <h2>Pour les gouvernements &amp; bailleurs</h2>
          <p className="subtitle">Une infrastructure stratégique pour la résilience de l’élevage.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Tableau de bord national</h3>
              <p>Visualisation des alertes, du risque de mortalité et du stress environnemental. Intégration possible avec les systèmes de surveillance existants.</p>
            </div>
            <div className="card">
              <h3>Déploiements programmatiques</h3>
              <p>Déploiement par région ou filière avec l’appui de la FAO, du FIDA ou des banques de développement. FARMSENSE est pensé pour les marchés publics.</p>
            </div>
          </div>
        </section>

        <section id="invest">
          <h2>Pour les investisseurs</h2>
          <p className="subtitle">Revenus récurrents &amp; impact national.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Modèle économique</h3>
              <p>Kits matériels + abonnement SaaS par bâtiment / coopérative, complétés par des licences nationales pour les ministères et agences.</p>
            </div>
            <div className="card">
              <h3>Pourquoi maintenant ?</h3>
              <p>Les pertes en élevage, la volatilité climatique et les risques sanitaires augmentent. Les pays ont besoin d’outils qui réduisent l’incertitude tout en améliorant la productivité.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contact-box">
            <div>
              <h2>Contact &amp; projets pilotes</h2>
              <p style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>
                Intéressé par une région pilote, un programme national ou un partenariat d’investissement ?
                Décrivez votre contexte et l’équipe FARMSENSE vous répondra avec une proposition ciblée.
              </p>
            </div>
            <form method="post" action="/api/contact">
              <input type="text" name="name" placeholder="Nom / Organisation" />
              <input type="email" name="email" placeholder="Email" />
              <textarea name="message" rows={3} placeholder="Pays, espèces (poulets / bovins) et type de collaboration"></textarea>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div>© FARMSENSE™ – Plateforme d'intelligence pour l'élevage.</div>
        <div className="lang-switch">Langue:
          <a href="/en">EN</a> · <a href="/fr">FR</a>
        </div>
      </footer>
    </>
  );
}