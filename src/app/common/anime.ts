interface ImageUrls {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  }
  
  interface TrailerImages {
    image_url: string | null;
    small_image_url: string | null;
    medium_image_url: string | null;
    large_image_url: string | null;
    maximum_image_url: string | null;
  }
  
  interface Trailer {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: TrailerImages;
  }
  
  interface Title {
    type: string;
    title: string;
  }
  
  interface DateDetails {
    day: number;
    month: number;
    year: number;
  }
  
  interface Aired {
    from: string;
    to: string;
    prop: {
      from: DateDetails;
      to: DateDetails;
    };
    string: string;
  }
  
  interface Broadcast {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  }
  
  interface ProducerLicensorStudio {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface Genre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  export interface AnimeData {
    mal_id: number;
    url: string;
    images: ImageUrls;
    trailer: Trailer;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string | null;
    year: number | null;
    broadcast: Broadcast;
    producers: ProducerLicensorStudio[];
    licensors: ProducerLicensorStudio[];
    studios: ProducerLicensorStudio[];
    genres: Genre[];
    explicit_genres: any[];
    themes: Genre[];
    demographics: any[];
  }
  
  interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  }
  
  export interface AnimeResponse {
    pagination: Pagination;
    data: AnimeData[];
  }