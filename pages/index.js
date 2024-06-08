import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";
import Head from "next/head";

const Container = dynamic(
  () => import('@/components/HomePageComponents/Container'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    )
  }
)
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./icon.ico" type="image/x-icon" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>

        <meta
          name="description"
          content="Giri Info Tech: Your One-Stop Digital Solution Provider. Elevate your online presence with our comprehensive range of digital services. From web design and development to digital marketing, SEO, and beyond, we are dedicated to delivering tailored solutions that empower your business in the digital landscape. Explore the synergy of innovation and expertise with Giri Info Tech – where every digital need finds its solution." />

        <meta
          name="keywords"
          content="Giri Info Tech" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/cloud.jfif" />

        <meta
          name="author"
          content="Nimain Chandra Giri, Ankit Mohanta, Shruti Chakrabarty"
        />

        <title>Giri Info Tech Pvt. Ltd.</title>
      </Head>
      <Container />
    </>
  );
}
