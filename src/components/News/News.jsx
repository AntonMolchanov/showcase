import './News.scss'
import CustomSelect from "../Select/selsect";
import SharePopover from "../SharePopup/SharePopup"
import NewsImg from "../../assets/news/news.png"
import PaginationRounded from "../Pagination/Pagination";

const NewsSection = () => (
  <section className="section section--news">
    <h1 className="h1">
      News
    </h1>

    <div className="board">
      <div className="board-header">
        <ul className="board-nav">
          <li className="board-nav__item is-active">
            <a href="#" className="board-nav__link">All News</a>
          </li>
          <li className="board-nav__item">
            <a href="#" className="board-nav__link">MLM News</a>
          </li>
          <li className="board-nav__item">
            <a href="#" className="board-nav__link">Crypto</a>
          </li>
          <li className="board-nav__item">
            <a href="#" className="board-nav__link">Investments</a>
          </li>
        </ul>
      </div>

      <div className="board-panel">
        <div className="board-panel__select">
          <CustomSelect />
        </div>

        <div className="board-panel__search">
          <div className="input-search-wrapper">
            <input className="search-bar" type="text" placeholder="Search news"/>
          </div>

          <button className="btn" type="button">submit</button>
        </div>

      </div>

      <div className="board-body">
        <div className="content">
          <div className="article-wrapper">
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="article-image">
                <img src={NewsImg} alt="news"/>
              </div>
              <div className="article-content">
                <div className="title">
                  Aave, Curve, PoolTogether, and Sushi Among...
                </div>
                <div className="description">
                  Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                </div>
                <div className="article-data">
                  <div className="time">
                    26 jun 2020
                  </div>
                  <div className="tag">
                    Cryptoeconomics
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
          </div>
         <div className="tags-wrapper">
           <div className="title">
             Tags
           </div>
           <div className="tags">
             <div className="tags-item is-active">
               All
             </div>
             <div className="tags-item">
               Cryptoeconomics
             </div>
             <div className="tags-item">
               Business
             </div>
             <div className="tags-item">
               Investments
             </div>
             <div className="tags-item">
               Business strategies
             </div>
             <div className="tags-item">
               Fintech
             </div>
             <div className="tags-item">
               Marketing
             </div>
             <div className="tags-item">
               Control
             </div>
             <div className="tags-item">
               Dewelopment
             </div>
             <div className="tags-item">
               IT
             </div>
             <div className="tags-item">
               Control
             </div>
             <div className="tags-item">
               Idea  and case
             </div>
             <div className="tags-item">
               NFT
             </div>
             <div className="tags-item">
               Start Up
             </div>
           </div>
         </div>
        </div>
      </div>

      <div className="board-footer">
        <div className="page-count">
          Rows per page:
          <input type="text" placeholder="10"/>
        </div>

        <div className="pagination">
          <PaginationRounded />
        </div>
      </div>
    </div>
  </section>
)

export default NewsSection