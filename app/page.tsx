import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuickStats } from "@/components/QuickStats";
import { FilterSection } from "@/components/FilterSection";
import { FeaturedCity } from "@/components/FeaturedCity";
import { CityCardsGrid } from "@/components/CityCardsGrid";
import { RecentReviews } from "@/components/RecentReviews";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <QuickStats />
        <FilterSection />
        <FeaturedCity />
        <CityCardsGrid />
        <RecentReviews />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
