import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const neueHaas = localFont({
  src: "./fonts/NeueHaasUnicaPro.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
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

const EMAIL = "mailto:v@toddagriscience.com";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center bg-white text-neutral-900">
      <div
        className={`${neueHaas.className} w-[95%] sm:w-full px-6 text-sm/[21px] font-normal md:ml-[12vw]`}
      >
        <div className="space-y-5 max-w-[33rem]">
          <p className="mb-5.25">yo! i&apos;m Vincent</p>

          <p>
            i&apos;m the founder and ceo of{" "}
            <Link href="https://toddagriscience.com">
            <Image
              src="/todd-wordmark.png"
              alt="TODD"
              width={70}
              height={24}
              className="inline-block h-[0.72em] w-auto align-baseline"
            /></Link>
            , the future of agriculture. i left school in 6th grade, studied
            ethnobotany at{" "}
            <Link href="https://ummuseumanthro.wordpress.com">
            <Image
              src="/umich-logo.png"
              alt=""
              width={17}
              height={17}
              className="inline-block h-[1.3em] w-[1.3em] align-[-0.15em]"
            />{" "}
            <span className="underline">umich</span></Link> from 13-18 y/o, never went to high school, bootstrapped the
            company with revenue from seed sales, and hired my first 2 interns
            at 17.
          </p>

          <p>
            I previously wrote a manuscript on every food significant plant
            used by indigenous tribe in North America and built one of the
            largest private seed collections in the US, and the largest
            indigenous seed collection in the world in partnership with the
            USDA and NMSU.
          </p>

          <p>
            we believe the most important role in society is the people growing
            food. everyone eats. and that sustainable agriculture will be the
            path to revitalizing the industry, improving consumer health and
            healing the environment.
          </p>
        </div>
        <div className="w-full mt-5.5">
          <p className="w-full">
            we are hiring across software, biochemistry, gtm, and design. i
            also invest.{" "}
            <Link href={EMAIL} className="underline">
              hit me up →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
