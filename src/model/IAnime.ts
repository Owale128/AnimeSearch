export interface IAnime {
    
    mal_id: number;
    title: string;
    images: {
      jpg: {
        image_url: string; 
      };
    };

    url: string;
    background: string;
    episodes: number;
    synopsis: string
    type: string

    genres: {
        mal_id: number;
        name: string;
        type: string;
        url: string;
    }

    trailer: {
        embed_url: string;
        url: string;
    }
}