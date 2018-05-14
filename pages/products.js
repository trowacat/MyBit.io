import React from 'react'
import { action } from '@storybook/addon-actions'
import stylesheet from 'styles/products.scss'
import stylesheetGridlex from 'styles/gridlex.min.css'
import walletStylesheet from '../components/wallets.scss'
import buttonStyleSheet from '../components/button.scss'

import { default as Layout } from '../components/layout/layout'

import Invest from '../static/assets/invest.png'
import Mobile from '../static/assets/mobile.png'
import { Highlights, Highlight } from '../components/highlights'
import { Header } from '../components/header'
import { mediaHighlights, wallets } from '../components/constants'
import { Wallets } from '../components/wallets'
import { MediaCTA } from '../components/media-cta'
import { Button } from '../components/button'
import { MyBitFooter } from '../components/footer/footer'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="Products"
          style={{ maxWidth: '1650px', margin: '0 auto' }}
        >
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <style dangerouslySetInnerHTML={{ __html: walletStylesheet }} />
          <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
          <Header isLight={false} />
          <div style={{ padding: '0px 5%' }}>
            <div
              style={{
                marginTop: '75px'
              }}
            >
              <Highlights highlights={mediaHighlights} />
            </div>
            <div className="grid-middle Products__apps">
              <div className="col-6 col_lg-12">
                <div className="grid-noGutter">
                  <div className="col-2 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                    <img src={Mobile} className="Products__img-mobile" />
                  </div>
                  <div className="col-10 col_sm-12 col_sm-first col_md-last col_lg-last">
                    <MediaCTA
                      title="MyBit Mobile DApp"
                      content={
                        '<p>The MyBit Decentralised Application you know and love Will be available soon on Android and iOS through CipherBrowser, (which runs a lite node for you).</p>'
                      }
                      isLeft
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 col_lg-12">
                <div className="grid-noGutter">
                  <div className="col-2 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                    <img src={Invest} className="Products__img-invest" />
                  </div>
                  <div className="col-10 col_sm-12 col_sm-first col_md-last col_lg-last">
                    <MediaCTA
                      title="IoT Asset Tracker"
                      content={
                        '<p>View all of your MyBit Asset Investments in one place. It’s essentially the blockfolio for IoT assets on the MyBit Platform!</p>'
                      }
                      isLeft
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid__container"
              style={{ width: '100%', margin: 'auto', marginTop: '75px' }}
            >
              <Highlight
                title={'Native Wallets'}
                isLight
                isCentered
                isTransparent
                isFullWidth
              />
            </div>
            <div>
              <Wallets Wallets={wallets} />
            </div>
            <div className="Products__developer" style={{ marginTop: '75px' }}>
              <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
              <MediaCTA
                title="Are you an app developer?"
                content="<p>Learn about being rewarded for developing for MyBit.</p>"
                button={
                  <a href="#" target="_top" rel="noopener noreferrer">
                    <Button
                      key="buttonA"
                      label="Learn more"
                      isLight
                      onClick={action('button-click')}
                    />
                  </a>
                }
              />
            </div>
          </div>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
