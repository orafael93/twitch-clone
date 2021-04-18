import Nav from "../components/Nav";
import { WrapperMainHome } from "../styles/globals";
import Sidebar from "../components/SideBar";
import WrapperMainContentHome from "../components/MainContentHome";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Nav />
      <WrapperMainHome>
        <Sidebar />
        <WrapperMainContentHome />
      </WrapperMainHome>
    </>
  );
}
