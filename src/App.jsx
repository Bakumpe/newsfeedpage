import { useState } from "react";
import "./App.css";
import NewsFeed from "./components/NewsFeed";
import Header from "./components/Header";
import PopularFeed from "./components/Popular";
import Kingsaha from "./assets/kingsaha.jpg";
import Besigye from "./assets/besigye.jpg";
import PLE from "./assets/ple.webp";
import Coach from "./assets/coach.jpg"

const newsFeed = [
  {
    article: "Police cancel King Saha’s music concert",
    date: "Thursday, January 23, 2025",
    author: "Daily Monitor",
    image: Kingsaha,
    content: (
      <p>
        Mr Ssemanda is a sworn supporter of musician turned politician, Mr
        Robert Kyagulanyi, alias Bobi Wine who is the president of the National
        Unity Platform (NUP).{" "}
      </p>
    ),
    content2: (
      <p>
        According to Mr. Rusoke, the cancellation of the show is based on the
        recomendations of the joint security and national security technical
        team which is reportedly observed signs of "potential structural failure
        on the facility so as to protect the revellers." Mr. Rusoke added
      </p>
    ),
  },
  {
    article: "Tayebwa directs MPs on human rights committee to visit Besigye",
    date: "Thursday, January 23, 2025",
    author: "Daily Monitor",
    image: Besigye,
    content: (
      <p>
        The Deputy Speaker of Parliament Thomas Tayebwa, has instructed
        Parlaiment's Committee on Human Rights to visit Luzira Prisons to
        ascertain the health condition of the opposition veteran, Dr. Kizza
        Besigye.{" "}
      </p>
    ),
    content2: (
      <p>
        The directive was given to the committe, chaired by West Budama North
        East Constituency Legislator, Fox Odoi, during Thursday's plenary
        sitting. This followed complaints from opposition legislators who
        alleged that Dr. Kizza Besigye has been denied access to food from his
        family and the chance to physically interact with visitors.
      </p>
    ),
  },

  {
    article:
      "2024 PLE: Boys outperform girls as overall pass rate improves to 91.8 per cent",
    date: "Thursday, January 23, 2025",
    author: "Daily Monitor",
    image: PLE,
    content: (
      <p>
        Uneb Executive Director Daniel Odongo reported a drop in distinctions
        across all subjects, attributing it to difficulties with questions
        requiring higher-level thinking skills..{" "}
      </p>
    ),
    content2: (
      <p>
        Release Date: The results were released on January 23, 2025, at State
        House Nakasero in Kampala. Overall Performance: The overall pass rate
        improved to 91.8% compared to 88.0% in 2023. Division One: 84,301
        candidates scored Division One, a slight decrease from 86,582 in 2023.
        Gender Performance: Boys outperformed girls, with 45,203 boys passing in
        Division One compared to 39,098 girls. Special Needs Candidates: There
        was a significant improvement in the performance of special needs
        candidates, particularly the deaf. Increased Candidature: The number of
        candidates increased to 797,444 from 749,347 in 2023.
      </p>
    ),
  },
  {
    article: "Uganda Cup: Byekwaso’s shot at redemption",
    date: "Thursday, January 23, 2025",
    author: "Daily Monitor",
    image: Coach,
    content: (
      <p>
        Success in the tournament could salvage an otherwise 
        lackluster campaign or, at the very least, delay the looming axe 
        hanging over his tenure..{" "}
      </p>
    ),
    content2: (
      <p>
        SC Villa coach Morley Byekwaso is under pressure due to the team's poor 
        performance in the StarTimes Uganda Premier League, where they currently sit eighth. 
        However, the Stanbic Uganda Cup offers Byekwaso a chance to redeem himself and 
        potentially secure the club's tenth Cup title1. SC Villa will face Seeta United in 
        the Round of 64, but the absence of key player Hakim Kiwanuka poses a significant challenge. 
        Byekwaso must address tactical issues and find alternatives to fill the gap left by Kiwanuka
      </p>
    ),
  },
];

function App() {
  const [currentIndex, setNewsFeed] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNext = () => {
    if (currentIndex < newsFeed.length - 1) {
      setNewsFeed(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setNewsFeed(currentIndex - 1);
    }
  };

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Header />
      <div className="feeds">
        <div className="newsFeed">
          <NewsFeed
            article={newsFeed[currentIndex].article}
            date={newsFeed[currentIndex].date}
            author={newsFeed[currentIndex].author}
            content={newsFeed[currentIndex].content}
            content2={newsFeed[currentIndex].content2}
            image={newsFeed[currentIndex].image}
            handleReadMore={handleReadMore}
            isExpanded={isExpanded}
          />
        </div>
        <div className="popularFeeds">
          <h2>Popular Feed</h2>
          {newsFeed.slice(0,3).map((news, index) =>(
            <PopularFeed
            key={index}
            article={news.article}
            content={news.content}
          />
          ))}
        </div>
      </div>

      <div className="buttonNextP">
        <button onClick={handlePrevious} className="buttonNP">
          Previous
        </button>
        <button onClick={handleNext} className="buttonNP">
          Next
        </button>
      </div>
    </>
  );
}

export default App;
