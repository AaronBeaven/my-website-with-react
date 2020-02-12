import React from 'react';
import HeavenWithaB from '../images/HeavenWithaB.jpg'


const Home  = () => {
    return(
        <div className="container">
        
            <div className ="image">
                <div className="imageAndText">
                <img src={HeavenWithaB} alt="The Don"/>
                <p>This was my Fighting debut. It was an unreal event hosted by a Thai company called K-Star. This was a very
                tough fight, which I Believe that I outscorred my Opponent Zayyon Mahboob  </p>
                </div>
                <div/>
                <div className="info">
                <h3>Aaron Beaven </h3>
                <h3> Fighting For Fitness </h3>
                <a href ="https://www.youtube.com/watch?v=TWlax3oQ29c&t"> Watch Fight on youtube or down below</a>
                


            </div>
            </div>
            </div>

    );
}

export default Home