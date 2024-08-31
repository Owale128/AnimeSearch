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

    duration: string;

    trailer: {
        embed_url: string;
        url: string;
    }
}