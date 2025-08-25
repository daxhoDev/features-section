export default function Features({ children }) {
  return (
    <div className="w-[min(95vw,70rem)] px-6 grid gap-8 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 items-center grid-flow-row lg:grid-flow-col justify-items-center">
      {children}
    </div>
  );
}
