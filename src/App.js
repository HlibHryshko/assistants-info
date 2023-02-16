import 'bulma/css/bulma.css';

import ProfileCard from './ProfileCard';

import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Alexa" 
                                username="@alexa99" 
                                imageUrl={AlexaImage} 
                                description="Alexa was created by Amazon and helps you buy things." 
                            />

                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Cortana" 
                                username="@cortana32" 
                                imageUrl={CortanaImage} 
                                description="Cortana was made by Microsoft. Who knows what it does?"
                            />

                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Siri" 
                                username="@siri01" 
                                imageUrl={SiriImage} 
                                description="Siri was made by Apple and is being phased out"
                            />

                        </div>
                    </div>

                </section>

            </div>

            
        </div>
    )
}

export default App;