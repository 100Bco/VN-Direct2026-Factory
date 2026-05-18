import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Opportunity } from '@/components/Opportunity';
import { Buyers } from '@/components/Buyers';
import { Program } from '@/components/Program';
import { Benefits } from '@/components/Benefits';
import { Industries } from '@/components/Industries';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="bg-bg-dark text-text-body min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Opportunity />
      <Buyers />
      <Program />
      <Benefits />
      <Industries />
      <About />
      <Footer />
    </main>
  );
}
