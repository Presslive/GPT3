import React from 'react'
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradiant__text'> Construisez quelque chose d'étonnant avec GPT-3 OpenAI</h1>
          <p>Pourtant lit tout pour aide voyage indulgence déplaisant. Pas pensées tout exercice bénédiction. Indulgence manière tout joie altération tapageuse l'attachement. Parti nous années à l'ordre permettre demandé de.</p>

          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Votre adresse e-mail' />
            <button type='button'>Démarrer</button>
          </div>
          
          <div className='gpt3__header-content__people'>
            <img src={people} alt="people" />
            <p>1 600 personnes ont demandé l'accès à une visite au cours des dernières 24 heures.</p>

          </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header