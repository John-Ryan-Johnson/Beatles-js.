const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
      formed: 1960,
      disbanded: 1970
  },
  members: [
      {
          name: "George Harrison",
          birth: 1943,
          death: 2001
      },
      {
          name: "Paul McCartney",
          birth: 1942,
          death: null
      },
      {
          name: "John Lennon",
          birth: 1940,
          death: 1980
      },
      {
          name: "Ringo Starr",
          birth: 1940,
          death: null
      }
  ]
}
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.
const hisName= beatles.members[1].name
const dateStarted = beatles.history.formed
const dateEnded = beatles.history.disbanded
const hisBirth = beatles.members[1].birth
const albumName = beatles.albums[3]

console.log(`${hisName} was in the Beatles from ${dateStarted} to ${dateEnded}.He was born in ${hisBirth}. He contributed heavily to the ${albumName} Album.`)