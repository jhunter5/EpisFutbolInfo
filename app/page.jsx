import VideoBackground from "./components/videoBackground";
import MainInfo from "./components/mainInfo";
import MusicPlayer from "./components/musicPlayer";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <VideoBackground source="/background.mp4" />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <MainInfo />
      </main>
      <Footer />
      <MusicPlayer source="/athmospheric.wav"/>
    </>
  );
}
