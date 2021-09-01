import { useState, useEffect } from "react";
import Player from "./components/player/Player";

function App() {
  const [songs] = useState([
    {
      title: "Raatan Lambiyan",
      artist: "Jubin Nautiyal, Asees Kaur",
      img_src: "./image/Raataan Lambiyan.jpg",
      src: "./songs/Raatan Lambiyan.mp3",
    },
    {
      title: "Bepanah Ishq",
      artist: "Payal Dev, Yasser Desai",
      img_src: "./image/Bepanah Ishq.jpg",
      src: "./songs/Bepanah Ishq.mp3",
    },
    {
      title: "Sun Sonio",
      artist: "Tarun Panchal, Renuka Panwar",
      img_src: "./image/Sun Sonio.jpg",
      src: "./songs/Sun Sonio.mp3",
    },
    {
      title: "Bahut Aayi Gayi Yaadein",
      artist: "Jubin Nautiyal",
      img_src: "./image/Tum Hi Aana.jpg",
      src: "./songs/Bahut Aayi Gayi Yaadein.mp3",
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./image/care-ni-karda.jpg",
      src: "./songs/Care Ni Karda.mp3",
    },
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: "./image/burjkalifa.jpg",
      src: "./songs/BurjKhalifa.mp3",
    },
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: "./image/titaliya.jpg",
      src: "./songs/Titliaan Warga.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}
export default App;
