// @flow

export type Show = {
=======
export type show = {
>>>>>>> master
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string
};


declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

