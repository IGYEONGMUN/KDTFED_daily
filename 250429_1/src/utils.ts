// https://image.tmdb.org/t/p/original/elv9BNtTrbtiyif8cE02AuK1nQi.jpg

// 옛날영화중에 포맷이 없는경우도 있어서 그럴땐 오리지날 그냥 넣어야 하기때문에
export const makeImagePath = (id: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
};
