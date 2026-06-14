import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ExternalLinks = [
  {
    icon: '📝',
    title: 'Blog',
    description: 'Mijn persoonlijke blog op timdams.com',
    url: 'https://timdams.com',
    host: 'timdams.com',
  },
  {
    icon: '🛡️',
    title: 'Cyberboswachters',
    description: 'Online cursusboek over cybersecurity',
    url: 'https://timdams.github.io/cyberboswachters_boek/',
    host: 'timdams.github.io/cyberboswachters_boek',
  },
  {
    icon: '🎓',
    title: 'Zie Scherp Scherper',
    description: 'Online C#-cursus',
    url: 'https://apwt.gitbook.io/zie-scherp-scherper',
    host: 'apwt.gitbook.io/zie-scherp-scherper',
  },
];

function ExternalCard({icon, title, description, url, host}) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.extCard} to={url}>
        <span className={styles.extIcon}>{icon}</span>
        <span className={styles.extBody}>
          <span className={styles.extTitle}>{title}</span>
          <span className={styles.extDesc}>{description}</span>
          <span className={styles.extHost}>{host}</span>
        </span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Blog &amp; Cursussen
        </Heading>
        <div className="row">
          {ExternalLinks.map((props, idx) => (
            <ExternalCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
