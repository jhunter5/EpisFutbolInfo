import Navbar from "./componets/navbar";
import VideoBackground from "./componets/videoBackground";
import MainInfo from "./componets/mainInfo";
import MusicPlayer from "./componets/musicPlayer";
import Footer from "./componets/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <VideoBackground source="/background.mp4" />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <MainInfo />
      </main>
      <Footer />
      <MusicPlayer source="/athmospheric.wav"/>
      
    </>
  );
}
