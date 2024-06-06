import dayjs from "dayjs";

export const formatScreenings = (screenings) => {
  return screenings.map((screening) => {
    const date = dayjs(screening.startsAt).format("YYYY-MM-DD");
    const time = dayjs(screening.startsAt).format("HH:mm");

    return {
      id: screening.id,
      date: date,
      time: time,
      auditoriumId: screening.screenNumber,
      movieId: screening.movieId,
    };
  });
};
