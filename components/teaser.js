import React from 'react'
import MyBitLogo from '../static/svgs/icons/mybit-full-white.svg'
import stylesheet from './teaser.scss'
import { Button } from './button';

export const Teaser = () => (
  <div className="Teaser">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='Teaser__wrapper' >
      <div className='Teaser__container'>
        <div className='Teaser__logo'>
          <MyBitLogo />
        </div>
        <h1 className='Teaser__title'>
          New Site migration in progress.<br/>
          Please check back later!
        </h1>
        <p className='Teaser__paragraph'>
          The MyBit Token Swap is now live! The Token Swap will be exchanging current MyBit Tokens with a new, updated ERC20 token, also with the symbol MYB. For more information on the Token Swap please read our blog post by clicking ‘Learn more’.  To view a comprehensive guide and get started please click ‘Swap now’.
        </p>
        <div className='Teaser__buttons'>
          <a rel="noopener noreferrer" target="_blank" className='Teaser__button' href='https://medium.com/mybit-dapp/before-you-begin-take-a-deep-breath-and-relax-3820e9c8ca03'>
            <Button isLight label='Swap Now' />
          </a>
          <a rel="noopener noreferrer" target="_blank" className='Teaser__button' href='https://medium.com/mybit-dapp/as-we-are-on-the-brink-of-entering-mybits-new-era-we-have-a-very-important-announcement-to-make-a4cda1cd6956'>
            <Button isLight label='See why' />
          </a>
        </div>
      </div>
    </div>
  </div>
)

