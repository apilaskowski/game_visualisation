// 0 - floor
// 1 - backgroung
// 2 - wall

var floor_map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 2, 2, 0, 1, 0, 2, 2, 1, 2, 0, 2, 2, 2, 2, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var moves = [];

moves.push([1, 2]);
moves.push([2, 2]);
moves.push([3, 2]);
moves.push([3, 3]);
moves.push([3, 4]);
moves.push([3, 5]);
moves.push([4, 5]);
moves.push([5, 5]);
moves.push([5, 6]);
moves.push([6, 6]);
moves.push([7, 6]);
moves.push([8, 6]);
moves.push([9, 6]);
moves.push([10, 6]);
moves.push([10, 7]);
moves.push([10, 8]);
moves.push([10, 9]);
moves.push([10, 10]);
moves.push([10, 11]);
moves.push([10, 12]);
moves.push([10, 13]);
moves.push([11, 13]);
moves.push([12, 13]);
moves.push([13, 13]);
moves.push([14, 13]);


// moves.push([1, 2]);
// moves.push([1, 2]);
// moves.push([1, 3]);
// moves.push([1, 4]);
// moves.push([1, 5]);
// moves.push([1, 6]);
// moves.push([1, 7]);
// moves.push([1, 8]);
// moves.push([1, 9]);
// moves.push([1, 10]);
// moves.push([1, 11]);

var x_size = 16;
var y_size = 16;

var map_widht = 512;
var map_height = 512;

var map = document.getElementById('map');
var canvas = document.createElement('canvas');
canvas.width = map_widht;
canvas.height = map_height;
canvas.id = "canv";
map.appendChild(canvas);

var ctx = canvas.getContext("2d");

var floor_tile = document.createElement('img');
floor_tile.src = "floor/World1_podloga_duza_bck2.png";

var wall_tile = document.createElement('img');
wall_tile.src = "wall/front_scianS2.png";

var stub_tile = document.createElement('img');
stub_tile.src = "background/stub.jpg";

var human_tile = document.createElement('img');
human_tile.src = "hero-009.png";

var lose_banner = document.createElement('img');
lose_banner.src = "lose.jpg";

var win_banner = document.createElement('img');
win_banner.src = "win.jpg";

var hero_x = (1*map_widht)/x_size;
var hero_y = (2*map_height)/y_size - map_height/(y_size*2);

var hero_turn_horizontal = 0
var hero_turn_vertical = 0

function moveHero(dest_x, dest_y, step) {
  if(hero_x < dest_x) {
    hero_x = Math.min(hero_x + step, dest_x);
    hero_turn_horizontal = 13;
    hero_turn_vertical = 4;
  } else if(hero_x > dest_x) {
    hero_x = Math.max(hero_x - step, dest_x);
    hero_turn_horizontal = 0;
    hero_turn_vertical = 3;
  } else if(hero_y < dest_y) {
    hero_y = Math.min(hero_y + step, dest_y);
    hero_turn_horizontal = 0;
    hero_turn_vertical = 0;
  } else if(hero_y > dest_y) {
    hero_y = Math.max(hero_y - step, dest_y);
    hero_turn_horizontal = 4;
    hero_turn_vertical = 4;
  } else {
    return true;
  }
  return false;
}

async function renderFloor(d_x, d_y) {
  var xxx = moveHero(d_x, d_y, 2);
  clearMap();
  ctx.drawImage(floor_tile, 0, 0, map_widht, map_height);
  var i, j;
  for(i=0; i<x_size; ++i) {
    for(j=0; j<y_size; ++j) {
      if (floor_map[j][i] == 2) {
        ctx.drawImage(wall_tile, (i*map_widht)/x_size, (j*map_height)/y_size, map_widht/x_size, map_height/y_size);
      }
    }
  }
  ctx.drawImage(human_tile, hero_turn_horizontal*24, hero_turn_vertical*32, 24, 32, hero_x, hero_y, map_widht/x_size, map_height/y_size);

  for(i=0; i<x_size; ++i) {
    for(j=0; j<y_size; ++j) {
      if(floor_map[j][i] == 1) {
        ctx.drawImage(stub_tile, (i*map_widht)/x_size, (j*map_height)/y_size, map_widht/x_size, map_height/y_size);
      }
    }
  }
  if(!xxx) {
    await animationFrame();
    await renderFloor(d_x, d_y);
  }
}

async function clearMap() {
  ctx.clearRect(0, 0, map_widht, map_height);
}

function animationFrame() {
  let resolve = null
  const promise = new Promise(r => resolve = r)
  window.requestAnimationFrame(resolve)
  return promise
}

function check_legal(x, y) {
  if(floor_map[y][x] > 0 && floor_map[y][x] < 3) {
    return false;
  }
  return true;
}

async function renderBanner(win) {
  if(win) {
    ctx.drawImage(win_banner, map_widht/4, map_height/4, map_widht/2, map_height/2);
  } else {
    ctx.drawImage(lose_banner, map_widht/4, map_height/4, map_widht/2, map_height/2);
  }
}

function check_win(x, y) {
  if(floor_map[y][x] == 3) {
    return true;
  } else {
    return false;
  }
}

async function main() {
  await animationFrame();
  await renderFloor(hero_x, hero_y);
  var t;
  for(t=0;t<moves.length;++t) {
    var d_x = (moves[t][0]*map_widht)/x_size;
    var d_y = (moves[t][1]*map_height)/y_size - map_height/(y_size*2);
    await animationFrame();
    var legality = check_legal(moves[t][0], moves[t][1]);
    var win = check_win(moves[t][0], moves[t][1]);
    console.log(moves[t][0], moves[t][1]);
    if(!legality) {
      await renderBanner(false);
      break;
    } else if(win) {
      await renderBanner(true);
      break;
    } else {
      await renderFloor(d_x, d_y);
    }
  }
}