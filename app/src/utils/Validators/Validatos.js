export const required = (value) => {
  if (value) return undefined;
  return "Обязатоельное поле ";
};

export const maxLenghtCreator = (maxLenght) => {
  return (value) => {
    if (value.length > maxLenght)
      return `Максимальная длинна сообщения ${maxLenght} символов`;
    return undefined;
  };
};

export const minLenghtCreator = (minLenght) => {
  return (value) => {
    if (value.length < minLenght)
      return `Минимальня длинна сообщения ${minLenght} символов`;
    return undefined;
  };
};
