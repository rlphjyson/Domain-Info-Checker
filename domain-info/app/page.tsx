import SearchContainer from "./components/SearchContainer";


export default function Home() {
  return (
    <main className="max-w-6xl mx-auto mt-10">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Domain Info Checker</h1>
        <div className="flex flex-row  justify-center gap-2 ">


        </div>
        <SearchContainer />

      </div>

    </main>
  );
}
