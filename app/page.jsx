export default function Home() {
  return (
    <div className="flex h-screen text-white bg-slate-900">
      <div className="z-20 rounded-full bg-pink-500 p-3 absolute top-0 left-0 border border-white">
        <p className="text-center">03</p>
      </div>
      <div className="z-10 rounded-full bg-pink-500 p-3 absolute top-0 left-10 border border-white">
        <p className="text-center">02</p>
      </div>
      <div className="z-0 rounded-full bg-pink-500 p-3 absolute top-0 left-20 border border-white">
        <p className="text-center">01</p>
      </div>
    </div>
  );
}
