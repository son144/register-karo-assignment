import Banner from "@/components/bannerSection/Banner";
import Carousel from "@/components/carousel/Carousel";
import Companies from "@/components/companies/Companies";
import Discover from "@/components/discover/Discover";
import Faq from "@/components/faq/Faq";
import FeatureCard from "@/components/features/FeatureCard";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import VirtualAddress from "@/components/virtualAddress/VirtualAddress";
import WhyOpt from "@/components/whyOpt/WhyOpt";
import WorkspaceCard from "@/components/workspace/WorkspaceCard";
import Image from "next/image";
FeatureCard

export default function Home() {
  return (
<div>
  <Header/>
  <Banner/>
 <FeatureCard/>
 <WorkspaceCard/>
 {/* <Carousel/> */}
 <Discover/>
 <VirtualAddress/>
 <Companies/>
 <WhyOpt/>
 <Faq/>
 <Footer/>
</div>
  );
}
