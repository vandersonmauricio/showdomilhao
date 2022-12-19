import React from 'react'

import styles from './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (<div className={styles.start}>
    <h1>Secret World</h1>
    <p>Clique no botão abaixo para começar a jogar</p>
    <button onClick={startGame}>Começar o jogo</button>
    </div>
  ) 
}

export default StartScreen