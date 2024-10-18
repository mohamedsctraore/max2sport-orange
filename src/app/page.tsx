"use client";
import Image from "next/image";
import styles from '@/css/Home.module.css';
import GetDateRange from '@/utils/dateUtils'
import { useState } from "react";

export default function Home() {
  const dates = GetDateRange();
  const [viewShow, setViewShow] = useState(0)

  const _renderNewSection = () => {
    return (
      <center>
        <section className={styles.newsSection}>
          <div className={styles.mainArticle}>
            <div
              className={styles.imageMainArticle}
            />
            <div>
              <h2 className="text-left text-xl text-black font-bold">Les nouveaux maillots</h2>
              <p className="text-left text-black">
                Comme chaque année, les équipes renouvellent leurs maillots.
                Cette semaine Puma, Adidas et Nike ont enfin levé le voile sur les nouveaux maillots des équipes de nos championnats préférés.
              </p>
              <p className="text-right underline text-black font-bold">
                Lire l’article
              </p>
            </div>
          </div>

          <div className={styles.sideArticles}>
            <div className="bg-white p-2 rounded-t-xl flex shadow-md bg-green" style={{ backgroundColor: "#50BE87" }}>
              <div>
                <h3 className="text-left text-xl font-bold text-black">Articles Focus Foot ⚽️ </h3>
                <br />
                <p className="text-xs text-left text-black">PSG, Réal Madrid, Tous sur vos équipes,
                  Lisez nos meilleurs articles ici ...</p>
              </div>
              <Image
                src="/image/arrow-right-alt-svgrepo-com.svg"
                alt="Next.js logo"
                width={40}
                height={40}
                priority
                className="mx-4"
              />
            </div>
            <ul className="text-left justify-between">
              {
                [1, 2, 3, 4]?.map((res, item) => (
                  <li key={item} className={res !== 4 ? "shadow-md bg-white my-4 p-2 py-4" : "shadow-md bg-white my-4 p-2 rounded-b-xl  py-4"}>
                    <a href="#" className="text-black font-bold">Le Réal Madrid fait mal pour sa 1ère</a>
                    <p className="text-black text-xs">
                      Réal Madrid pulvérise Ossasuna pour son premier match.
                      Pour la première à domicile, La Maison blanche ...
                    </p>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </center>
    )
  }
  const _renderFootSection = () => {
    return (
      <center>
        <section>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>

            </div>
          </div>
        </section>
      </center>
    )
  }
  const _renderView = (page: number): any => {
    switch (page) {
      case 1:
        return _renderFootSection();
        break;
      default:
        return _renderNewSection();
        break;
    }
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/image/logo.png"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
          />
        </div>

        <a href="#" className="hover:text-green-300 text-white">Football</a>
        <a href="#" className="hover:text-green-300 text-white">Basketball</a>
        <a href="#" className="hover:text-green-300 text-white">Athlétisme</a>
        <a href="#" className="hover:text-green-300 text-white">Tennis</a>
        <a href="#" className="hover:text-green-300 text-white">Autres</a>
        <div className={styles.search}>
          <input type="text" className="border-0" placeholder="Recherche" />
          <Image
            src={"/image/search-svgrepo-com.svg"}
            alt="Next.js logo"
            width={25}
            height={25}
            priority
          />
        </div>
        <div className="h-10 bg-gray-400 w-10 rounded-full"></div>
      </header>
      <main className={styles.main}>
        <center>
          <section className={styles.dateSection}>
            {dates.map((date, index) => (
              <div
                key={index}
                className={date.isToday ? styles.dateBoxToday : styles.dateBox}
              >
                <span className="text-black">{date.day}</span><br />
                {date.isToday ? <span style={{ color: "#50BE87" }} className="text-enabled text-4xl font-bold">Aujourd'hui</span> : <span className="text-black font-bold text-3xl">{date.date}</span>}<br />
                {!date.isToday ? <span className="text-black">{date.month}</span> : null}
              </div>
            ))}
          </section>
          <section className={styles.topSection}>
            <div className={styles.matchBox} onClick={() => setViewShow(1)}>
              <span className="text-black cursor-pointer">Match du jour</span>
              <span className={styles.badge}>120</span>
            </div>
            <div className={styles.liveBox}>
              <span className="text-black cursor-pointer" onClick={() => setViewShow(1)}>En Direct</span>
              <span className={styles.badge}>5</span>
            </div>
            <div className={styles.reviewBox}>
              <span className="text-black cursor-pointer" onClick={() => setViewShow(0)}>À Revoir</span>
              <span className={styles.badge}>115</span>
            </div>
          </section>
        </center>
        {_renderView(viewShow)}
        <center>
          <section className={styles.storiesSection}>
            <h3 className="text-left text-black font-bold text-xl">L’actu en stories</h3>
            <p className="text-black text-left text-xs">Revivez les meilleurs moments à travers nos stories en dessous.</p>
            <div className={styles.stories}>
              {
                [1, 2, 3, 4, 5, 5, 6].map((res, index) => (
                  <div key={index} className={styles.story}>
                    <Image
                      src="/image/fitxa-Lamine-Yamal.jpg.png"
                      alt="Next.js logo"
                      width={100}
                      height={100}
                      priority
                      className="mx-4"
                    /><br />
                    <span className="text-black">Yamal marque<br />encore ⚽</span>
                  </div>
                ))
              }
            </div>
            <div className="flex justify-end items-center">
              <p className="text-right text-black text-xs">Clique sur la flèche pour voir plus </p>
              <Image
                src="/image/arrow-right-alt-svgrepo-com.svg"
                alt="Next.js logo"
                width={30}
                height={30}
                priority
                className="mx-4"
              />
            </div>
          </section>
        </center>
        <center className="mt-10">
          <section className={styles.euroSection}>
            <Image
              src="/image/banner.png"
              alt="Next.js logo"
              width={400}
              id="banner"
              height={400}
              priority
              className="w-full"
            />
          </section>
        </center>
        <center>
          <section>
            <div className={styles.gridContainer}>
              <div className={styles.gridItem}>
                <div className={styles.container_image_grid}>
                  <Image
                    src="/image/el.png"
                    alt="Next.js logo"
                    width={100}
                    id="banner"
                    height={100}
                    priority
                    className={styles.image_grid}
                  />
                </div>
                <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.container_image_grid}>
                  <Image
                    src="/image/el.png"
                    alt="Next.js logo"
                    width={100}
                    id="banner"
                    height={100}
                    priority
                    className={styles.image_grid}
                  />
                </div>
                <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
                <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>
                <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>

              </div>
              <div className={styles.gridItem}>
                <div className={styles.container_image_grid}>
                  <Image
                    src="/image/el.png"
                    alt="Next.js logo"
                    width={100}
                    id="banner"
                    height={100}
                    priority
                    className={styles.image_grid}
                  />
                </div>
                <div className={styles.match}>Real Madrid 🇹🇩 0 - 0 🇹🇩 Inter Milan</div>

              </div>
            </div>
          </section>
        </center>

      </main>
    </div>
  );

}