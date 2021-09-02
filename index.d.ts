import { Embed, IParamsConstructor, Open } from "./kakaoPostcode";
type KakaoInstance = daum.Postcode;
export { Embed, IParamsConstructor, Open, KakaoInstance };

declare global {
  namespace daum {
    class Postcode {
      constructor(params: IParamsConstructor);

      open(open?: Open): void;

      embed(element: HTMLElement, embed?: Embed): void;
    }
  }
}
