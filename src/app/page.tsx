import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <h1>Selamat Datang di PT Makan Bergizi Gratis</h1>
        <p>Kami adalah vendor program MBG terbaik.</p>
        <Link href="/about" className={styles.btn}>
          Pelajari Lebih Lanjut
        </Link>
      </section>

      <section className={styles.highlights}>
        <div className={styles.highlightItem}>
          <h3>10+ Tahun</h3>
          <p>Pengalaman di industri</p>
        </div>
        <div className={styles.highlightItem}>
          <h3>778+ Klien</h3>
          <p>Telah mempercayai kami</p>
        </div>
      </section>
    </div>
  );
}
