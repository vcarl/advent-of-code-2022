export const sum = (sum = 0, val: number) => sum + val;

export const chunkBy =
  (count: number) =>
  <T>(acc: T[][] = [], cur: T, index: number) => {
    const idx = Math.floor(index / count);
    acc[idx] ??= [];
    acc[idx].push(cur);
    return acc;
  };
