import { HeroSection, FeaturedSection } from '../components/home';

export const Home = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-x-hidden">
      <HeroSection />
      <FeaturedSection />
    </div>
  );
};
