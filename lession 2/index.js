// kiểm tra button bắt đầu
const play = document.getElementById("start_btn")
play.addEventListener("click", () => {
    let game_mode = false
    if (game_mode == false) {
        const change_tittle = document.getElementById("main_tittle")
        change_tittle.innerHTML = "<h1>Hãy chiến đấu hết mình!</h1>"
        change_tittle.style.fontSize = "1rem"
        change_tittle.style.color = "red"
        game_mode = true

    };

// xử lý lượt chơi X - O
    if (game_mode == true) {
        let player1 = true;
        let player2 = false;
        let player_turn = document.querySelectorAll(".decore");
        player_turn.forEach(turn => {
            turn.addEventListener("click", () => {
                if (!turn.classList.contains("checked")) {
                    turn.classList.add("checked");
                    if (player1 == true && player2 == false) {
                        turn.innerHTML = `<img src="/imgs/x.png" alt="">`
                        turn.classList.add("checked")
                        turn.setAttribute("id", "X_on")

                        console.log("x");
                        player1 = false;
                        player2 = true;
                        // console.log("1", player1);
                        // console.log("2", player2);
                    } else if (player1 == false && player2 == true) {
                        turn.innerHTML = `<img src="/imgs/o.png" alt="">`
                        turn.classList.add("checked")
                        turn.setAttribute("id", "O_on")
                        
                        console.log("0");
                        player1 = true;
                        player2 = false;
                        // console.log("1", player1);
                        // console.log("2", player2);

                        // Xử lý điều kiện thắng thua
                        let Xwin = false
                        let B1 = document.getElementById("box1")
                        let B2 = document.getElementById("box2")
                        let B3 = document.getElementById("box3")
                        let B4 = document.getElementById("box4")
                        let B5 = document.getElementById("box5")
                        let B6 = document.getElementById("box6")
                        let B7 = document.getElementById("box7")
                        let B8 = document.getElementById("box8")
                        let B9 = document.getElementById("box9")
                        let B10 = document.getElementById("box10")
                       
                        if (X_on ) {
                            
                        }
                    }
                }
                
            })
        })

    };
   
});

