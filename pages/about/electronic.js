import Head from "next/head"
import Image from "next/image"

import cover from "../../public/about/electronic/cover.jpg"
import cpu from "../../public/about/electronic/cpu.svg"
import meeting from "../../public/about/electronic/meeting.svg"
import inspiration from "../../public/about/electronic/inspiration.svg"
import ele_parts from "../../public/about/electronic/ele_parts.png"
import micon from "../../public/about/electronic/micon.png"
import three_d from "../../public/about/electronic/3dprinter.png"

import styles from "../../styles/About.module.scss"

export default function Home() {
    return (
        <>
            <Head>
                <title>電子工作班 | 群馬高専理科部</title>

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@nitgc_rika" />
                <meta name="twitter:title" content="電子工作班 | 群馬高専理科部" />
                <meta property="og:description" content="群馬高専理科部 電子工作班の紹介ページです。" />
                <meta property="og:image" content="https://nitgc-rika.github.io/about/electronic/cover.jpg" />
            </Head>

            <div className={styles.title}>
                <Image src={cover} priority alt="カバー画像" />
                <h2>電子工作班</h2>
            </div>

            <main className={styles.main}>
                <p>理科部電子工作班の紹介をします。</p>

                <h3>どんな部活？</h3>
                <div className={`${styles.cards} ${styles.kind}`}>
                    <div>
                        <div>
                            <Image src={cpu} alt="電子工作" />
                        </div>
                        <div>
                            <p>電子工作</p>
                            <p>各自、自由に電子工作や実験を行います。</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Image src={meeting} alt="助け合う" />
                        </div>
                        <div >
                            <p>助け合う</p>
                            <p>ひとりで解決できないことも、仲間と協力して解決を目指します。</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Image src={inspiration} alt="学ぶ" />
                        </div>
                        <div>
                            <p>学ぶ</p>
                            <p>わからないところを教え合うことで知識をつけます。</p>
                        </div>
                    </div>
                </div>

                <h3>何ができる？</h3>
                <div className={`${styles.cards} ${styles.whatdo}`}>
                    <div>
                        <div>
                            <Image src={ele_parts} alt="電子工作" />
                        </div>
                        <div>
                            <p>電子工作</p>
                            <p>電子部品を多く揃えているので、気軽に回路実験や回路制作を行うことができます。</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Image src={micon} alt="マイコン" />
                        </div>
                        <div>
                            <p>マイコン</p>
                            <p>ArduinoとデスクトップPCがあるので、マイコンを学ぶことができます。</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Image src={three_d} alt="3Dプリント" />
                        </div>
                        <div>
                            <p>3Dプリント</p>
                            <p>部室に3Dプリンターを設置しています。</p>
                        </div>
                    </div>
                </div>

                <h3>活動日</h3>
                <p>月、水、金が基本的な活動日です。</p>
                <p>強制参加ではありません。また、この曜日以外にも自由に部活動しても構いません。</p>

                <h3>その他</h3>
                <p>男子学生8名、女子学生2名で活動しています。</p>
                <p>
                    電子工作がしたい、電子工作に興味があるという方でしたらどなたでも入部を歓迎します。<br />
                    入ろうか悩みましたら、気軽に部室までお越しください、執拗な勧誘等はしませんのでお話できたら嬉しいです。
                </p>
                <p>兼部は可能です。</p>
                <p>質問等ありましたら以下の連絡先をご活用ください。</p>
                <ul>
                    <li>Twitter : <a href="https://twitter.com/nitgc_rika">@nitgc_rika</a></li>
                    <li>マシュマロ : <a href="https://marshmallow-qa.com/nitgc_rika?utm_medium=url_text&utm_source=promotion">リンク</a>
                    </li>
                    <li>Gmail : rikabu.nitgc@gmail.com</li>
                </ul>
            </main>
        </>
    )
}