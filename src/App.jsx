import data from "./data.json";
import { Header } from "./components/Header"
import { Album } from "./Components/Album";
import "./App.css";

//console.log(data);

export const App = () => {
  const albums = data.albums.items;

  const renderAlbums = () => albums.map(({ id, name, images, external_urls, artists }) => (
    <Album
      key={id}
      albumName={name}
      imgSrc={images[0].url}
      albumUrl={external_urls.spotify}
      artists={artists.name}
    />
  ));

const renderContent = renderAlbums();
 return (
  <div className="app">
    <Header />
    <section className="album-section">{renderContent}</section>
  </div>
)
}