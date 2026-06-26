export default function Tag({ children }) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
      {children}
    </span>
  );
}
