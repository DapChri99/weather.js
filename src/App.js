import hotBg from './assets/hot.jpg'
import stormyBg from './assets/stormy.jpg'
import cloudyBg from './assets/cloudy.jpg'
import Descriptions from './components/Descriptions.jsx'
import { useEffect } from 'react'
import { getFormattedWeatherData } from './weatherService'


function App() {

  useEffect(() => {
    const fetchWeatherData = async () => {
        const data = await getFormattedWeatherData('rome')
    }

    fetchWeatherData()
  }, [])



  return (

  <div className="app" style={{ backgroundImage: `url(${cloudyBg})`}}>
    <div className='overlay'>
      <div className='container'>
        <div className='section section__inputs'>
          <input type="text" name='city' placeholder="Enter City..."/>
          <button>°C</button>
        </div>

        <div className='section section__temperature'>
          <div className='icon'>
            <h3>Rome, GB</h3>
            <img src='https://openweathermap.org/img/wn/02d@2x.png' alt='weather icon'/>
            <h3>Cloudy</h3>
          </div>
          <div className='temperature'>
            <h1>34°C</h1>
          </div>
        </div>

        {/*bottom description*/}
        <Descriptions/>
      </div>
    </div>
  </div> 
  );
}

export default App;
