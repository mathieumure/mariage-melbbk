import styles from './info.module.css';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';
import { BackLink } from '@/modules/navigation/components/BackLink';
import Link from 'next/link';
import { GoogleMaps } from '@/modules/icons/GoogleMaps';
import { Waze } from '@/modules/icons/Waze';
import { FlowerLine } from '@/modules/icons/Flowers';

export default function Photo() {
  return (
    <article className={styles.container}>
      <BackLink />
      <SelectedUserOnPage />
      <h1 className={styles.title}>Information</h1>
      <h2 className={styles.pink}>Samedi 24 mai 2025</h2>
      <p className={styles.yellow}>au Junior Club House</p>
      <p className={styles.yellow}>La Croix // 19160 Junior Club House</p>
      <div className={styles.links}>
        <a
          href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=fr&sa=X&geocode=KSHtzNBXOvhHMWu8gwCd-S0L&daddr=Lieu+dit+Chabrat,+La+Croix+A,+19160+Liginiac"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.deepLink}
        >
          <GoogleMaps />
          Ouvrir dans Maps
        </a>
        <a
          href="https://ul.waze.com/ul?place=ChIJIe3M0Fc6-EcRa7yDAJ35LQs&ll=45.39641070%2C2.29778820&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.deepLink}
        >
          <Waze />
          Ouvrir avec Waze
        </a>
      </div>

      <div className={styles.flowersSeparator}>
        <FlowerLine />
        <FlowerLine />
        <FlowerLine />
        <FlowerLine />
        <FlowerLine />
        <FlowerLine />
      </div>

      <dl className={styles.program}>
        <dt>16h30</dt>
        <dd>Cérémonie laïque</dd>
        <dt>18h00</dt>
        <dd>Cocktail</dd>
        <dt>20h00</dt>
        <dd>Diner et soirée</dd>
        <dt>Dimanche 25 mai</dt>
        <dd>Brunch de 9h à 11h</dd>
      </dl>

      <div className={styles.flowersSeparator}>
        <FlowerLine />
        <FlowerLine />
        <FlowerLine />
        <FlowerLine />
        <FlowerLine />
        <FlowerLine />
      </div>

      <p className={styles.blue} style={{ marginTop: '3rem' }}>
        Retrouvez votre dortoir en{' '}
        <Link href="/plan" className={styles.link}>
          suivant ce lien.
        </Link>
      </p>
      <p className={styles.yellow}>Les draps sont fournis, penser aux serviettes de toilette.</p>
      <p className={styles.pink}>Le parking se trouve à l&apos;entrée, à droite après le portail blanc. Ne pas descendre plus bas en voiture.</p>
      <p className={styles.yellow}>Prévoir de quoi se couvrir le soir, les soirées corréziennes peuvent être fraiches.</p>
      <p className={styles.pink}>Une partie de la journée se déroulera en extérieur, dans l&apos;herbe. Les talons aiguilles sont déconseillés.</p>
      <p className={styles.yellow}>
        La participation pour ceux qui souhaitent arriver le vendredi est de <span className={styles.pink}>20€</span>, et peut être viré sur le compte:{' '}
      </p>
      <dl className={styles.program}>
        <dt>Titulaire</dt>
        <dd>Braconnier Arnaud ou Lemor Mélanie</dd>
        <dt>IBAN</dt>
        <dd>FR76 1780 6003 8704 1602 6231 795</dd>
        <dt>BIC</dt>
        <dd>AGRIFRPP878</dd>
      </dl>
      <p className={styles.yellow}>Nous sommes heureux de vous compter parmi nous &lt;3</p>
    </article>
  );
}
