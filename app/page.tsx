import Portfolio from "@/components/layout/Portfolio";
import Sandip from "@/components/layout/Sandip";
import WorkExperience from "@/components/layout/WorkExperience";
import DesktopNav from "@/components/navigation/desktop-nav";
import Footer from "@/components/navigation/footer";
import MobileNav from "@/components/navigation/mobile-nav";

export default function Home() {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <Sandip />
      <Portfolio />
      <WorkExperience />
      <Footer />
    </div>
  );
}
