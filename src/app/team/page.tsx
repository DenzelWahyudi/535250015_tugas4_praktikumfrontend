import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import styles from "./team.module.css";

export const teamMembers = [
  { id: "1", name: "Budi", role: "Direktur", joined: "2023" },
  { id: "2", name: "Denzel", role: "Kepala Dapur", joined: "2023" },
  { id: "3", name: "Ironman", role: "Manajer Logistik", joined: "2024" },
  { id: "4", name: "Spiderman", role: "Admin & Pelaporan", joined: "2024" },
];

export default function TeamPage() {
  return (
    <div className={styles.container}>
      <SectionTitle
        title="Tim Kami"
        subtitle="Orang-orang di balik dapur PT Makan Bergizi Gratis. Setiap Profil bisa di klik!"
      />
      <div className={styles.grid}>
        {teamMembers.map((member) => (
          <Link href={`/team/${member.id}`} key={member.id} className={styles.card}>
            <div className={styles.avatar}>{member.name.charAt(0)}</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
