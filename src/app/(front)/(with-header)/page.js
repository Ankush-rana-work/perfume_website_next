import HeroBanner from "@/components/front/HeroBanner";
import TopCategories from "@/components/front/TopCategories";
import NewArrival from "@/components/front/NewArrival";
import PopularItem from "@/components/front/PopularItem";
import CustomerReviews from "@/components/front/CustomerReviews";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/options";


export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <>
      <HeroBanner />
      <section className="relative md:py-24 py-16">
        {/* top category */}
        <TopCategories />
        {/* New arrival */}
        <NewArrival />
        {/* popular Item */}
        <PopularItem />
        {/* customer reviews */}
        <CustomerReviews/>
      </section>

    </>
  );
}
