// 记录类型定义的一些方式

enum TRAIN_KINDS {
  steam,
  green,
  bullet,
};

const useEnumVal: { [key in TRAIN_KINDS]: number } = {
  [TRAIN_KINDS.steam]: 1,
  [TRAIN_KINDS.green]: 2,
  [TRAIN_KINDS.bullet]: 3,
};

const useEnumKey: { [key in keyof typeof TRAIN_KINDS]: number } = {
  'steam': 1,
  'green': 2,
  'bullet': 3,
}

function useEnumKeyInFun(key: keyof typeof TRAIN_KINDS) {
  console.log(key);
}
