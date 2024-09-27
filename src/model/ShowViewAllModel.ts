export interface LocalizedModel {
  ar: string;
  en: string;
}

export interface TagModel {
  id: number;
  name: LocalizedModel;
}

export interface ShowModel {
  id: number;
  name: LocalizedModel;
  theater_id: number;
  cast_name: string;
  show_date: string;
  show_time: string;
  booking_available: boolean;
  theater_name: string;
  link: string;
  poster: string;
  author: string;
  director: string;
  tags: TagModel[];
}
