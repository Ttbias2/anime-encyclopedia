interface CharacterImage {
    jpg: {
      image_url: string;
      small_image_url?: string;
      large_image_url?: string;
    };
    webp: {
      image_url: string;
      small_image_url?: string;
      large_image_url?: string;
    };
  }
  
  interface Anime {
    role: string;
    anime: {
      mal_id: number;
      url: string;
      images: CharacterImage;
      title: string;
    };
  }
  
  interface Manga {
    role: string;
    manga: {
      mal_id: number;
      url: string;
      images: CharacterImage;
      title: string;
    };
  }
  
  interface VoiceActor {
    person: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
    language: string;
  }
  
  interface CharacterData {
    mal_id: number;
    url: string;
    images: CharacterImage;
    name: string;
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
    anime: Anime[];
    manga: Manga[];
    voices: VoiceActor[];
  }
  