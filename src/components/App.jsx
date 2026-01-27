import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 min-h-screen bg-slate-50">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
