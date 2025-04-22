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
      <p className={styles.blue}>Mélanie et Arnaud sont heureux de vous convier à leur mariage qui sera célébré le</p>
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

      <p className={styles.blue}>
        Des chambres dortoires ont été réservées pour vous accueillir dans une ambiance conviviale. Vous pouvez retrouver votre chambre en{' '}
        <Link href="/plan" className={styles.link}>
          suivant ce lien
        </Link>
      </p>
      <p className={styles.yellow}>Toutefois si vous préférez un cadre plus privé, vous avez la possibilié de réserver un lodge au Village Nature Le Maury</p>
      <p className={styles.pink}>Il est possible d&apos;arriver le vendredi après-midi si vous le souhaitez avec une participation de 20 euros.</p>
    </article>
  );
}
