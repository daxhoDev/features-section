export default function FeatureCard({ name, description, icon, color }) {
  return (
    <article>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={icon} alt=""></img>
    </article>
  );
}
