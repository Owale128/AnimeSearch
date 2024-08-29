import { useState } from "react";
import { IAnime } from "../model/IAnime"
import Modal from "./Modal";
import '../sass/animeDetail.scss'

interface IAnimeDetail {
  animeDetail: IAnime;
}

const AnimeDetail = ({animeDetail}: IAnimeDetail) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  if(!animeDetail) return <p>No details available</p>

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="animeDetailContainer">
      <h2>{animeDetail.title}</h2>
      <img src={animeDetail.images.jpg.image_url} alt={animeDetail.title} />
      <p>{animeDetail.synopsis}</p>

      {animeDetail.trailer && animeDetail.trailer.embed_url && (
        <>
        <button onClick={openModal}>Watch trailer</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <iframe
              width="560"
              height="315"
              src={animeDetail.trailer.embed_url}
              title={animeDetail.title}
              allowFullScreen
            ></iframe>
        </Modal>
        </>
      )}
      
    </div>
  )
}

export default AnimeDetail
