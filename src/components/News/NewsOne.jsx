import './News.scss'
import SharePopover from "../SharePopup/SharePopup"
import NewsImgBig from "../../assets/news/NewsBig.png"
import asideImg from "../../assets/news/newsAside.png"
import {ReactComponent as ArrowLeft} from "../../assets/icons/ArrowLeft.svg"

const NewsSectionOne = () => (
  <section className="section section--news">
    <h1 className="h1">
      <a href="#"><ArrowLeft /></a> All news
    </h1>

    <div className="board">
      <div className="board-body">
        <div className="content">
          <div className="article-wrapper article-wrapper--single">
            <article className="article">
              <div className="article-data">
                <div className="time">
                  Today - 01:12
                </div>
              </div>
              <div className="article-content">
                <h1>
                  Aave, Curve, PoolTogether, and Sushi Among Leading Ethereum DeFi Projects Joining Celo on DeFi for the People Collaboration
                </h1>
                <div className="description">
                  <img src={NewsImgBig} alt="news"/>
                  <p>Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration of global crypto organizations united by a common goal: bringing DeFi to the 6 billion smartphone users around the world.</p>

                  <p>Built on Celo, the new initiative counts Aave, Curve, Sushi, PoolTogether, 0x, UMA, Valora, Ubeswap, and Moola Market among its founding partners. Education and infrastructure partners include Chainlink, RabbitHole, The Graph and Wrapped.com. This new program will offer more than $100 million in educational initiatives, grants, and incentives. The majority of program participants will jointly contribute half the funds for incentive programs.</p>

                  <p>Full product integrations with PoolTogether, Sushi, Moola Market, Ubeswap, and Valora are available now, with more launching soon. Starting today, rewards are available for PoolTogether on Celo, and incentive pools with other DeFi projects will be launching in the coming weeks and months. Also expected this fall is the launch of Optics, a gas-efficient interoperability protocol for cross-chain communication. With Optics, users will be able to easily move assets between Ethereum and Celo.</p>
                  <h2>Empowering Access to Better Financial Tools on Celo</h2>
                  <p>DeFi has experienced explosive growth in recent years, but has yet to gain widespread adoption. Of the roughly 5 million people around the world currently using DeFi applications, less than 10% live outside of developed countries. DeFi for the People aims to change that by bringing builders together to create products that make DeFi more accessible and easier to use for the people who need it most.</p>

                  <p>For billions of people, a mobile phone is their most important device and often their only access to the internet. Celo’s mobile-first platform — with over 1 million wallet addresses across 113 countries — presents a unique opportunity to bring the benefits of DeFi to anyone with a mobile phone. New real-world applications for DeFi with Celo are already underway.</p>

                  <p>Take for example in Colombia, where last year, at the outset of the pandemic, a pilot program provided unemployed individuals with undercollateralized micro loans on Celo. The loans enabled users to purchase motorized bicycles so they could deliver for Rappi. With access to the right equipment, some members of the pilot were able to double — and in some instances quadruple — their earnings. This is just one example of how DeFi can provide instant access to capital for millions of people, particularly for those in emerging markets where access to traditional financial services has been limited.</p>
                  <img src={NewsImgBig} alt="news"/>
                  <h2>Now Live on Celo: PoolTogether on Celo with $500,000 in Prizes</h2>
                  <p>PoolTogether, an open source and decentralized protocol for no-loss prize savings, is now live on Celo with more than $500,000 in prizes. Users can deposit into PoolTogether on Celo for a chance to win prizes, and even if they don’t win, keep all their deposited money. This is possible because prizes are funded by the interest earned on deposits. PoolTogether is a unique “no lose lottery” because everyone who participates keeps their money.</p>

                  <p>Incentive pools with Aave, Curve, Sushi, and other DeFi projects will be launching in the coming weeks.</p>
                  <h2>Aave on Celo with $20 Million Incentive Program</h2>
                  <p>Aave, an open source and non-custodial liquidity protocol, is designed to enable users to earn yield on crypto assets supplied to the protocol, and to borrow assets. Suppliers earn yield by depositing digital assets into liquidity pools.</p>
                  <h2>Curve on Celo with $14 Million Incentive Program</h2>
                  <p>Curve, an automated market maker (AMM) protocol, uses market-making algorithms to reinforce the liquidity of its markets, unlike traditional decentralized exchanges. Curve on Celo offers users a decentralized platform that allows users to trade and earn returns on their cryptocurrencies.</p>
                  <h2>Sushi on Celo with $10 Million Incentive Program</h2>
                  <p>Sushi is a DeFi platform that facilitates trading, lending, and earning yield. Currently, Sushi users can trade assets with the Swap feature and provide liquidities on Celo with yield farming rewards and incentives coming soon. With Celo, Sushi users can benefit from faster transaction speeds and lower fees through secure and Ethereum-compatible transactions on Celo’s Proof-of-Stake (PoS) network.</p>
                  <h2>Calling All Builders: Hackathon with $1 Million in Prizes and Seed Funding</h2>
                  <p>As part of its commitment to bringing crypto to mobile phones, DeFi for the People is hosting a hackathon in October with the goal of bringing more DeFi projects to Celo. Developers around the world are invited to build their projects on Celo, with $1 million in prizes and seed funding available for teams to jumpstart their projects. If you’re interested in participating in the hackathon, more information can be found <a
                    href="#">here</a>.</p>
                  <blockquote>
                    <p>DeFi for the People builds upon Celo’s mobile-first approach to make crypto and DeFi accessible for all. This is an open initiative for builders and entrepreneurs alike. Anyone interested in accelerating the adoption of crypto and DeFi in the real world is welcome to join. Learn more here.</p>
                  </blockquote>
                  <h2>Join DeFi for the People</h2>
                  <p>DeFi for the People builds upon Celo’s mobile-first approach to make crypto and DeFi accessible for all. This is an open initiative for builders and entrepreneurs alike. Anyone interested in accelerating the adoption of crypto and DeFi in the real world is welcome to join. Learn more here.</p>
                </div>
                <div className="article-data">
                  <div className="tags">
                    <div className="tags-item">
                      Cryptoeconomics
                    </div>
                    <div className="tags-item">
                      NFT
                    </div>
                    <div className="tags-item">
                      Defi
                    </div>
                    <div className="tags-item">
                      Investments
                    </div>
                    <div className="tags-item">
                      Fintech
                    </div>
                  </div>
                  <div className="share">
                    <SharePopover />
                  </div>
                </div>
              </div>
            </article>
          </div>
         <div className="article-aside">
           <div className="title">
             Other news
           </div>
          <div className="article-aside__item">
            <div className="article-aside__image">
              <img src={asideImg} alt="news"/>
            </div>
            <div className="title">
              Womplay invites you to a birthday party!
            </div>
            <div className="article-data">
              <div className="time">
                26 jun 2020
              </div>
              <div className="tags">
                <div className="tags-item">
                  Cryptoeconomics
                </div>
              </div>
            </div>
          </div>
           <div className="article-aside__item">
             <div className="article-aside__image">
               <img src={asideImg} alt="news"/>
             </div>
             <div className="title">
               Womplay invites you to a birthday party!
             </div>
             <div className="article-data">
               <div className="time">
                 26 jun 2020
               </div>
               <div className="tags">
                 <div className="tags-item">
                   Cryptoeconomics
                 </div>
               </div>
             </div>
           </div>
           <div className="article-aside__item">
             <div className="article-aside__image">
               <img src={asideImg} alt="news"/>
             </div>
             <div className="title">
               Womplay invites you to a birthday party!
             </div>
             <div className="article-data">
               <div className="time">
                 26 jun 2020
               </div>
               <div className="tags">
                 <div className="tags-item">
                   Cryptoeconomics
                 </div>
               </div>
             </div>
           </div>
           <div className="article-aside__item">
             <div className="article-aside__image">
               <img src={asideImg} alt="news"/>
             </div>
             <div className="title">
               Womplay invites you to a birthday party!
             </div>
             <div className="article-data">
               <div className="time">
                 26 jun 2020
               </div>
               <div className="tags">
                 <div className="tags-item">
                   Cryptoeconomics
                 </div>
               </div>
             </div>
           </div>
           <div className="article-aside__item">
             <div className="article-aside__image">
               <img src={asideImg} alt="news"/>
             </div>
             <div className="title">
               Womplay invites you to a birthday party!
             </div>
             <div className="article-data">
               <div className="time">
                 26 jun 2020
               </div>
               <div className="tags">
                 <div className="tags-item">
                   Cryptoeconomics
                 </div>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  </section>
)

export default NewsSectionOne