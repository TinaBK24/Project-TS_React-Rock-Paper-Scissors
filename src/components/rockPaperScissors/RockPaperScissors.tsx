import { useEffect, useState } from "react";
import "./RockPaperScissors.css"

const RockPaperScissors = () => {
    const [rock, setRock] = useState<number>(0);
    const [paper, setPaper] = useState<number>(1);
    const [scissors, setScissors] = useState<number>(2);
    const [yourChoose, setYourChoose] = useState<string>('');
    const [compChoose, setCompChoose] = useState<string>('');
    const [result, setResult] = useState<string>('');

    let compChooseNumber: number = 0;
    let compChooseString: string = '';
    const getCompChoose = () => {
        compChooseNumber = Math.floor(Math.random() * 3);
        compChooseString = compChooseNumber === 0 ? 'ROCK' : compChooseNumber === 1 ? 'PAPER' : 'SCISSORS';
        setCompChoose(compChooseString);
    }

    const getRock = () => {
        setRock(rock);
        setYourChoose('ROCK');
        getCompChoose();
    }

    const getPaper = () => {
        setPaper(paper);
        setYourChoose('PAPER');
        getCompChoose();
    }

    const getScissors = () => {
        setScissors(scissors);
        setYourChoose('SCISSORS');
        getCompChoose();
    }

    useEffect(() => {
        if (yourChoose) {
            if (yourChoose === compChoose) {
                setResult(`It was a draw! You both chose ${yourChoose}`);
            } else if (yourChoose === 'ROCK' && compChoose === 'SCISSORS') {
                setResult('ROCK beats SCISSORS. You win!');
            } else if (yourChoose === 'PAPER' && compChoose === 'ROCK') {
                setResult('PAPER beats ROCK. You win!');
            } else if (yourChoose === 'SCISSORS' && compChoose === 'PAPER') {
                setResult('SCISSORS beat PAPER. You win!');
            } else {
                setResult(`${compChoose} beats ${yourChoose}. You lose!`);
            }
        }
    }, [yourChoose, compChoose])

    const restartGame = () => {
        setYourChoose('');
        setCompChoose('');
        setResult('');
    }


    return (
        <div className="rock-paper-scissors">
            <h1>Rock Paper Scissors</h1>
            <p>Choose your weapon</p>

            <div className="results">
                <p>You chose: {yourChoose}</p>
                <p>Computer chose: {compChoose}</p>
                <p>Result: {result}</p>
            </div>

            <div className="buttons">
                <button onClick={getRock} type="button" className="emoji">🪨</button>
                <button onClick={getPaper} type="button" className="emoji">📃</button>
                <button onClick={getScissors} type="button" className="emoji">✂️</button>
            </div>

            <button onClick={restartGame} type="button" className="restart">Restart game</button>
        </div>
    );
}

export default RockPaperScissors;