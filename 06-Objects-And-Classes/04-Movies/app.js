/* 04. Movies - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

Write a function that stores information about movies. The info will be name, director, date. You can receive several types on input:
•	"addMovie {movie name}" – add the movie
•	"{movie name} directedBy {director}" – check if the movie exists and then add the director
•	"{movie name} onDate {date}" – check if the movie exists and then add the date
At the end print all the movies that have all the info (if the movie has no director, name or date, don’t print it) in JSON format.


*/

function printMoviesLibrary(arrayInput) {
  let movies = [];

  arrayInput.forEach((line) => {
    let elements = line.split(" ");

    if (line.includes("addMovie")) {
      let movieName = elements.slice(1).join(" ");
      movies.push({ name: movieName });
    } else if (line.includes("directedBy")) {
      let index = elements.indexOf("directedBy");

      let movieName = elements.slice(0, index).join(" ");
      let movieDirector = elements.slice(index + 1).join(" ");
      let movie = movies.find((m) => m.name === movieName);

      if (movie !== undefined) {
        movie.director = movieDirector;
      }
    } else if (line.includes("onDate")) {
      let index = elements.indexOf("onDate");

      let movieName = elements.slice(0, index).join(" ");
      let movieDate = elements.slice(index + 1).join(" ");
      let movie = movies.find((m) => m.name === movieName);

      if (movie !== undefined) {
        movie.date = movieDate;
      }
    }
  });

  for (let m of movies) {
    let keys = Object.keys(m);
    if (keys.length === 3) {
      console.log(JSON.stringify(m));
    }
  }
}

printMoviesLibrary([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
