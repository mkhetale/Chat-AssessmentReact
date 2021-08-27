export const process = ( text, ) => {
  return {
    type: "PROCESS",
    payload: {
      text,
    },
  };
};