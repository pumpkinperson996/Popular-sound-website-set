import VideoFrame from "../VideoFrame";


function CurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('en-US'); // Returns a string like "3/28/2024"
  }
  
  

function HomePage(){

    return(
        <>
            
            <h2 className="homePageTitle">
                Welcome to the SB soundsssss website. Choose a category you like and click the pic for play the sound. Have fun!</h2>

            <hr></hr>

            <h3 className="homePageSubTitle">What is SB?</h3>
            <p className="homePageSubTitle">SB is one way what people in China show their respect to their homies. Lets using SB ASAP in life. You will be popluar AF when you using it!</p>
            
            <hr></hr>
            <h3 className="homePageSubTitle">ShaBi's Selection for {CurrentDate()}</h3>
            
            <br></br>
            <VideoFrame></VideoFrame>

        </>
        
    );
}

export default HomePage