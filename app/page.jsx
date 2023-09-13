export default function Home() {
  return (
    <div className="h-screen text-white bg-slate-900">
      <div className="grid grid-cols-4 gap-1">
        <div className="bg-sky-500 p-6 rounded-lg">First Element</div>
        <div className="bg-red-500 p-6 rounded-lg col-span-2">Second Element</div>
        <div className="bg-green-500 p-6 rounded-lg">Third Element</div>
        <div className="bg-sky-500 p-6 rounded-lg">First Element</div>
        <div className="bg-red-500 p-6 rounded-lg col-start-2 col-end-4">Second Element</div>
        <div className="bg-green-500 p-6 rounded-lg">Third Element</div>
      </div>
    </div>
  );
}
