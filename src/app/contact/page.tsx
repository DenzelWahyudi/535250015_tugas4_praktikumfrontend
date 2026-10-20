import SectionTitle from "@/components/SectionTitle";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <SectionTitle
        title="Hubungi Kami"
        subtitle="Ada pertanyaan soal kerja sama atau pengiriman? Hubungi kami"
      />

      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3>Informasi Kontak</h3>
          <p>Jl. Kyai Tapa, Jakarta Barat</p>
          <p>📞 +6289682115187</p>
          <p>✉️ mbg@gmail.com</p>
          <p>🕐 Senin - Sabtu: 06.00 - 15.00 WIB</p>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label>Nama</label>
            <input type="text" placeholder="Nama kamu" />
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="test@example.com" />
          </div>
          <div className={styles.field}>
            <label>Pesan</label>
            <textarea rows={5} placeholder="Tulis pesan kamu di sini..." />
          </div>
          <button type="submit" className={styles.btn}>
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}
