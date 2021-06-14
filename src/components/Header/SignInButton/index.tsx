import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLogged = true;

  return isUserLogged ? (
    <button type="button" className={styles.signinButton}>
      <FaGithub color="#04d361" />
      Thiago Oliveira
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signinButton}>
      <FaGithub color="#eba417" />
      Sign in with GitHub
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  );
}
