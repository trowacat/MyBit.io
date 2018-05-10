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
          New Site migration in process.<br/>
          Please check back later!
        </h1>
        <p className='Teaser__paragraph'>
          The MYB token swap is now live, the Token Swap will be exchanging the ERC20 MYB tokens with the new updated coin also with the symbol MYB. For more informaton on the token swap please read our blog post by clicking ‘learn more’.
        </p>
        <div className='Teaser__buttons'>
          <div className='Teaser__button'>
            <Button isLight label='Learn more' />
          </div>
          <a rel="noopener noreferrer" target="_blank" className='Teaser__button' href='https://medium.com/mybit-dapp/as-we-are-on-the-brink-of-entering-mybits-new-era-we-have-a-very-important-announcement-to-make-a4cda1cd6956'>
            <Button isLight label='See why' />
          </a>
        </div>
      </div>
    </div>
  </div>
)

