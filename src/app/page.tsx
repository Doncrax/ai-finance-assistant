import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>AI Finance Assistant 💰</h1>
      <p>Welcome! This will be your smart AI project.</p>

      <section className={styles.section}>
        <h2>Features coming soon 🚀</h2>
        <ul className={styles.list}>
          <li>✔ AI-powered expense tracking</li>
          <li>✔ Smart savings recommendations</li>
          <li>✔ Real-time financial insights</li>
        </ul>
      </section>
    </main>
  );
}