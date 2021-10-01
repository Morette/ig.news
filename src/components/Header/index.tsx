import { ActiveLink } from '../ActiveLink';

import { SignInButton } from './SignInButton';
import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <img src="/images/logo.svg" alt="ig.news" />
      <nav>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>Home</a>
        </ActiveLink>
        <ActiveLink href="/posts" prefetch activeClassName={styles.active}>
          <a>Posts</a>
        </ActiveLink>
      </nav>

      <SignInButton />
    </div>
  </header>
);
