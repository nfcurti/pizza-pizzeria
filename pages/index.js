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
          <Image src="/assets/logo.svg" alt="logo" width={150} height={32} />
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
            <img className={styles.main_hero_img} src='/assets/siciliana.png' />
            <button onClick={() => connectMetamask()}>{userAddress}</button>
            <p>Get your own pizza!<br/>0.04 ETH</p>
          </div>
          <div id='about' className={styles.about}>
            <div className={styles.about_text}>
                <h1>About</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et maximus dolor, quis ullamcorper erat. Aliquam massa justo, fermentum id sagittis ac, faucibus in quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam viverra nec lectus a scelerisque. 
                </p>
            </div>
            <div className={styles.about_img}>
                <img className={styles.main_hero_img} src='/assets/pizza.png'/>
            </div>
          </div>
          <div id='scale' className={styles.scale}>
            <div className={styles.scale_text}>
                <h1>How rare is my pizza?</h1>
                <p>
                  The rarity of your pizza is calculated on the base of what slices does it contain, using the following list:
                </p>
                <p>
                  trash (<span style={{color:'#B4F649'}}>yellow</span> background color)
                    <br/>
                  oke (<span style={{color:'#E38C09'}}>orange</span> background color)
                    <br/>
                  gud (<span style={{color:'#F3123B'}}>red</span> background color)
                    <br/>
                  based (<span style={{color:'#0FD623'}}>green</span> background color)
                    <br/>
                  chad (<span style={{color:'#0782DA'}}>blue</span> background color)
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et maximus dolor, quis ullamcorper erat. Aliquam massa justo, fermentum id sagittis ac, faucibus in quam.
                </p>
                <p style={{color:"#61D4A1"}}>
                  The rarity of each attribute and the overall rarity of your pizza will be displayed once minted.
                </p>
                <p className={styles.attention}>
                  BUT BEWARE: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et maximus dolor, quis ullamcorper erat. Aliquam massa justo, fermentum id sagittis ac, faucibus in quam.
                </p>
            </div>
          </div>
          <div id='section1' className={styles.section1}>
          </div>
          <div id='gallery' className={styles.gallery}>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
          </div>
          <div id='FAQ' className={styles.FAQ}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
          </div>
          <div id='roadmap' className={styles.roadmap}>
            <h1>Roadmap</h1>
            <div className={styles.roadmap_box}></div>
          </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
