import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>March 12 2021</time>
            <strong>
              Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma
              aplicação com React usando Leaflet.
            </strong>
            <p>Alguns pontos que vamos abordar</p>
          </a>

          <a href="#">
            <time>March 12 2021</time>
            <strong>
              Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma
              aplicação com React usando Leaflet.
            </strong>
            <p>Alguns pontos que vamos abordar</p>
          </a>

          <a href="#">
            <time>March 12 2021</time>
            <strong>
              Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma
              aplicação com React usando Leaflet.
            </strong>
            <p>Alguns pontos que vamos abordar</p>
          </a>

          <a href="#">
            <time>March 12 2021</time>
            <strong>
              Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma
              aplicação com React usando Leaflet.
            </strong>
            <p>Alguns pontos que vamos abordar</p>
          </a>
        </div>
      </main>
    </>
  );
}
