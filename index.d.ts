import { Embed, IDaumParams, Open } from "./kakaoPostcode";

declare global {
  namespace daum {
    class Postcode {
      constructor(params: IDaumParams);

      open(open?: Open): void;

      embed(element: HTMLElement, embed?: Embed): void;
    }
  }
}
