// try {
//   console.log("시작");
//   add();
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// } finally {
// }

const json = '{"grade" : 3,"age":20}';
try {
  const user = JSON.parse(json);
  if (!user.name) {
    throw new Error("이름없음");
  }
  console.log(user.name);
} catch (err) {
  console.error(err);
}
