export default function Home() {
  return (
    <div className="h-screen text-white bg-slate-900">
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="bg-sky-500 p-6 rounded-lg">First Element</div>
        <div className="bg-red-500 p-6 rounded-lg">Second Element</div>
        <div className="bg-green-500 p-6 rounded-lg row-span-2">Third Element</div>
        <div className="bg-sky-500 p-6 rounded-lg">First Element</div>
        <div className="bg-red-500 p-6 rounded-lg row-span-2">Second Element</div>
        <div className="bg-green-500 p-6 rounded-lg">Third Element</div>
      </div>
    </div>
  );
}
