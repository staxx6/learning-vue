new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
            let damage = this.calcDamage(3, 10);
            this.monsterHealth = Math.max(this.monsterHealth -= damage, 0);
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if(this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        specialAttack() {
            let damage = this.calcDamage(10, 20);
            this.monsterHealth = Math.max(this.monsterHealth -= damage, 0);
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits hard monster for ' + damage
            });
            if(this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        monsterAttack() {
            let damage = this.calcDamage(5, 12);
            this.playerHealth = Math.max(this.playerHealth -= damage, 0);
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });
            this.checkWin();
        },
        heal() {
            let health = this.calcDamage(10, 18);
            this.playerHealth = Math.min(this.playerHealth += health, 100);
            this.turns.unshift({
                isPlayer: true,
                text: 'Players heals for ' + health
            });
            this.monsterAttack();
        },
        giveUp() {
            this.gameIsRunning = false;
        },
        calcDamage(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        checkWin() {
            if(this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0) {
                if(confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});