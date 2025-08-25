import iconSupervisor from "../assets/feature-icons/icon-supervisor.svg";
import iconTeamBuilder from "../assets/feature-icons/icon-team-builder.svg";
import iconKarma from "../assets/feature-icons/icon-karma.svg";
import iconCalculator from "../assets/feature-icons/icon-calculator.svg";

export default [
  {
    name: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: iconSupervisor,
    color: "cyan",
  },
  {
    name: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: iconTeamBuilder,
    color: "red",
    isInCenter: true,
  },
  {
    name: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: iconKarma,
    color: "orange",
    isInCenter: true,
  },
  {
    name: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: iconCalculator,
    color: "blue",
  },
];
