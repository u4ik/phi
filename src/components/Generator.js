import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';


const Generator = () => {

    const [firstNum, setFirstNum] = useState();
    const [selectFirstNum, setSelectFirstNum] = useState(false);

    const [secondNum, setSecondNum] = useState();
    const [selectSecondNum, setSelectSecondNum] = useState(false);

    const [thirdNum, setThirdNum] = useState();
    const [selectThirdNum, setSelectThirdNum] = useState(false);

    const [fourthNum, setFourthNum] = useState();
    const [fifthNum, setFifthNum] = useState();
    const [mBallNum, setMBallNum] = useState();

    const [winningNumArr, setWinningNumArr] = useState([]);

    const [generatorToggle, setGeneratorToggle] = useState(false);

    const [ballSelectHighLight1, setBallSelectHighlight1] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight2, setBallSelectHighlight2] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight3, setBallSelectHighlight3] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight4, setBallSelectHighlight4] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight5, setBallSelectHighlight5] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight6, setBallSelectHighlight6] = useState('drop-shadow(5px 5px 4px black)')

    var numArr = [firstNum, secondNum, thirdNum, fourthNum, fifthNum, mBallNum];


    let fontSize = '4rem';

    const lottoNum1 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight1
    };
    const lottoNum2 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight2
    };
    const lottoNum3 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight3
    };
    const lottoNum4 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight4
    };
    const lottoNum5 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight5
    };
    const lottoNumMBall = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'yellow',
        background: 'radial-gradient(circle at top left, white 5%,yellow 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight6
    };
    const dash = {
        fontSize: fontSize,
        color: 'white',
        filter: 'drop-shadow(2px 2px 1px black)',
        padding: '2%'
    };

    const firstNumHisWinStyle = {
        color: 'white',
        fontSize: '1.5rem'
    }




    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    function changeRandom() {
        setFirstNum(randomNumber(1, 70));
        setSecondNum(randomNumber(1, 70));
        setThirdNum(randomNumber(1, 70));
        setFourthNum(randomNumber(1, 70));
        setFifthNum(randomNumber(1, 70));
        setMBallNum(randomNumber(1, 25));
    };

    function mapNLog() {

        return winningNumArr.map((winning, index) => {
            // if (firstNum == winning.winning_numbers.slice(0, 2)) {
            //     console.log(`This number: ${firstNum}, has won at the first position on : ${winning.draw_date.slice(0, 10)}`);
            // }
            // if (secondNum == winning.winning_numbers.slice(3, 6)) {
            //     console.log(`This number: ${secondNum}, has won at the second position on : ${winning.draw_date.slice(0, 10)}`);
            // }
            //     if (thirdNum == winning.winning_numbers.slice(6, 9)) {
            //     console.log(`This number: ${thirdNum}, has won at the third position on : ${winning.draw_date.slice(0, 10)}`);
            // }
            return (
                <div key={index}>
                    {selectFirstNum ?
                        <div>
                            {firstNum == winning.winning_numbers.slice(0, 2) ?
                                <ul >
                                    <li style={firstNumHisWinStyle} >The number: {firstNum}, has won at the first position on : {winning.draw_date.slice(0, 10)}`</li>
                                </ul> : null}
                        </div>
                        : null}
                    {selectSecondNum ?
                        <div>
                            {secondNum == winning.winning_numbers.slice(3, 6) ?

                                <ul >
                                    <li style={firstNumHisWinStyle} >The number: {secondNum}, has won at the second position on : {winning.draw_date.slice(0, 10)}`</li>
                                </ul> : null}
                        </div> : null
                    }
                    {selectThirdNum ?
                        <div>
                            {thirdNum == winning.winning_numbers.slice(6, 9) ?

                                <ul >
                                    <li style={firstNumHisWinStyle} >The number: {thirdNum}, has won at the third position on : {winning.draw_date.slice(0, 10)}`</li>
                                </ul> : null}
                        </div> : null
                    }
                </div>
            )
        });
    };

    function fetchWinningNum() {
        fetch('https://data.ny.gov/resource/5xaw-6ayf.json')
            .then(res => res.json())
            .then(data => {
                setWinningNumArr(data);
            });
    };

    useEffect(() => {
        fetchWinningNum();


    });


    return (

        <div style={{ margin: '0 auto', paddingTop: '5vh' }}>

            <div style={{ top: '6vh', left: '6vw', border: '0px solid rgb(201, 0, 1)', borderRadius: '20px', overflow: 'hidden', margin: '0px auto', maxWidth: '300px', maxHeight: '600px', marginBottom: '15%', filter: 'drop-shadow(1px 1px 1px black)', position: 'fixed', transform: 'scale(.6)' }}>

                <iframe title='Draw Counter' scrolling="no" src="https://lottery.com/" style={{ border: '0px none', marginLeft: '-55px', height: '400px', marginBottom: '', marginTop: '-290px', width: '420px' }}>
                </iframe>

            </div>

            {generatorToggle ?
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: '', transform: 'scale(.6)', marginTop: '-15%' }}>
                    <p style={lottoNum1} onClick={() => {
                        setSelectFirstNum(true);
                        setSelectSecondNum(false);
                        setSelectThirdNum(false);
                        setBallSelectHighlight1('drop-shadow(0px 15px 4px #EE1D25)')
                        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)')
                        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)')
                    }}>{firstNum}</p>
                    <p style={dash}>-</p>
                    <p style={lottoNum2} onClick={() => {
                        setSelectFirstNum(false);
                        setSelectSecondNum(true);
                        setSelectThirdNum(false);
                        setBallSelectHighlight2('drop-shadow(0px 15px 4px #EE1D25)')

                        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)')
                        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)')
                    }}>{secondNum}</p>
                    <p style={dash}>-</p>
                    <p style={lottoNum3}  onClick={() => {
                        setSelectThirdNum(true)
                          setSelectFirstNum(false);
                          setSelectSecondNum(false);
                          setBallSelectHighlight3('drop-shadow(0px 15px 4px #EE1D25)')
                          setBallSelectHighlight2('drop-shadow(5px 5px 4px black)')
                          setBallSelectHighlight1('drop-shadow(5px 5px 4px black)')
                        
                    }}>{thirdNum}</p>
                    <p style={dash}>-</p>
                    <p style={lottoNum4}>{fourthNum}</p>
                    <p style={dash}>-</p>
                    <p style={lottoNum5}>{fifthNum}</p>
                    <p style={dash}>-</p>
                    <p style={lottoNumMBall}>{mBallNum}</p>
                </div>
                : null}

            <button style={{ fontSize: '2rem', marginBottom: '4%', marginTop: '-10%', backgroundColor: 'rgba(255, 255, 255, .8)', color: 'black', borderRadius: '5%', outline: 'none', border: 'solid black 5px', padding: '2%', textShadow: '.5px .5px .5px blue', fontWeight: '550' }} onClick={() => {

                changeRandom();
                setGeneratorToggle(true);

                // fetchWinningNum();
            }}>Generate</button>

            {mapNLog()}
            <div style={{ border: '0px solid rgb(201, 0, 1)', borderRadius: '10%', overflow: 'hidden', margin: '0px auto', maxWidth: '580px', maxHeight: '600px', marginBottom: '2%' }}>
                <iframe title="Last Winning #'s" scrolling="no" src="https://www.lottery.net/mega-millions/numbers" style={{ border: '0px none', marginLeft: '-570px', height: '469px', marginBottom: '', marginTop: '-340px', width: '1500px' }}>
                </iframe>
            </div>

        </div>
    )

}


export default Generator;


