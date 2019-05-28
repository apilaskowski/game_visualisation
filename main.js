// 0 - floor
// 1 - backgroung
// 2 - wall

var floor_map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 2, 2, 2, 0, 1],
  [1, 2, 2, 2, 0, 1, 1, 0, 2, 2, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 2, 2, 2, 2, 2, 0, 1, 1, 2, 2, 2, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var bg_map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var treasure_map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var moves = [];

var x_size = 16;
var y_size = 16;

var x_grid_pos = 1;
var y_grid_pos = 2;

var map_widht = 512;
var map_height = 512;

var editor_width = 512;
var editor_height = 512;

var animation_speed = 4;

var step_x = map_widht/x_size;
var step_y = map_height/y_size;

var map = document.getElementById('map');
var canvas = document.createElement('canvas');
canvas.width = map_widht;
canvas.height = map_height;
canvas.id = "canv";
map.appendChild(canvas);

var ctx = canvas.getContext("2d");

var floor_tile = document.createElement('img');
floor_tile.src = "images/floor/World1_podloga_duza_bck2.png";

var wall_tile = document.createElement('img');
wall_tile.src = "images/wall/front_scianS2.png";

var stub_tile = document.createElement('img');
stub_tile.src = "images/background/stub.jpg";

var human_tile = document.createElement('img');
human_tile.src = "images/hero-009.png";

var human_tile_fliped = document.createElement('img');
human_tile_fliped.src = "images/hero-009-fliped.png";

var lose_banner = document.createElement('img');
lose_banner.src = "images/banners/lose.jpg";

var win_banner = document.createElement('img');
win_banner.src = "images/banners/win.jpg";

var exit_tile = document.createElement('img');
exit_tile.src = "images/stuff/exit.png";

var background_tile = [stub_tile];
var i;
for(i=1; i <= 15; ++i) {
  var tile = document.createElement('img');
  if(i-1 < 10) {
    tile.src = "images/background/na_scianie_0" + parseInt(i-1) + ".png";
  } else {
    tile.src = "images/background/na_scianie_" + parseInt(i-1) + ".png";
  }
  background_tile.push(tile);
}

var background_arrange = [
  [[1, 1, 1, 1, 1, 1, 1, 1]], // wszedzie do okola pusto
  [[1, 1, 0, 0, 0, 2, 2, 1]], 
  [[0, 1, 1, 1, 2, 2, 0, 0]], 
  [[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0]], 
  [[0, 0, 0, 0, 0, 1, 1, 1]], 
  [[1, 1, 1, 2, 0, 1, 1, 1], [1, 1, 2, 0, 0, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1, 1], [1, 1, 0, 0, 1, 1, 1, 1], [1, 1, 2, 0, 1, 1, 1, 1]], // lewa sciana
  [[1, 1, 1, 1, 2, 2, 2, 1], [1, 1, 1, 1, 2, 2, 1, 1], [1, 1, 1, 1, 1, 2, 2, 1], [1, 1, 1, 1, 1, 2, 1, 1]], // dolan sciana
  [[1, 1, 1, 1, 1, 1, 0, 2], [2, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0]], // prawa sciana
  [[0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1], [1, 0, 0, 1, 1, 1, 1, 1]], // gorna sciana
  [[1, 1, 1, 1, 2, 1, 1, 1]],
  [[1, 1, 1, 1, 1, 1, 2, 1]],
  [[0, 1, 1, 1, 1, 1, 1, 1]],
  [[1, 1, 0, 1, 1, 1, 1, 1]],
  [],
  []
];

var bg_mvs_x = [-1, 0, 1, 1, 1, 0, -1, -1];
var bg_mvs_y = [-1, -1, -1, 0, 1, 1, 1, 0];

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
    hero_turn_horizontal = 21;
    hero_turn_vertical = 9;
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
  var xxx = moveHero(d_x, d_y, animation_speed);
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
  
  for(i=0; i<x_size; ++i) {
    for(j=0; j<y_size; ++j) {
      if(floor_map[j][i] == 1) {
        ctx.drawImage(background_tile[1], (i*map_widht)/x_size, (j*map_height)/y_size, map_widht/x_size, map_height/y_size);
        ctx.drawImage(background_tile[bg_map[i][j]], (i*map_widht)/x_size, (j*map_height)/y_size, map_widht/x_size, map_height/y_size);
      }
    }
  }

  for(i=0; i<x_size; ++i) {
    for(j=0; j<y_size; ++j) {
      if(treasure_map[j][i] == 1) {
        ctx.drawImage(exit_tile, (i*map_widht)/x_size, (j*map_height)/y_size, map_widht/x_size, map_height/y_size);
      }
    }
  }
  ctx.drawImage(human_tile, hero_turn_horizontal*24, hero_turn_vertical*32, 24, 32, hero_x, hero_y, map_widht/x_size, map_height/y_size);  

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
  if(treasure_map[y][x] == 1) {
    return true;
  } else {
    return false;
  }
}

async function render_starting() {
  hero_x = (x_grid_pos*map_widht)/x_size;
  hero_y = (y_grid_pos*map_height)/y_size - map_height/(y_size*2);
  fill_background_grid();
  await animationFrame();
  await renderFloor(hero_x, hero_y);
}

async function main() {
  hero_x = (x_grid_pos*map_widht)/x_size;
  hero_y = (y_grid_pos*map_height)/y_size - map_height/(y_size*2);
  console.log("Starting pos hero: ", hero_x, hero_y);
  await animationFrame();
  await renderFloor(hero_x, hero_y);
  var t;
  for(t=0;t<moves.length;++t) {
    console.log("Actual move: ", moves[t][0], moves[t][1]);
    x_grid_pos = x_grid_pos + moves[t][0];
    y_grid_pos = y_grid_pos + moves[t][1];
    console.log("Future grid pos: ", x_grid_pos, y_grid_pos);
    var d_x = (x_grid_pos*map_widht)/x_size;
    var d_y = (y_grid_pos*map_height)/y_size - map_height/(y_size*2);
    console.log("Dest pos: ", d_x, d_y);
    await animationFrame();
    var legality = check_legal(x_grid_pos, y_grid_pos);
    var win = check_win(x_grid_pos, y_grid_pos);
    console.log(x_grid_pos, y_grid_pos);
    if(!legality) {
      await renderBanner(false);
      break;
    } else if(win) {
      await renderFloor(d_x, d_y);
      await renderBanner(true);
      break;
    } else {
      await renderFloor(d_x, d_y);
    }
  }
  moves = [];
  x_grid_pos = 1;
  y_grid_pos = 2;
}

var editor;

function run_editor() {
  editor = CodeMirror(document.getElementById("editor"), {
    value: "var i;\nfor(i=0;i<4;++i) move_down();\nfor(i=0;i<3;++i) move_right();\nfor(i=0;i<4;++i) move_down();\nfor(i=0;i<3;++i) move_left();\nfor(i=0;i<4;++i) move_down();\nfor(i=0;i<6;++i) move_right();\nfor(i=0;i<4;++i) move_up();\nfor(i=0;i<3;++i) move_right();\nmove_up();\nfor(i=0;i<4;++i) move_right();\nfor(i=0;i<7;++i) move_up();\nfor(i=0;i<10;++i) move_left();\n",
    mode:  "javascript",
    intentUnit: 4,
    lineNumbers: true
  });
  editor.setOption("theme", "mbo");
  editor.setSize(editor_width, editor_height);
}

function move_right() {
  console.log("Movam right");
  moves.push([1, 0]);
}

function move_left() {
  moves.push([-1, 0]);
}

function move_down() {
  console.log("Movam down");
  moves.push([0, 1]);
}

function move_up() {
  moves.push([0, -1]);
}

function sth() {
  var code = editor.getValue();
  var fun = new Function(code);
  fun();
}

function fill_background_grid() {
  var i, j, p, q, k;
  for(i = 0; i < y_size; ++i) {
    for(j = 0; j < x_size; ++j) {
      for(p = 1; p <= 15; ++p) {//background_arrange.length; ++p) {
        for(q = 0; q < background_arrange[p-1].length; ++q) {
          var fit = true;
          for(k = 0; k < 8; ++k) {
            var x_pos = j + bg_mvs_x[k];
            var y_pos = i + bg_mvs_y[k];
            if(y_pos >= 0 && y_pos < y_size && x_pos >= 0 && x_pos < x_size) {
              if(background_arrange[p-1][q][k] != floor_map[y_pos][x_pos]) {
                fit = false;
                // console.log("Pole (" + j + ", " +  i + ") nie jest typu 2, bo ruch (" + bg_mvs_x[k] + ", " + bg_mvs_y[k] + ")");
                // console.log("Powod: " + background_arrange[p-1][q][k] + " != " + floor_map[y_pos][x_pos]);
                break;
              }
            }
          }
          if(fit) {
            bg_map[j][i] = p;
            // console.log("PASUJE: (" + j + ", " + i + ") == " + p);
          }
        }
      }
    }
  }
}

// TODO:
// 1. Człowieczek w lewo.
// 2. Animacja poruszającego się ludzika.
// 3. Algorytm wypełniający na podstawie mapy tło.
// 4. Dla mapy algorytm wypełniający ozdobnikami.
// 5. Generowanie map.
// 6. Rozmieścić ludzika i wyjście najdalej jak się da od siebie.
// 7. Zastanowić się nad zabezpieczeniem wykonania w JS.