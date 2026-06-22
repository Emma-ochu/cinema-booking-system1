export const generateBookingRef =
  () => {
    return (
      "CBS-" +
      Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()
    );
  };