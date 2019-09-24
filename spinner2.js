let anime = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
let timer = 100;
for (let i = 0; i < anime.length; i++) {
  setTimeout(() => {
    process.stdout.write("\r" + anime[i] + "   ");
  }, timer);
  timer += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}, timer);