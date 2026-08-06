import type { Metadata } from "next";
import { Crimson_Text, EB_Garamond } from "next/font/google";
import s from "./page.module.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-eb-garamond",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  title: "vincent todd",
  description: "Vincent Todd. 19 la/chi",
  openGraph: {
    title: "vincent todd",
    description: "Vincent Todd. 19 la/chi",
    url: "https://www.vincenttodd.com/",
    type: "website",
  },
};

const EMAIL = "mailto:ir@vincenttodd.com";

export default function Home() {
  return (
    <div className={`${ebGaramond.variable} ${crimsonText.variable} ${s.page}`}>
      <header className={s.header}>
        <a className={s.siteTitle} href="/">
          vincent todd
        </a>
        <nav className={s.nav}>
          <a className={s.navItem} href="/" aria-current="page">
            me
          </a>
        </nav>
      </header>

      <main className={s.main}>
        <div className={s.container}>
          <h1 className={s.heading}>
            Vincent Todd.<span className={s.headingSpace}>{"  "}</span>
            <span className={s.headingSub}>19 la/chi</span>
          </h1>

          <p className={`${s.p} ${s.tight}`}>
            <span className={s.hl}>
              i&#39;m building the future of agriculture in America.{" "}
            </span>
          </p>

          <p className={`${s.p} ${s.tight}`}>
            <span className={s.hl}>
              dropped out at 6th grade, studied ethnobotany @ umich from 13-18
              y/o, never been to high school.
            </span>
          </p>

          <p className={s.p}>
            <br />
            prev wrote 400+ page manuscript on every food significant plant
            used by indigenous tribe in North America.
          </p>

          <p className={s.p}>
            built and maintain one of the largest private seed collections in
            the US, and the largest indigenous seed collection in the world in
            partnership with the USDA and NMSU.
          </p>

          <p className={s.p}>
            hired my first 2 interns at 17, raised pre-seed @ $40m valuation at
            18, hit 1m organic views in 7 months.
          </p>

          <p className={s.p}>ran a media agency w/ gen z celebrities.</p>

          <p className={s.p}>created Watr app.</p>

          <p className={s.p}>
            {" "}
            <br />
            <br />
            <b className={s.hl}>let&#39;s connect:</b>{" "}
            <a
              className={s.link}
              href="https://x.com/realvincenttodd"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <span className={s.linkSep}>, </span>
            <a
              className={s.link}
              href="https://www.linkedin.com/in/vincenttodd"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className={s.linkSep}>, </span>
            <a
              className={s.link}
              href="https://www.instagram.com/realvincenttodd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>

          <p className={s.p}>
            <b>wanna chat?</b>{" "}
            <a className={s.link} href={EMAIL}>
              hit me up
            </a>
            .
          </p>

          <p className={s.p}>
            i write angel checks to young founders, so reach out.
          </p>
        </div>
      </main>
    </div>
  );
}
