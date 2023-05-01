import React from "react";
import './HomePage.css'
function HomePage() {
    return(
        <>
          <div
            class = "backgroundImage"
            style = {{
               height: "960px",
               width: " 1580px",
               backgroundImage:
               'url("https://colibriwp.com/blog/wp-content/uploads/2020/06/boris-stefanik-wxJscL5ZzDA-unsplash.jpg")',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
               
            }} >
                <div className= "welcome">
                <h1>Hello World!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                </div>
         </div>
        </>
    )
}
export default HomePage;