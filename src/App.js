import './App.css';
import Header from './components/Header';
import StarSolidSmall1  from './assets/images/teenyicons_star-solid-1.svg';
import StarSolidBig  from './assets/images/teenyicons_star-solid-2.svg';
import StarSolidSmall2 from './assets/images/teenyicons_star-solid.svg';
import CerditPerMonth from './assets/images/creditPerMonth.svg';
import UnusedCard from './assets/images/rolloverOfUnusedCredits.svg';
import MmrPerks from './assets/images/MMRPerks.svg';
import Flexible from './assets/images/100Flexible.svg';
import DiscountOnFoodAndBeverages from './assets/images/discountOnFoodAndBeverages.svg';
import ConvenienceFee from './assets/images/convenienceFee.svg';
import HomeIcon from './assets/images/Home.svg';
import { MdArrowForward } from "react-icons/md";
import Accordion from "./components/Accordion"

function App() {
  const accordionItems = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  ];
  return (
    <div className="homepage">
      <section className='banner'>
        <Header />
        <span className='mobileHome'><img src={HomeIcon} alt='HomeIcon' /></span>
        <div className='d-flex flex-column text-center bannerContent'> 
          <h1 className='text-white'>MVP SUBSCRIPTION</h1>
          <p className='text-white'>Your go-to Movie Membership Program</p>
        </div>
      </section>
      <section className='realDeal'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className='leftRealDeel'>
                  <div className='gap-1 threeStars'>
                    <img src={StarSolidSmall1} alt='mySvgImage' />
                    <img  className='bigStar' src={StarSolidBig} alt='mySvgImage' />
                    <img src={StarSolidSmall2} alt='mySvgImage' />
                  </div>
                  <h3 className='text-white mt-4 reelDealHeading'> <img src={StarSolidSmall1} alt='mySvgImage' /> <span>Reel Deal Monthly Movies</span> <img src={StarSolidSmall2} alt='mySvgImage' /></h3>
                  <p className='textGrey'>Your flexible monthly membership to the latest movies</p>
                  <div className='mvpBoxDesktop'>
                    <h4 className='text-white mt-4'>What is MVP Subscription?</h4>
                    <ol className='mt-4'>
                      <li><span>1</span>MVP Subscription provide the member 1 movie credit per month</li>
                      <li><span>2</span>They can avail it any Marcus theatre or Movie tavern</li>
                      <li><span>3</span>Members earn 100 points and get a $5 reward redeemable on food and beverages + many more benefits</li>
                    </ol>
                  </div>
                  <div className='d-flex gap-4 align-items-center mt-4'>
                    <button className='solidButton'><span className='d-flex'>Get Started</span><span className='d-flex'><MdArrowForward/></span></button>
                    <a href="/" className='linkButton text-white'>Learn more</a>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-md-8 col-sm-12'>
                <div className='row'>
                  <div className='col-lg-4 col-md-4col-lg-4 col-md-4 col-6'>
                    <div className='blackBox'>
                      <img src={CerditPerMonth} alt='CerditPerMonth' />
                      <div>
                      <h5>1 credit per month</h5>
                      <p className='textGrey'>One 2D standard movie per month<sup>1</sup></p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4col-lg-4 col-md-4 col-6'>
                    <div className='blackBox'>
                      <img src={UnusedCard} alt='UnusedCard' />
                      <div>
                      <h5>Free rollover of unused credits</h5>
                      <p className='textGrey'>Unused credits will be combined the following month</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4col-lg-4 col-md-4 col-6'>
                    <div className='blackBox'>
                      <img src={MmrPerks} alt='MmrPerks' />
                      <div>
                      <h5>All MMR perks included</h5>
                      <p className='textGrey'>+ benefits</p>
                      </div>
                    </div>
                  </div>
           
                  <div className='col-lg-4 col-md-4col-lg-4 col-md-4 col-6'>
                    <div className='blackBox'>
                      <img src={Flexible} alt='Flexible' />
                      <div>
                      <h5>100% Flexible</h5>
                      <p className='textGrey'>Cancel anytime<sup>2</sup></p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4col-lg-4 col-md-4 col-6'>
                    <div className='blackBox'>
                      <img src={DiscountOnFoodAndBeverages} alt='DiscountOnFoodAndBeverages' />
                      <div>
                      <h5>20% Discount On Food and Beverages</h5>
                      <p className='textGrey'>Excluding alcohal</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4col-lg-4 col-md-4 col-6'>
                    <div className='blackBox'>
                      <img src={ConvenienceFee} alt='ConvenienceFee' />
                      <div>
                      <h5>0 Convenience Fees</h5>
                      <p className='textGrey'>Waived on all days on any tickets purchase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mvpBoxMobile'>
                    <p className='textLight mt-4'><sup>1</sup>Excludes IMAX and DBOX formats. No fees apply to Passport Credits only. Other fees apply to full-priced tickets.</p>
                    <p className='textLight mt-2'><sup>2</sup>Excludes alcohalic beverages</p>
                    <h4 className='text-white mt-4'>What is MVP Subscription?</h4>
                    <ol className='mt-4'>
                      <li><span>1</span>MVP Subscription provide the member 1 movie credit per month</li>
                      <li><span>2</span>They can avail it any Marcus theatre or Movie tavern</li>
                      <li><span>3</span>Members earn 100 points and get a $5 reward redeemable on food and beverages + many more benefits</li>
                    </ol>
                  </div>
            </div>
          </div>
      </section>
      <section className='faqs'>
        <div className='container'>
         <h4 className='text-white'>Frequently Asked Questions</h4>
         <Accordion items={accordionItems} />
         </div>
      </section>
      <div className='mobileFooter'>
      <button className='solidButton'><span className='d-flex'>Get Started</span><span className='d-flex'><MdArrowForward/></span></button>
      <p>Marcus MVP is only available for use in our Mobile App</p>
      </div>
    </div>
  );
}

export default App;
