import nftpic from '../images/image-equilibrium.jpg'
import profile from "../images/image-avatar.png"

function Card(){
    return (
      <div>
          <div className="container pt-4 pl-4 pr-4 pb-2 rounded-4" id="nft-card">
  <div className="hover-color rounded-2">
   <img className="rounded-2" src={nftpic} alt="equilibrium picture" width="300" id="nft-img"/>
    
    <div className="text" id="eyeball"><svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fillRule="nonzero"/></g></svg></div>
  </div>
      
  

    <div className="row nft-title pt-3" id="nft-name">
      Equilibrium #3429
    </div>

    <div className="row pt-3">
      Our Equilibrium collection promotes balance and calm.
    </div>

    <div className="row pt-2 pl-2 d-flex flex-wrap">
      <svg className="logos pr-0" width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
      <h4 className="time-left ethprice">0.041 ETH</h4>
      <svg className="logos" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
      <p className="small-text time-left">3 days left</p>
    </div>

    
    <div className="row p-2">
    <img src={profile} alt="qr code"  id="pfp" />
    
    
       
      <p id="name">Creation of <span >Jules Wyvern</span></p>
    </div>

    
  </div>
      </div>
    )
  
  }
  
  export default Card;