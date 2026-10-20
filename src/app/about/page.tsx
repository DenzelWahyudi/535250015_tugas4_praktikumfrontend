import SectionTitle from "@/components/SectionTitle";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <SectionTitle
        title="Tentang Kami"
        subtitle="Sedikit cerita soal PT Makan Bergizi Gratis"
      />

      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Siapa Kami?</h3>
          <p>
            PT Makan Bergizi Gratis adalah vendor katering yang terdaftar sebagai mitra
            resmi program Makan Bergizi Gratis (MBG).
          </p>
          <p>
            Sebelum ikut program MBG, kami sudah lebih dulu bergerak di bidang
            katering korporat dan logistik makanan. Jadi pas ada kesempatan ini,
            kami langsung daftarkan diri ke BPGM.
          </p>
        </div>

        <div className={styles.text}>
          <h3>Komitmen Kami</h3>
          <p>
            Kami ikut program ini bukan cuman untuk dapet duit. Kami percaya bahwa
            anak-anak yang makan dengan baik bisa belajar dengan lebih baik juga.
          </p>

          <h3 style={{ marginTop: "16px" }}>Yang Kami Jaga</h3>
          <ul>
            <li>Kebersihan dapur dan proses produksi</li>
            <li>Ketepatan waktu pengiriman ke sekolah</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
