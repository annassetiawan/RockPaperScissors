function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'batu';
    if (comp >= 0.34 && comp < 0.67) return 'gunting';
    return 'kertas';
}


const resultDraw = document.querySelector('.result');
const resultWin = document.querySelector('.result');
const resultLose = document.querySelector('.result');

resultDraw.setAttribute('src', './assset/draw.svg');
resultWin.setAttribute('src', './assset/win.svg');
resultLose.setAttribute('src', './assset/lose.svg');




function getHasil(comp, player) {

    // if( player == comp ) return 'SERI!';

    // if( player == 'batu' ) return ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!';
    // if( player == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
    // if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'KALAH!' : 'MENANG!';

    if (player == comp) return resultDraw.setAttribute('src', './assset/draw.svg');

    if (player == 'batu') return (comp == 'gunting') ? resultWin.setAttribute('src', './assset/win.svg') : resultLose.setAttribute('src', './assset/lose.svg');
    if (player == 'gunting') return (comp == 'batu') ? resultLose.setAttribute('src', './assset/lose.svg') : resultWin.setAttribute('src', './assset/win.svg');
    if (player == 'kertas') return (comp == 'gunting') ? resultLose.setAttribute('src', './assset/lose.svg') : resultWin.setAttribute('src', './assset/win.svg');


}


const player = document.querySelector('.player');
const gunting = document.querySelector('.liGunting')
const cgunting = document.querySelector('.cgunting')
const option = document.querySelectorAll('.image li img');


option.forEach(pil => {
    pil.addEventListener('click', function () {
        player.style.visibility = 'visible';
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        getHasil(pilihanComputer, pilihanPlayer);

        const result = document.querySelector('.result');
        result.style.visibility = 'visible';

        const imgComputer = document.querySelector('.computer')
        imgComputer.style.visibility = 'visible';
        imgComputer.setAttribute('src', './assset/' + pilihanComputer + '.svg')

        const imgPlayer = document.querySelector('.player')

        imgPlayer.setAttribute('src', './assset/' + pilihanPlayer + '.svg')


        player.classList.remove('fadeleft');
        setTimeout(() => {
            player.classList.add('fadeleft');

        }, 300);

        // result.classList.add('fadein');
        // setTimeout(() => {
        //     result.classList.remove('fadein');

        // }, 500);

        result.classList.remove('fadein');
        setTimeout(() => {
            result.classList.add('fadein');

        }, 300);

        imgComputer.classList.remove('faderight');
        setTimeout(() => {
            imgComputer.classList.add('faderight');

        }, 300);





    });
})


gunting.addEventListener('mouseover',function(){
    cgunting.classList.add('hovergunting')
})

gunting.addEventListener('mouseout',function(){
    cgunting.classList.remove('hovergunting')
})
