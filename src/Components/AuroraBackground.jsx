function AuroraBackground() {
  return (
    <div className="hue-cycle pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="drift-a aurora-blob absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600 opacity-40 blur-3xl" />
      <div className="drift-b aurora-blob absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500 opacity-30 blur-3xl" />
      <div className="drift-c aurora-blob absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-pink-500 opacity-30 blur-3xl" />
    </div>
  )
}

export default AuroraBackground
