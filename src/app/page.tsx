export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/stock-images-videos/coffeebeans.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
          <span className="font-bold text-4xl text-white">Home</span>
          <div className="border-dashed border border-zinc-500 w-full h-10 rounded-lg bg-white bg-opacity-10"></div>

          <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg bg-white bg-opacity-10"></div>

          <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg bg-white bg-opacity-10"></div>
          <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg bg-white bg-opacity-10"></div>
          <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg bg-white bg-opacity-10"></div>
        </div>
      </div>
    </>
  );
}
