export default function FeatureCard({
  name,
  description,
  icon,
  isInCenter,
  color,
}) {
  return (
    <article
      className={`rounded-md shadow-lg bg-red overflow-hidden w-[min(100%,23rem)] ${
        isInCenter
          ? "lg:col-start-2 lg:col-end-3"
          : "lg:row-start-1 lg:row-end-3"
      }`}
    >
      <div className={`h-1 bg-${color}`}></div>
      <div className="p-7 flex flex-col gap-2 bg-white">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-grey-400 mb-6">{description}</p>
        <img
          src={icon}
          alt=""
          className="self-end"
          width="64"
          height="64"
        ></img>
      </div>
    </article>
  );
}
