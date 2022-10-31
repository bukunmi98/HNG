
import "./App.css";
import icon from './images/Icon.png'
import desktopShareImage from './images/_Avatar share button.png'
import mobileMenuImage from './images/Icon (1).png'
import slackIconVectorBlue from './images/vector.png'
import slackIconVectorGreen from './images/vector (1).png'
import slackIconVectorRed from './images/vector (2).png'
import slackIconVectorYellow from './images/vector (3).png'
import githubIcon from './images/Icon (2).png'
import I4G from './images/I4G.png'
import zuri from './images/Vector (4).png'
import zuriDot from './images/Vector (5).png'
import profileId from './images/profile__img.png'
export default function App() {
  const twitterLinks="https://twitter.com/_kunmi_OG"
  const zuriTeam='"https://training.zuri.team/"'
  const zuriBooks = "http://books.zuri.team"
  const bookPython = "https://books.zuri.team/python-for-beginners?ref_id=bukunmi id"
  const pitch = "https://background.zuri.team"
  const bookDesign = "https://books.zuri.team/design-rules"
  const githubLink = "https://github.com/"
  const slackLink = ""


  return (
    <div className="container">
      <header>
        <div  className="profile-section">
            <img id="profile__img" src={profileId} alt="profile-img" />
              <div className='overlay'>
                <img src={icon} alt="camera icon" className="cam__icon" />
              </div>
        </div>
        <div className="menu">
          <div>
          <img className='mobile_menu_image' src={mobileMenuImage} alt='mobile menu'/>
          </div>
          <div>
          <img className='desktop_share_image' src={desktopShareImage } alt='desktop menu'/>

          </div>
         </div>
        <h4 id='twitter'>@kunmi_og</h4>
        <p id="slack"> bukunmi idowu</p>
      </header>
      <main>
        < div className="link_tree">
            <a id="btn__zuri" className="links" href={twitterLinks}>
              Twitter Link
            </a>
            <a id="btn__zuri" className="links" href={zuriTeam}>
              zuri team 
            </a>
            <a id="books" className="links" href={zuriBooks}>
             zuri books
            </a>
            <a id="book__python" className="links" href={bookPython}>
              python book
            </a>
            <a id="pitch" className="links" href={pitch} >
              background check for coders
            </a>
            <a id="book__design" className="links" href={bookDesign}>
              design books
            </a>
          
          </div>
          <div className="social_link">
                <a href={githubLink}>
                    <img src={githubIcon} alt='github icon'></img>
                  </a>
            <div className="slack_icon">
              <div className="upper_icon">
                  <a href={slackLink}>
                     <img src={slackIconVectorBlue} alt='slack icon'></img>
                   </a>
                  <a href={slackLink}>
                      <img src={slackIconVectorGreen} alt='slack icon'></img>
                  </a>
               </div>
               <div className="lower_icon">
                  <a href={slackLink}>
                     <img src={slackIconVectorRed} alt='slack icon'></img>
                   </a>
                  <a href={slackLink}>
                      <img src={slackIconVectorYellow} alt='slack icon'></img>
                  </a>
               </div> 
            </div>
          </div>
          <footer>
            <div>
                  <img src={zuri} alt="zuri logo" />
                  <img className='red-dot'src={zuriDot} alt="zuri dot logo" />
            </div>
            
                <p>  HNG Internship 9 Frontend Task</p>
             <div>
                  <img  src={I4G} alt="i4g logo" />
              </div>
        </footer>
     </main>
   
     </div>
        
        
  );
}

