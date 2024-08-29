import { useState } from "react";
import { IAnime } from "../model/IAnime"
import Modal from "./Modal";
import '../sass/anime.scss';

interface IAnimeProps {
    anime: IAnime;
}

const Anime = ({anime}: IAnimeProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="animeContainer">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <h2>{anime.title}</h2>

      {anime.trailer && anime.trailer.embed_url && (
        <>
        <button onClick={openModal}>Watch trailer</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <iframe
              width="560"
              height="315"
              src={anime.trailer.embed_url}
              title={anime.title}
              allowFullScreen
            ></iframe>
        </Modal>
        </>
      )}
    </div>
  )
}

export default Anime
