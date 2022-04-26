export type AreaType = {
  [key: string]: AreaIndexType;
};

export type AreaIndexType = {
  [key: string]: AreaDetailType;
};

/*
 *   name: 나라 이름
 *   price: 나라 구매 금액
 *   pay: 나라에서 지불 금액
 * */
export type AreaDetailType = {
  key: number;
  name: string;
  type: string;
  price: AreaBuildType;
  pay: AreaBuildType;
};

/*
 *   e1: 토지 가격
 *   e2: 별장 가격
 *   e3: 빌딩 가격
 *   e4: 호텔 가격
 * */
export type AreaBuildType = {
  e1: number;
  e2: number;
  e3: number;
  e4: number;
};

export type AreaStateType = AreaDetailType & {
  possession: {
    e1: boolean;
    e2: boolean;
    e3: boolean;
    e4: boolean;
  };
};
