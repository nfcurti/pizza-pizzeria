import Head from 'next/head'
import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import Cookies from 'universal-cookie';

export default function Home() {
  const [userAddress, setUserAddress] = useState('CONNECT');
  const cookies = new Cookies();
  const [mintAmount, setMintAmount] = useState(1)
  const [sold, setSold] = useState(0)
  const contract_address = '0xf8686798c2d8078bED9490D8831eA2DC29C30349'
  const contract_abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_startDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_quantityToMint","type":"uint8"}],"name":"adminMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentMintLimit","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getCurrentPrice","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_quantityToMint","type":"uint8"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newbaseTokenURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startDate","type":"uint256"}],"name":"setStartDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')

  const connectMetamask = async() => {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    if(accounts.length > 0) {

      const chainId = await ethereum.request({ method: 'eth_chainId' });
      var _acc = accounts;
      console.log('Wallet:')
      console.log(_acc)
      cookies.set('primaryAddress', _acc[0], { path: '/' });
    }
  }

  const mint = async(quantity) => {
      if(userAddress == '') { return; }
      if(quantity>10 || quantity < 1) {
        return;
      }

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contract_abi, contract_address);
      const price = await contract.methods.getCurrentPrice().call();

      try{

        const result = await contract.methods.mint(
          quantity
        ).send({
          from: userAddress,
          value: (price * quantity)
        });
        const _ = alert('Congratulations, transaction succeded!');
        loadIndependentData();
      }catch(e) {
        console.log('Cancelled')
      }
  }

  const loadIndependentData = async() => {
      var currentProvider = new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/7303fa63ce23471baa55beb854143479`);
      const web3 = new Web3(currentProvider);
      const contract = new web3.eth.Contract(contract_abi, contract_address);
      const startDate = await contract.methods._startDate().call();
      var _date = new Date(0)
      _date.setUTCSeconds(startDate);
      setStartDate(_date);

      const totalS = await contract.methods.totalSupply().call();
      setSold(totalS);

  }

  useEffect(() => {
     if(cookies.get('primaryAddress')){
       setUserAddress(cookies.get('primaryAddress'))
     }
  });


  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzeria Pizza</title>
        <meta name="description" content="Pizzeria Pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
          <img src="/assets/PizzeriaPizzas_trans.png" width='250'/>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#scale'>Rarity</a></li>
            <li><a href='#FAQ'>FAQ</a></li>
            <li><a href='#roadmap'>Roadmap</a></li>
          </ul>
          <div className={styles.navbar_social}>
            <Image src="/assets/telegram.svg" alt="logo" width={50} height={20} />
            <Image src="/assets/discord.svg" alt="logo" width={50} height={20} />
          </div>
      </nav>

      <main className={styles.main}>
          <div id='main_hero' className={styles.main_hero}>
            <img className={styles.main_hero_img} src='/assets/1.png' />
            <button onClick={() => connectMetamask()}>{userAddress}</button>
            <p>Get your own pizza!<br/>0.04 ETH</p>
          </div>
          <div id='about' className={styles.about}>
            <div className={styles.about_text}>
                <h1>About</h1>
                <p>
                  Pizzeria Pizzas is a homage to Laszlo Hanyecz, the guy that on May 22, 2010 spent 10,000 BTC (yes, you read right) for some pizza. Taking in mind the amount of time that happened between the first commercial bitcoin transaction, we decided to launch a new NFT collection for it!
                </p>
            </div>
            <div className={styles.about_img}>
                <img className={styles.main_hero_img_2} src='/assets/section_art.png'/>
            </div>
          </div>
          <div id='scale' className={styles.scale}>
            <div className={styles.scale_text}>
                <h1>How rare is my pizza?</h1>
                <p>
                  The rarity of your pizza is calculated on the base of what slices does it contain, and it can be one of the following:
                </p>
                <p>
                  Marinara, 
Margherita, 
Sicilian, 
Prosciutto, 
Capriccioso, 
Vegetarian, 
Quattro Formaggi, 
Hawaiin, 
Alla Nutella, 
Quattro Stagioni, 
Sfiziose, 
Tirolese, 
Viennese, 
Gamberi, 
Pepperoni or Diavola, 
Spinaci, 
Funghi, 
Tonno e cippola
                </p>
                <p>
                  You will get 8 random slices, with the chance of getting a full pizza of the same flavour, or even half a pizza! 
                </p>
                <p style={{color:"#61D4A1"}}>
                  The rarity of each attribute and the overall rarity of your pizza will be displayed once minted.
                </p>
                <p className={styles.attention}>
                  The chance of all pizza flavours is the same for each of them
                </p>
                <br/>
                <h1>Mint a Pizza</h1>
                <p className={styles.infoTotal}>{sold}/10000 Minted</p>
                <p><span onClick={() => {if(mintAmount>1){setMintAmount(mintAmount-1)}}}>- </span> {mintAmount}<span onClick={() => {if(mintAmount<10){setMintAmount(mintAmount+1)}}} > +</span></p>
                <button className={styles.mintAmountButton} onClick={() => {
                  mint(mintAmount);
                }}>Mint {mintAmount} Pizza(s)!</button>  
            </div>
          </div>
          <div id='section1' className={styles.section1}>
          </div>
          <div id='gallery' className={styles.gallery}>
            <div className={styles.gallery_item}>
              <img src='/assets/1.png'></img>
            </div>
            <div className={styles.gallery_item}>
              <img src='/assets/2.png'></img></div>
            <div className={styles.gallery_item}>
              <img src='/assets/3.png'></img></div>
            <div className={styles.gallery_item}>
              <img src='/assets/4.png'></img></div>
            <div className={styles.gallery_item}>
              <img src='/assets/5.png'></img></div>
            <div className={styles.gallery_item}>
              <img src='/assets/6.png'></img></div>
            <div className={styles.gallery_item}>
              <img src='/assets/7.png'></img></div>
            <div className={styles.gallery_item}>
              <img src='/assets/8.png'></img></div>
          </div>
          <div id='FAQ' className={styles.FAQ}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.FAQ_item}>
              <h3>What is Pizzeria Pizzas?</h3>
              <p>Pizzeria Pizzas is a collection of 10,000 exclusive 512x512 pixel art ERC-721 NFTs on the Ethereum blockchain.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>How do I buy a Pizza?</h3>
              <p>Download and install the Chrome browser plugin MetaMask. This is a secure Ethereum wallet you can use to interact with websites.
                If you made a new account, buy some Ethereum or send some to yourself. The MetaMask plugin has a button that will allow you to buy Ethereum from Coinbase.
                Once you have some Ethereum in your wallet, you can buy Pizzas directly from our website or on the secondary market on Opensea.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Where does my Pizza NFT go after I purchase it?</h3>
              <p>Your NFT will be sent to the address that you linked on the mint page. Then, you can view your Pizzas on OpenSea or Rarible.
What traits will be Pizza have?
When minting a Pizza, you will get a pizza composed of 8 different slices that will be randomly generated on a set of 3 backgrounds. Each trait varies in tastefulness, with some traits being able to combine into a full 8 slice UNIQUE Pizza. 
There are up to 40,000 different combinations possible, but only a small percent will be sold!</p>
            </div>
          </div>
          <div id='roadmap' className={styles.roadmap}>
            <h1>Roadmap</h1>
            <div className={styles.roadmap_box}>
              <div className={styles.ecosystem_row}>
                    <div>
                        <h3>33% Minted</h3>
                        <p>Exclusive daily giveaway discord chat will be created for the first holders of the 33%.</p>
                    </div>
                    <div>
                        <h3>51% Minted</h3>
                        <p>Airdrop title for all those who were here before the 51% attack to completion. <br/><br/>
We will start a poll to determine which charity we should donate to.<br/><br/>
Airdrop time! 2 Random Pizza owners will get one Pizza airdropped to them. <br/><br/></p>
                    </div>
                    <div>
                        <h3>75% Minted</h3>
                        <p>We will donate 2.5% to the chosen charity<br/><br/>
Airdrop time! 2 Random Pizza owners will get one Pizza airdropped to them.</p>
                    </div>
                    <div>
                        <h3>100% Minted</h3>
                        <p>We will donate 5% to the chosen charity and all discord users will get a unique title available to all those who participated in the minting process- a title that will never be available again even if you use acquire the Pizzas again.</p>
                    </div>
                </div>
            </div>
          </div>
      </main>

    </div>
  )
}
