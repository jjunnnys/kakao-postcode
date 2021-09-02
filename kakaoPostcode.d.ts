type InitPostCode = {
  /**
   * 우편번호
   */
  zonecode: number;
  /**
   * 기본주소
   */
  address: string;
  /**
   * 기본 영문 주소
   */
  addressEnglish: string;
  /**
   * 검색된 기본 주소 타입: R(도로명), J(지번)
   */
  addressType: "R" | "J";
  /**
   * 검색 결과에서 사용자가 선택한 주소의 타입
   */
  userSelectedType: "R" | "J";
  /**
   * 연관 주소에서 "선택 안함" 부분을 선택했을때를 구분할 수 있는 상태변수
   */
  noSelected: "Y" | "N";
  /**
   * 검색 결과에서 사용자가 선택한 주소의 언어 타입: K(한글주소), E(영문주소)
   */
  userLanguageType: "K" | "E";
  /**
   * 도로명 주소
   */
  roadAddress: string;
  /**
   * 영문 도로명 주소
   */
  roadAddressEnglish: string;
  /**
   * 지번 주소
   */
  jibunAddress: string;
  /**
   * 영문 지번 주소
   */
  jibunAddressEnglish: string;
  /**
   * '지번주소'에 매핑된 '도로명주소'가 여러개인 경우, 사용자가 '선택안함' 또는 '지번주소'를 클릭했을 때 연관된 도로명 주소 중 임의로 첫번째 매핑 주소를 넣어서 반환합니다.
   */
  autoRoadAddress: string;
  /**
   * autoJibunAddress의 영문 지번 주소
   */
  autoRoadAddressEnglish: string;
  /**
   * 건물관리번호
   */
  buildingCode: string;
  /**
   * 건물명
   */
  buildingName: string;
  /**
   * 공동주택 여부
   */
  apartment: "Y" | "N";
  /**
   * 도/시 이름
   */
  sido: string;
  /**
   * 도/시 이름의 영문
   */
  sidoEnglish: string;
  /**
   * 시/군/구 이름
   */
  sigungu: string;
  /**
   * 시/군/구 이름의 영문
   */
  sigunguEnglish: string;
  /**
   * 시/군/구 코드
   */
  sigunguCode: string;
  /**
   * 도로명 코드, 7자리로 구성된 도로명 코드입니다. 추후 7자리 이상으로 늘어날 수 있습니다.
   */
  roadnameCode: string;
  /**
   * 법정동/법정리 코드
   */
  bcode: string;
  /**
   * 도로명 값, 검색 결과 중 선택한 도로명주소의 "도로명" 값이 들어갑니다.(건물번호 제외)
   */
  roadname: string;
  /**
   * 도로명 값, 검색 결과 중 선택한 도로명주소의 "도로명의 영문" 값이 들어갑니다.(건물번호 제외)
   */
  roadnameEnglish: string;
  /**
   * 법정동/법정리 이름
   */
  bname: string;
  /**
   * 법정동/법정리 이름의 영문
   */
  bnameEnglish: string;
  /**
   * 법정리의 읍/면 이름
   */
  bname1: string;
  /**
   * 법정리의 읍/면 이름의 영문
   */
  bname1English: string;
  /**
   * 법정동/법정리 이름
   */
  bname2: string;
  /**
   * 법정동/법정리 이름의 영문
   */
  bname2English: string;
  /**
   * 행정동 이름, 검색어를 행정동으로 검색하고, 검색결과의 법정동과 검색어에 입력한 행정동과 다른 경우에 표시하고, 데이터를 내립니다.
   */
  hname: string;
};

type SizeType = { width: number; height: number };

type CloseTtype = "FORCE_CLOSE" | "COMPLETE_CLOSE";

type SearchType = {
  /**
   * 검색창에 입력된 검색어
   * ex). 판교역로 235
   */
  q?: string;
  /**
   * 검색결과의 총 갯수
   * ex). 1
   */
  count?: number;
};

type Open = {
  /**
   * 검색어
   * */
  q?: string;
  /**
   * 팝업위치 x값
   */
  left?: number;
  /**
   * 팝업위치 y값
   */
  top?: number;
  /**
   * 팝업창의 타이틀
   */
  popupTitle?: string;
  /**
   * 팝업창 구분값
   */
  popupKey?: string;
  /**
   * 자동 닫힘 유무 (기본값 true)
   */
  autoClose?: boolean;
};

type Embed = {
  /**
   * 검색어
   */
  q?: string;
  /**
   * 자동닫힘유무 (기본값 true)
   */
  autoClose?: boolean;
};

export type IParamsConstructor = {
  /**
   * @description
   * 우편번호 검색 결과 목록에서 특정 항목을 클릭한 경우,
   *
   * 해당 정보를 받아서 처리할 콜백 함수를 정의하는 부분입니다.
   *
   * (null값 또는 정의하지 않을 시에 검색은 가능하지만, 결과 항목을 클릭하면 아무 일도 일어나지 않습니다.)
   *
   * 이 함수를 정의할때 넣는 인자에는 우편번호 검색 결과 목록에서 사용자가 클릭한 주소 정보가 들어가게 됩니다.
   */
  oncomplete?(data: InitPostCode): void;
  /**
   * @description
   * 검색 결과로 인해 우편번호 서비스의 화면 크기가 변한 경우, 화면 크기 정보를 받아서 처리할 콜백 함수를 정의하는 부분입니다.
   *
   *
   * size 파라미터의 width의 경우 외부 wrapper DOM의 크기에 영향을 받기 때문에, 최초 렌더링 값으로 유지되며, height 값은 수시로 변하기 때문에 이 height 값을 이용하고자 할때 사용하시는 것을 추천드립니다.
   *
   *
   * `open() 함수를 이용한 팝업모드에서는 지원하지 않습니다.`
   *
   *
   * 만약 임의로 우편번호서비스의 크기를 변하게 하고 싶으실 경우엔 해당 콜백함수보다 직접 정의한 함수를 통하거나 외부 resize/orientation 이벤트를 통해 wrapper DOM의 크기를 직접 변경 하시는 것을 추천드립니다.
   * @param size : {width, height}
   */
  onresize?(size: SizeType): void;
  /**
   * @description
   * 우편번호 찾기 화면을 팝업으로 띄운 후, 검색 결과를 선택하거나, 브라우저의 닫기버튼을 통해 닫았을 때 발생하는 콜백 함수를 정의하는 부분입니다. 이 중 검색결과를 선택한 경우에는 onComplete콜백함수가 완료된 후에 실행되게 됩니다.
   *
   * 이 함수를 정의할때 넣는 인자에는 우편번호 찾기 화면이 어떻게 닫혔는지에 대한 상태 변수가 들어가게 됩니다.
   *
   * `embed() 함수를 이용한 레이어모드에서는 "검색결과를 선택하여 닫힌 경우"에만 실행됩니다.`
   * @param state
   * `FORCE_CLOSE` -> 브라우저의 닫기 버튼을 통해 화면이 닫혔을 경우 (레이어모드에서는 발생하지 않습니다.)
   *
   * `COMPLETE_CLOSE` -> 검색결과를 선택하여 화면이 닫혔을 경우 (팝업/레이어모드의 기본 동작입니다.)
   */
  onclose?(state: CloseTtype): void;
  /**
   * @description
   * 주소를 검색할 경우에 실행되는 콜백함수입니다.
   *
   * `onresize`콜백보다 먼저 실행되며, 검색어와 검색결과에 대한 간단한 정보가 콜백함수의 인자로 넘어가게 됩니다.
   * @param data 검색결과에 대한 검색어와 갯수를 가지고 있는 데이터 객체입니다.
   */
  onsearch?(data: SearchType): void;
  /**
   * @description
   * 우편번호 찾기 팝업 또는 iframe의 고정 넓이를 지정합니다.
   *
   * 기본값은 500이며
   *
   * iframe으로 띄울 경우 비율(%)로도 입력이 가능합니다.
   *
   * 최소값은 300이며 이보다 작은 값을 넣으면 무시됩니다.
   */
  width?: number;
  /**
   * @description
   * 우편번호 찾기 팝업 또는 iframe의 고정 높이를 지정합니다.
   *
   * 기본값은 500이며 iframe으로 띄울 경우 비율(%)로도 입력이 가능합니다.
   *
   * 최소값은 400이며 이보다 작은 값을 넣으면 무시됩니다.
   */
  height?: number;
  /**
   * * @description
   * 우편번호 찾기 화면에서 애니메이션 효과를 줍니다.
   *
   * 기본값은 false로 설정되어 있습니다.
   */
  animation?: boolean;
  /**
   * @description
   * 우편번호 찾기가 실행된 후 검색어 입력박스에 focus를 줍니다.
   *
   * 단, PC 플랫폼에서만 동작하며 Mobile 플랫폼은 지원하지 않습니다. (기본값 `true`)
   *
   * 추가로 focus의 경우 여러 환경적 요인으로 제대로 동작하지 않을 수도 있으니 참고 부탁드립니다.
   */
  focusInput?: boolean;
  /**
   * @description
   * 기본값은 `true`로 설정되어 있으며,
   *
   * 매핑된 주소가 여러개일 경우 사용자가 '선택 안함'을 클릭할 수 있도록 합니다.
   *
   * 또한 연관주소를 선택하지 않고 메인주소를 선택하더라도 연관주소 중 첫번째 항목이 자동으로 데이터에 들어가게 됩니다.
   *
   * 데이터는 `oncomplete` 인자 중 `autoRoadAddress` 또는 `autoJibunAddress` 항목에 첫번째 매핑 주소가 들어갑니다.
   *
   * `false`로 설정을 하면 '선택 안함'이라는 항목이 노출되지 않고,
   *
   * 사용자가 반드시 매핑된 주소들 중 하나를 선택하도록 할 수도 있습니다.
   *
   * 하지만, 매핑된 주소를 정확히 모르는 사용자에게는 불편을 줄 수 있고, 1:N, M:N 관계의 주소에서는 메인주소가 선택이 되지 않기 때문에,
   *
   * 가급적 사용하지 않기를 권장합니다.
   */
  autoMapping?: boolean;
  /**
   * @description
   * 검색된 주소와 내려가는 데이터의 '시','도' 부분을 축약 표시합니다(한글 주소만 해당). 기본값은 `true`로 설정되어 있습니다.
   *
   * (서울특별시 -> 서울, 광주광역시 -> 광주, 전라북도 -> 전북, 단, '세종특별자치시' '제주특별자치도'는 지자체의 요청에 의해 제외)
   */
  shorthand?: boolean;
  /**
   * @description
   * 검색결과가 많을시 검색바 아래의 가이드 영역을 강조시켜 주는 기능입니다. 기본값은 `0`(비활성)입니다.
   *
   * 가이드 문구는 첫화면의 가이드 문구와 동일하며, 조합방식과 예시를 설명하여 사용자에게 재검색을 유도할 수 있도록 하는 기능입니다.
   *
   * 입력값으로는 페이지 넘버가 들어가게 되며, 3~20까지 입력 가능합니다.
   *
   * (ex. '5' 입력시 검색결과가 5페이지 이상일 경우 무조건 가이드 문구를 강조하게 됩니다. 그 이하에서는 아무런 변화 없습니다.)
   */
  pleaseReadGuide?: number;
  /**
   * @description
   * 기본값은 `1.5`(1.5초간 강조)이며 입력하지 않으면 기본값으로 동작합니다.
   *
   * 입력값 설정 단위는 '초'단위로 설정할 수 있으며, 0.1~60까지 입력 가능합니다.
   *
   * (너무 높은 값을 설정하면, 해당 시간이 지나기 전까지 검색결과 영역을 조작할 수 없으니 유의하시기 바랍니다.)
   */
  pleaseReadGuideTimer?: number;
  /**
   * @description
   * 검색어 입력시 검색바 아래에 뜨는 서제스트의 최대 검색 갯수를 조절할 수 있는 옵션입니다.
   *
   * 기본값은 `10`개이며 입력하지 않거나 1~10을 벗어나는 수를 입력시 기본값으로 셋팅됩니다.
   */
  maxSuggestItems?: number;
  /**
   * @description
   * 기본값은 `false`이며 기존보다 행정동 정보를 좀 더 많이 보여주게 하는 옵션입니다.
   *
   * 해당 기능을 활성화 하면 검색 결과의 행정동과 법정동이 다른 경우 무조건 표시를 하고 데이터를 내리게 됩니다.
   *
   * 그래서 법정동과 행정동이 같은 경우에는 표시하지 않으며, 데이터 또한 내리지 않습니다.
   *
   * 추가적으로, 행정동 표시의 기본 로직은 "검색어를 행정동으로 검색하고, 검색결과의 법정동과 검색어에 입력한 행정동과 다른 경우에 표시하고, 데이터를 내립니다."
   */
  showMoreHName?: boolean;
  /**
   * @description
   * 기본값은 `false`이며 검색 결과의 "지도" 버튼을 가릴 수 있는 옵션입니다.
   *
   * 다만, 해당 기능은 자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능으로,
   *
   * app에 임베딩을 해야되는 상황이거나 버튼이 눌러지면 안되는 상황일때 선택적으로 이용하시는 것을 권장합니다.
   *
   * `true`로 셋팅을 하면 검색결과가 없을때 나오는 안내(Tip) 페이지내의 지도 이동 링크도 같이 사라집니다.
   */
  hideMapBtn?: boolean;
  /**
   * @description
   * 기본값은 `false`이며 검색 결과의 "영문보기" 버튼을 가릴 수 있는 옵션입니다.
   *
   * 다만, 해당 기능은 자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능으로,
   *
   * app에 임베딩을 해야되는 상황이거나 버튼이 눌러지면 안되는 상황일때 선택적으로 이용하시는 것을 권장합니다.
   */
  hideEngBtn?: boolean;
  /**
   * @description
   * 기본값은 `false`이며 검색 결과의 한글과 영문 주소를 동시에 볼 수 있게 해주는 기능입니다,
   *
   * 해당 기능 활성화시 "영문보기" 버튼은 감춰집니다.
   *
   * (hideEngBtn 속성의 설정 값보다 우선시 됩니다.)
   */
  alwaysShowEngAddr?: boolean;
  /**
   * @description
   * 기본값은 `true`이며 "form submit" 방식을 사용합니다. `false`로 설정 시 "location replace" 방식을 사용하게 됩니다.
   *
   * 우편번호 서비스로 인해 history 관련 제어가 어려우실 경우 `false`로 설정하여 이용하시기 바랍니다.
   */
  submitMode?: boolean;
  /**
   * @description
   * 기본값은 `true`이며 하단 배너에 "가이드페이지"로 이동하는 링크를 활성화 시킵니다. 링크로 인해 사용성이 저하된다고 생각하신다면 `false`로 설정하여 이용하시기 바랍니다.
   */
  useBannerLink?: boolean;
  /**
   * @description
   * bgColor: 바탕 배경색
   *
   * searchBgColor: 검색창 배경색
   *
   * contentBgColor: 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
   *
   * pageBgColor: 페이지 배경색
   *
   * textColor: 기본 글자색
   *
   * queryTextColor: 검색창 글자색
   *
   * postcodeTextColor: 우편번호 글자색
   *
   * emphTextColor: 강조 글자색
   *
   * outlineColor: 테두리
   */
  theme?: {
    bgColor?: string; // 바탕 배경색
    searchBgColor?: string; // 검색창 배경색
    contentBgColor?: string; // 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor?: string; // 페이지 배경색
    textColor?: string; // 기본 글자색
    queryTextColor?: string; // 검색창 글자색
    postcodeTextColor?: string; // 우편번호 글자색
    emphTextColor?: string; // 강조 글자색
    outlineColor?: string; // 테두리
  } | null;
};
