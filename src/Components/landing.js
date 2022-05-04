import React from 'react'
import './landingPage.css'
function Landing() {
  return (
    <section id="landing">
    <div class="container-1 container">
        <h1>Play the latest games<br /> with your friends</h1>
        <img alt = '' src="src\images\astronaut.png" />
        <ul>
            <li><a href="asa">Explore</a></li>
            <li><a href="asa">Contact</a></li>
        </ul>
    </div>
    <div class="container-2 container">
        <h1> Play the latest web games and make friends across the globe.</h1>
        <img  alt ='' src='https://github.com/Allysht/Shift-Games-LandingPage/blob/main/public/images/earth.png?raw=true' />
    </div>
</section>
  )
}

export default Landing