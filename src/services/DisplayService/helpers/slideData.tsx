interface IslideData {
  [key: string]: {
    startIndex: number;
    finishIndex?: number;
  };
}

export const slideData: IslideData = {
  '/': {
    startIndex: 0,
    finishIndex: 2,
  },
  '/step2': {
    startIndex: 2,
    finishIndex: 4,
  },
  '/step3': {
    startIndex: 4,
    //  finishIndex for step 3 will be data length,
    // we requested at the moment of slice.
  },
};
