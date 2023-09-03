let player = document.querySelector(".player");
let player_copy = document.querySelector(".player_copy");
let snake = document.querySelector(".obstacle");
let score_box = document.querySelector(".score");
let final_score = document.querySelector(".game_over");
let button = document.querySelector(".mybutt");

let score = 0;
let flag = 1;


document.onkeydown = function (e) {
    console.log("keycode: ", e.keyCode);
    if (e.keyCode == 38) {

        player.classList.add("animate_player");
        setTimeout(() => {
            player.classList.remove("animate_player");
        }, 700);
    }
    if (e.keyCode == 39) {
        dis = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`));
        player.style.left = dis + 150 + "px";
    }
    if (e.keyCode == 37) {
        dis = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`));
        player.style.left = dis - 150 + "px";
    }
};

setInterval(() => {
    px = parseInt(window.getComputedStyle(player, null).getPropertyValue(`left`));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue(`top`));

    ox = parseInt(window.getComputedStyle(snake, null).getPropertyValue(`left`));
    oy = parseInt(window.getComputedStyle(snake, null).getPropertyValue(`top`));

    cal_x = Math.abs(px - ox);
    cal_y = Math.abs(py - oy);

    if (cal_x < 93 && cal_y < 52) {
        snake.classList.remove("obstacle_animation");
        console.log("Game Over");
        player.style.left = 15 + "vw";
        snake.style.left = 182 + "vw";
        final_score.style.visibility = "visible";
        button.style.visibility = "visible";
        player_copy.style.visibility = "visible";
        player.style.visibility = "hidden";
        score_box.innerHTML = "TOTAL SCORE: " + score;
        score = 0;
        flag = 0;
        let promise = new Promise((resolve, reject) => {
            button.addEventListener("click", (e) => {
                resolve();
                final_score.style.visibility = "hidden";
                button.style.visibility = "hidden";
                player_copy.style.visibility = "hidden";
        player.style.visibility = "visible";
                snake.classList.add("obstacle_animation");
                flag = 1;
            });
        })
    }
    else {
        if(flag === 1){
        console.log("NOT_over");
        score += 1;
        score_box.innerHTML = "SCORE: " + score;
        }
    }
}, 100);