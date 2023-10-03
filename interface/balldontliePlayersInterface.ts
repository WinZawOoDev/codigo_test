import { playerInterface } from "./playerInterface";

export interface balldontliePlayersInterface {
  data: playerInterface[];
  meta: {
    total_pages: number;
    current_page: number;
    next_page: number;
    per_page: number;
    total_count: number;
  };
}
