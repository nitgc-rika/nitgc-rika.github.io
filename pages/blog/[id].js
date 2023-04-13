import Head from "next/head";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc);
dayjs.extend(timezone);

import { client } from "../../libs/client";
import { renderToc } from "@/libs/render-toc";
import styles from "../../styles/Article.module.scss";
import { TableOfContents } from "../../components/TableOfContents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function BlogId({ blog }) {
  const toc = renderToc(blog.content);

  const meta = (() => {
    switch (blog.group[0]) {
      case "化学班":
        return ["nitgc_chem", "chemical.jpg"];
      case "電子工作班":
        return ["nitgc_rika", "electronic.jpg"];
      case "生物班":
        return ["nitgc_rika", "biology.jpg"];
    }
  })();

  return (
    <>
      <Head>
        <title>{`${blog.title} | 群馬高専理科部`}</title>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${meta[0]}`} />
        <meta property="og:url" content={`https://nitgc-rika.github.io/introduction/${blog.id}.html`} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={`https://nitgc-rika.github.io/image/${meta[1]}`} />
      </Head>

      <main className={styles.main}>
        <div className={styles.info}>
          <p className={styles.tag}>
            <FontAwesomeIcon icon={faTag} />
            {blog.tag}
          </p>

          <div className={styles.date}>
            <p className={styles.publishedAt}>
              <FontAwesomeIcon icon={faClock} />
              {dayjs.utc(blog.publishedAt).tz("Asia/Tokyo").format("YYYY/MM/DD")}
            </p>

            <p className={styles.updatedAt}>
              <FontAwesomeIcon icon={faRotate} />
              {dayjs.utc(blog.updatedAt).tz("Asia/Tokyo").format("YYYY/MM/DD")}
            </p>
          </div>
        </div>

        <h1 className={styles.title}>
          {blog.title}
        </h1>

        <p className={styles.writer}>
          <FontAwesomeIcon icon={faPen} />
          {blog.writer} ({blog.group})
        </p>

        <TableOfContents toc={toc} />

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