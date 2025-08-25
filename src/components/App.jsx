import Header from "./Header";
import FeatureCard from "./FeatureCard";
import Features from "./Features";
import features from "../data/features";

export default function App() {
  return (
    <>
      <Header />
      <Features>
        {features.map((feature) => (
          <FeatureCard
            key={feature.name}
            name={feature.name}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
            isInCenter={feature.isInCenter}
          />
        ))}
      </Features>
    </>
  );
}
