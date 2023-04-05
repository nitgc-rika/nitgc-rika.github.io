import Link from "next/link";
// import { client } from "@/libs/client";
import styles from "../styles/Index.module.scss"

export default function Home() {
    return (
        <div className={styles.main}>
            <h2>現在開発中です……</h2>
            <Link href={"/about/electronic"}>電子工作班の紹介ページはこちらです。</Link>
        </div>
    );
}

// export const getStaticProps = async () => {
//     const data = await client.get({ endpoint: "blog" });

//     return {
//         props: {
//             blog: data.contents,
//         },
//     };
// };