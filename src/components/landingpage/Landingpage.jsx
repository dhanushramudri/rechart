import React from "react";
import "../landingpage/landingpage.css";
import bannerImg from "../../components/images/banner_img.png";
import searchIcon from "../../components/images/search.png";
import quoteIcon from "../../components/images/quote.png";
import markzuckerberg from "../../components/images/markzuckerberg.png";
import ycombinator from "../../components/images/ycombinator.png";

const Landingpage = () => {
  return (
    <div>
      <div className="nav_container">
        <div className="logo_wrapper">
          <div className="logo">
            Hire <span>Base</span>
          </div>
          <div className="beta">beta</div>
        </div>

        <div className="menuitems">
          <li>Home</li>
          <li>Search</li>
          <li>Our Data</li>
          <li>Blogs</li>
        </div>
        <div className="auth">
          <button className="login">Log In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
      <div className="banner_wrapper">
        <div className="banner_container">
          <div className="content">
            <h1 className="title">
              Unsuckify <span> The Job Search</span>
            </h1>
            <p>
              We use AI to scan <span> 181,181</span> jobs in real-time directly
              from company career pages. Every compamny, every job, actually
              hiring on the internet.
            </p>
          </div>
          <div className="banner_img">
            <img src={bannerImg} alt="banner img  " />
          </div>
        </div>
        <div className="filters">
          <div>💼 What are you Looking For</div>
          <div>🌍 Location</div>
          <select name="location_type" id="location_type">
            <option value="remote">Location Type</option>
            <option value="remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">On-Site</option>
          </select>
          <button>
            <img src={searchIcon} alt="searchIcon" />
            Search
          </button>
          <div>Advanced Search</div>
        </div>
      </div>
      <div className="statistics">
        <div>
          <h1>1,395,074+</h1>
          <p>Real,live jobs hiring globally</p>
        </div>
        <div>
          <h1>20,000+</h1>
          <p>Companies indexed daily</p>
        </div>
        <div>
          <h1>Real-Time</h1>
          <p>Updates directly from employers</p>
        </div>
      </div>
      <div className="highlights_wrapper">
        <img src={quoteIcon} alt="" />
        <p>
          <span>60%</span> of listed jobs on the internet are outdated,spammy or
          no longer hiring. HireBase scans the internet to find real jobs
          directly from comapanies that are actually hiring now.
        </p>
      </div>
      <div className="members">
        <div className="imgwrapper">
          <img src={markzuckerberg} alt="" width={50} height={50} />
          <img src={markzuckerberg} alt="" width={50} height={50} />
          <img src={markzuckerberg} alt="" width={50} height={50} />
          <img src={markzuckerberg} alt="" width={50} height={50} />
          <img src={markzuckerberg} alt="" width={50} height={50} />
        </div>
        <div className="greendot"></div>
        2,903 HireBase Members
      </div>
      <div className="companies_container">
        <h1>See who is actually hiring.</h1>
        <p>
          These companies have seem the largest uptick in hiring in the last 7
          days.
        </p>
        <div className="img_slider1">
          <div className="slider_container">
            <div className="company_container">
              <img src={ycombinator} alt="" />
              <div>
                <p className="job_role">AI/ML jobs</p>
                <h2>15,623</h2>
                <h6>+916</h6>
              </div>
            </div>
            <div className="company_container">
              <img src={ycombinator} alt="" />
              <div>
                <p className="job_role">AI/ML jobs</p>
                <h2>15,623</h2>
                <h6>+916</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
