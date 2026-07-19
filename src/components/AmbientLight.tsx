export function AmbientLight() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="ambient-light absolute left-1/4 top-0 h-[70vh] w-[70vh] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,154,165,0.18) 0%, rgba(198,161,128,0.08) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
