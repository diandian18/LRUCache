export function fakeRequest<T>(res: T, ms: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, ms);
  }); 
}

export function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function isTrue(val: 0 | 1) {
  return !!val;
}

export function enumer(val: boolean): BlEnum {
  return val ? 1 : 0;
}

/**
 * 获取随机字符串
 */
export function getRandomString(prefix?: string) {
  return `${prefix || 'random'}_${new Date().getTime()}_${Math.random().toString(36).substring(2)}`;
}
