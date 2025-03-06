// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// const displayGood = async () => {
//   console.log("Good");
// };
// displayGood();

const whatYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySubject = async (subject) => {
  return `Hello ${subject}`;
};

// whatYourFavorite().then(displaySubject).then(console.log);

const init = async () => {
  const response = await whatYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
};

init();
