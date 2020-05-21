export const RECORD_TYPE_OBJ = {
  HEADER: {
    label: 'ヘッダレコード',
    value: 'header',
    code: 1,
  },
  DATA: {
    label: 'データレコード',
    value: 'data',
    code: 2,
  },
  TRAILER: {
    label: 'トレーラレコード',
    value: 'trailer',
    code: 8,
  },
  END: {
    label: 'エンドレコード',
    value: 'end',
    code: 9,
  },
  UNKNOWN: {
    label: '不明',
    value: 'unknown',
  },
};

export const MAX_LENGTH_PER_ROW = 120;
