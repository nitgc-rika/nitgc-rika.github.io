import Link from "next/link";
import styles from "../styles/Blog.module.scss"

export default function Home() {
    return (
        <div className={styles.main}>
            <h2>現在開発中です……</h2>
            <Link href={"/about/electronic"}>電子工作班の紹介</Link>
        </div>
    );
}