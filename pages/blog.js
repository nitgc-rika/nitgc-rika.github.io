import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Blog.module.scss"

export default function Home({ blog }) {
    return (
        <div className={styles.main}>
            <h2>現在開発中です……</h2>
            <ul>
                {blog.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blog" });

    return {
        props: {
            blog: data.contents,
        },
    };
};