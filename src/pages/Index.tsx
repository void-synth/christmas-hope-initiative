import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import FoodPack from "@/components/FoodPack";
import TargetReach from "@/components/TargetReach";
import ExecutionPlan from "@/components/ExecutionPlan";
import ImpactProjection from "@/components/ImpactProjection";
import SecurityLogistics from "@/components/SecurityLogistics";
import AboutFoundation from "@/components/AboutFoundation";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <FoodPack />
      <TargetReach />
      <ExecutionPlan />
      <SecurityLogistics />
      <ImpactProjection />
      <AboutFoundation />
      <ClosingSection />
    </main>
  );
};

export default Index;
