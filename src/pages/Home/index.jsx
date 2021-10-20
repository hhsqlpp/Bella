import {
  Categories,
  Hero,
  Bestsellers,
  Freshness,
  Collections,
  SubscribeForm,
  Benefits,
  News,
} from "../../components";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Categories />
      <Bestsellers />
      <Freshness />
      <Collections />
      <SubscribeForm />
      <Benefits />
      <News />
    </div>
  );
};

export default Home;
