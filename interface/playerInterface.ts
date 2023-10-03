import { teamInterface } from "./teamInterface";

export interface playerInterface {
  id?: number;
  first_name: string;
  height_feet: null | undefined | string;
  height_inches: null | undefined | string;
  last_name: string;
  position: string;
  team: teamInterface;
  weight_pounds: null | undefined | string;
}
