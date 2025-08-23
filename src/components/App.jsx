import Header from "./Header";
import FeatureCard from "./FeatureCard";
import iconSupervisor from "../assets/feature-icons/icon-supervisor.svg";
import iconTeamBuilder from "../assets/feature-icons/icon-team-builder.svg";
import iconKarma from "../assets/feature-icons/icon-karma.svg";
import iconCalculator from "../assets/feature-icons/icon-calculator.svg";

const features = [
  {
    name: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: iconSupervisor,
    color: "#45d3d3ff",
  },
  {
    name: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: iconTeamBuilder,
    color: "#ea5353ff",
  },
  {
    name: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: iconKarma,
    color: "#fcaf4aff",
  },
  {
    name: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: iconCalculator,
    color: "#549ef2ff",
  },
];

export default function App() {
  return (
    <>
      <Header />
      {features.map((feature) => (
        <FeatureCard
          key={feature.name}
          name={feature.name}
          description={feature.description}
          icon={feature.icon}
          color={feature.color}
        />
      ))}
    </>
  );
}
