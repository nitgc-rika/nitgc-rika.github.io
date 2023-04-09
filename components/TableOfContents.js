import { Link as Scroll } from 'react-scroll'
import styles from "../styles/Toc.module.scss";

export const TableOfContents = ({ toc }) => {
    return (
      <div className={styles.toc}>
        <p className="TableOfContentsHead">目次</p>
        <ul>
          {toc.map(data => (
            <li key={data.id} className={`${data.name} ${styles.content}`}>
              <Scroll to={data.id} smooth={true} duration={600} offset={-71}>
                {data.text}
              </Scroll>
            </li>
          ))}
        </ul>
      </div>
    );
  };