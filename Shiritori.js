class Shiritori{
    constructor(){
        
        this.words = [];
        this.game_over = false
    }

    play(word){
        let i = this.words.length - 1;
        if(i === -1 || (this.words[i][this.words[i].length - 1] === word[0])){
            this.words.push(word)
        }else{
            this.game_over = true;
            console.log("Game Over")
        }
        
        return this.words
    }

    restart(){
        this.words = [];
        this.game_over = false

        return this;
    }
}

const word = new Shiritori();
word.play("apple");
word.play("ear");
word.play("rhino");
word.play("corn");
console.log(word)
console.log(word.words)