import Card from "@/components/general/Card";

function Home() {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <p className="font-bold text-gray-300 text-xl">Home Feed</p>
        <div className="flex items-center gap-2 bg-black/80 px-2 py-1 rounded-lg">
          <p className="text-gray-400 text-sm">All</p>
          <img src="assets/icons/filter.svg" alt="" className="h-5 w-5" />
        </div>
      </div>
      <div className="grid my-8 md:grid-cols-3 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
