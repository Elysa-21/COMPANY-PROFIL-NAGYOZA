export default function Logo({
  className = "h-12",
}: {
  className?: string;
}) {
  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="Nagyoza Logo"
        className={className}
      />
    </div>
  );
}
