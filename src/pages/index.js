// src/pages/index.js
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css'; 

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">FieldBase Applications for Efficient Operations</h1>
        <p className="hero__subtitle">
          Discover cutting-edge solutions tailored for the maritime and enterprise operations. Enhance efficiency, security, and connectivity with our innovative platforms.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, description, link, imgSrc }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <img src={imgSrc} alt={title} className={styles.featureImage} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="button button--primary" to={link}>
        Learn More
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="FieldBase Documentation"
      description="Comprehensive guides and documentation to help you integrate and utilize FieldBase solutions effectively.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                title="Project System"
                description="Streamline task management with this intuitive platform. Create, assign, and track tasks effortlessly, ensuring milestones are met and operations run smoothly."
                link="/docs/category/operations"
                imgSrc="/img/task-operations.jpg"
              />
              <Feature
                title="Inventory & Subscriptions Management"
                description="Optimize inventory and subscription services. Manage products, stocks, suppliers, and subscription plans efficiently to meet customer demands promptly."
                link="/docs/category/inventory-management"
                imgSrc="/img/inventory-management.jpg"
              />
              <Feature
                title="Electronic Personnel Management System (E-PMS)"
                description="Elevate client management with E-PMS. Stay on time, Manage clients and assets seamlessly, ensuring effective communication and customer satisfaction."
                link="/docs/e-pms"
                imgSrc="/img/e-pms.jpg"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
