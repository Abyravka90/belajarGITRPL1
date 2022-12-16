// no 2
var depth = 500;
var x = 0;
var y = 0;
for (i = 0; i < depth; i++) {
  if (x < depth) {
    x += 50;
    if (depth > x) {
      x -= 15;
    }
    y++;
  } else {
    console.log("jadi dia dapat keluar dari sumur sebanyak " + y + " hari");
    break;
  }
}
