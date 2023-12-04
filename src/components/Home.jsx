import React from 'react'
import vg from "../assets/programmer.jpg"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
    return (

    <>
        <div className="home" id="HOME">
            <main>
                <h1>EDUCATION</h1>
                <p>EDUCATION IS THE KEY TO UNLOCK YOUR POTENTIAL</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>There’s no doubt that education is important. It helps us develop the skills and knowledge we need to succeed in life. But what’s also important is how we think about and value education. That’s where slogans and taglines come in.
                     They can be inspiring, thought-provoking, and motivating. And they can help us see education in a new light 
                    we are leading tech company whose aim is to increase the problem solving ability in children ..
                </p>
            </div>
        </div>


        <div className="home3" id="ABOUT">

            <div>
                <h1>WhY Education</h1>
                <p>The first thing that strikes in our minds when we think about education is gaining knowledge. 
                    Education is a tool which provides people with knowledge, skill, technique, information, enables
                     them to know their rights and duties toward their family, society as well as the nation.
                      It expands vision and outlook to see the world. It develops the capabilities to fight against 
                      injustice, violence, corruption and many other bad elements in the society.
         <br /><br />
      Education gives us knowledge of the world around us. It develops in us a perspective of looking at life. It is the
       most important element in the evolution of the nation. Without education, one will not explore new ideas.
       It means one will not able to develop the world because without ideas there is no creativity and without creativity,
        there is no development of the nation.
                    </p>
            </div>
        </div>


        <div className="home4" id="BRANDS">

            <div>
                <h1>Avoid</h1>

                <article>
                    <div style={{
                        animationDelay:"0.3s",
                    }}>

                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{
                        animationDelay:"0.5s",
                    }}>

                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay:"0.7s",
                    }}>

                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div style={{
                        animationDelay:"1s",
                    }}>

                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>

    </>
    )
}

export default Home