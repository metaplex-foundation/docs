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
                  to="docs/create-store/installation"
                >
                  <div className="card">
                    <div className="card__header">
                      <h3>
                        <Translate description="create-a-store">
                          🏬 Create a store
                        </Translate>
                      </h3>
                    </div>
                    <div className="card__body">
                      <p>
                        <Translate description="get-started-building">
                          Create NFT storefront powered by Metaplex.
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
                          Get understanding of Metaplex&apos;s architecture.
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
