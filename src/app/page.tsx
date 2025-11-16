import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Team from '@/components/sections/team';
import Testimonials from '@/components/sections/testimonials';
import Faq from '@/components/sections/faq';
import Contact from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}
