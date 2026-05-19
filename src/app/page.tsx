import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Opportunity } from '@/components/Opportunity';
import { Buyers } from '@/components/Buyers';
import { Schedule } from '@/components/Schedule';
import { Process } from '@/components/Process';
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
      <Schedule />
      <Process />
      <About />
      <Footer />
    </main>
  );
}
