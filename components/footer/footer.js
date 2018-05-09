import React from 'react';
import PropTypes from 'prop-types';
import { Subscribe } from '../subscribe';
import stylesheet from './footer.scss';

export const FooterList = ({ links }) => {
  return (
    <ul className="Footer__list">
      {
        links.map(link => (
          <li key={link.title}>
            {
              link.url ?
              (
                <a
                  className={`Footer__link ${link.inactive && 'Footer__link--is-inactive'}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ) :
              (
                <span
                  className={`Footer__link ${link.inactive && 'Footer__link--is-inactive'}`}
                >
                  {link.title}
                </span>
              )
             }
          </li>
        ))
      }
    </ul>)
};

export const MyBitFooter = () => {
  const sections = [
  {
    title: 'Subscribe',
    isContentNode: true,
    content: <Subscribe onSubmit={() => {}} label='To our email list' buttonLabel='Send' placeholder='Enter email address' />
  },
  {
    title: 'Products',
    isContentNode: true,
    content:
  <FooterList
    links={[{
        title: 'DApp',
        url: 'https://github.com/MyBitFoundation/MyBitDapp'
      }, {
        title: 'Wallets (soon)',
        inactive: true,
      }, {
        title: 'Mobile (soon)',
        inactive: true,
    }]}
  />
  }, {
    title: 'Resources',
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Github',
      url: 'https://github.com/MyBitFoundation'
    }, {
      title: 'How to buy (outdated)',
      inactive: true,
    }, {
      title: 'How to store (outdated)',
      inactive: true,
    }, {
      title: 'Explorer',
      url: 'https://ethplorer.io/address/0x5d60d8d7eF6d37E16EBABc324de3bE57f135e0BC'
    }]}
  />
  }, {
    title: 'About',
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Blog',
      url: 'https://medium.com/mybit-dapp'
    }, {
      title: 'Company',
      url: 'https://www.linkedin.com/company/mybit/'
    }, {
      title: 'Careers (soon)',
      inactive: true,
    }, {
      title: 'Events (soon)',
      inactive: true,
    }, {
      title: 'Merchandice (soon)',
      inactive: true,
    }, {
      title: 'Contact Us',
      url: 'mailto:info@mybit.io'
    }, {
      title: 'Contribute (soon)',
      inactive: true,
    }]}
  />
  }, {
    title: '',
    content: `
    <img src='/static/svgs/icons/mybit-full-white.svg' width='100px' height='100px'/>
    <p>MyBit Foundation. Dammstrasse 16, 6300 Zug, Switzerland.</p><p>
      MyBit Stiftung (MyBit Foundation) is registered in Zug, Switzerland.</p><p>Identification number CHE-177.186.963 <a class="Footer__link" href="./static/files/MyBit_CHE-177.186.963.pdf" target="_blank" rel="noopener noreferrer">(pdf)</a>, Commercial register <a class="Footer__link" href="https://www.zefix.ch/en/search/entity/list/firm/1313862?name=mybit&amp;searchType=exact" target="_blank" rel="noopener noreferrer">(web).</a></p>`
  }];
  return (<Footer sections={sections} copyright='Copyright &copy; MyBit 2017. All Rights Reserved.' />)
}

export const Footer = ({ copyright, sections }) => {
  return (
    <footer className="Footer">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {
        sections.map(section => (
          <div key={section.title} className="Footer__section">
            <h2 className="Footer__title">{section.title}</h2>
            {
              section.isContentNode ?
              section.content :
              <div
                dangerouslySetInnerHTML={{
                  __html: section.content
                }}
              />
            }
          </div>)
        )
      }
      <small className="Footer__copyright">{copyright}</small>
    </footer>)
};

FooterList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  }))
};

FooterList.defaultProps = [];

Footer.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  })),
  copyright: PropTypes.string
}

Footer.defaultProps = [];