export default function Features({ children }) {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center gap-8 px-6 md:grid md:grid-cols-3 md:grid-rows-2 grid-flow-row md:grid-flow-col w-[min(95vw,75rem)]">
      {children}
    </div>
  );
}
