import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function Home() {
  return (
    <Layout title="Homepage" description="Metaplex Documentation">
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">

              <div className={clsx("col col--4", styles.feature)}>
                <Link
                  className="navbar__link"
                  to="docs/create-store/introduction"
                >
                  <div className="card">
                    <div className="card__header">
                      <h3>
                        <Translate description="create-a-store">
                          🏬 Store
                        </Translate>
                      </h3>
                    </div>
                    <div className="card__body">
                      <p>
                        <Translate description="get-started-building">
                          Create an NFT store powered by Metaplex.
                        </Translate>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={clsx("col col--4", styles.feature)}>
                <Link
                  className="navbar__link"
                  to="docs/create-candy/introduction"
                >
                  <div className="card">
                    <div className="card__header">
                      <h3>
                        <Translate description="create-a-candy">
                        🍬 Candy Machine
                        </Translate>
                      </h3>
                    </div>
                    <div className="card__body">
                      <p>
                        <Translate description="get-started-building">
                          Create an NFT candy machine powered by Metaplex.
                        </Translate>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={clsx("col col--4", styles.feature)}>
                <Link className="navbar__link" to="docs/architecture/overview">
                  <div className="card">
                    <div className="card__header">
                      <h3>
                        <Translate description="architecture">
                          ⛏ Architecture
                        </Translate>
                      </h3>
                    </div>
                    <div className="card__body">
                      <p>
                        <Translate description="get-started-building">
                          Build a deeper understanding of the Metaplex architecture.
                        </Translate>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
