import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import ProblemTree from '@/components/sections/problem-tree';
import SwotMatrix from '@/components/sections/swot-matrix';
import StrategicObjectives from '@/components/sections/strategic-objectives';
import Clients from '@/components/sections/clients';
import ProcessMap from '@/components/sections/process-map';
import Services from '@/components/sections/services';
import Team from '@/components/sections/team';
import Areas from '@/components/sections/areas';
import Testimonials from '@/components/sections/testimonials';
import Interdependence from '@/components/sections/interdependence';
import Contact from '@/components/sections/contact';
import MissionVision from '@/components/sections/mission-vision';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ProblemTree />
        <SwotMatrix />
        <MissionVision />
        <StrategicObjectives />
        <Clients />
        <ProcessMap />
        <Team />
        <Areas />
        <Services />
        <Testimonials />
        <Interdependence />
        <Contact />
      </main>
    </div>
  );
}
