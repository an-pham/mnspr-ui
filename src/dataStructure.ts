import { atom, RecoilState } from "recoil";

export type NumArr = Array<Array<number>>;

export interface IndexMap {
  k: string;
  v: boolean;
};

export const openedIndexState: RecoilState<Array<IndexMap>> = atom({
  key: "openedIndexState",
  default: [<IndexMap>{}],
});
