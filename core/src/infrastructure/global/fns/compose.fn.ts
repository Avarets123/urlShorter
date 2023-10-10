type AnyFn = (...args: any[]) => any;

export const compose = <T>(value: T, fn: AnyFn, ...fns: AnyFn[]) => {
  let nextValue = fn(value);

  fns.forEach((el) => {
    const newValue = el(nextValue);

    if (newValue) nextValue = newValue;
  });
};
