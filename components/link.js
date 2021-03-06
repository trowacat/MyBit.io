import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './link.scss'

export const Link = ({isInHomePage, isLight, name, path}) => {
  return (
    <div
      className={
        classNames({
          'Link': true,
          'Link--is-dark': !isLight
        })
      }
    >
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <a
        className={
          classNames({
            'Link__text': true,
            'Link__text--is-home': isInHomePage
          })
        }
        href={path}
      >
        {name}
      </a>
    </div>
  )
}


Link.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isInHomePage: PropTypes.bool.isRequired,
  isLight: PropTypes.bool.isRequired
}
