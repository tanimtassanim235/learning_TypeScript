interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}


class MusicPlayer implements MediaPlayer{
    play(){
        console.log(`Playing music`);
    }
    pause(){
        console.log(`Pauser the music`);
    }

    stop(){
        console.log(`stop music`);
    }
}


const MezbaPlayer = new MusicPlayer();
// MezbaPlayer.play();


abstract class GamePlayer{
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class GameConsol extends GamePlayer{
    play(){
        console.log('laying music');
    }
    pause() {
        console.log(`Pauser callinggg`);
    }
    stop(){
        console.log(`stop now`);
    }
}


const gamePlayer = new GameConsol()
gamePlayer.play();