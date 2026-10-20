import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "../page";
import styles from "./detail.module.css";

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/team" className={styles.back}>
        ← Kembali ke Tim
      </Link>
      <div className={styles.card}>
        <div className={styles.avatar}>{member.name.charAt(0)}</div>
        <h2>{member.name}</h2>
        <p className={styles.role}>{member.role}</p>
        <hr className={styles.divider} />
        <div className={styles.info}>
          <div>
            <span>Bergabung sejak</span>
            <strong>{member.joined}</strong>
          </div>
          <div>
            <span>Divisi</span>
            <strong>{member.role}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
