import Head from "next/head";
import { client } from "../../libs/client";
import styles from "../../styles/Article.module.scss"

export default function BlogId({ blog }) {
  return (
    <>
      <Head>
        <title>{`${blog.title} | 群馬高専理科部`}</title>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ユーザー名" />
        <meta property="og:url" content={`https://nitgc-rika.github.io/introduction/${blog.id}.html`} />
        <meta property="og:description" content="記事の要約" />
        <meta property="og:image" content="画像のURL" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          {blog.title}
        </h1>

        <p className={styles.publishedAt}>
          {blog.publishedAt}
        </p>
        
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
          className={styles.post}
        />
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};