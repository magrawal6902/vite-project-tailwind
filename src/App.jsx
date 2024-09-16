function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="text-3xl text-red-400 font-bold underline">
        {import.meta.env.VITE_API_KEY}
      </h1>
    </div>
  );
}

export default App;
