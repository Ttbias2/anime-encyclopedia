// Interface for the entire API response
export interface ApiResponse {
  data: CharacterData[];
}

// Interface for each character data entry
export interface CharacterData {
  character: CharacterDetails;
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
}

// Interface for character details
interface CharacterDetails {
  mal_id: number;
  name: string;
  url: string;
  images: CharacterImages;
}

// Interface for character images
interface CharacterImages {
  jpg: { image_url: string };
  webp: { image_url: string; small_image_url: string };
}

// Interface for voice actor data
interface VoiceActor {
  person: VoiceActorDetails;
  language: string;
}

// Interface for voice actor details
interface VoiceActorDetails {
  mal_id: number;
  name: string;
  url: string;
  images: { jpg: { image_url: string } };
}