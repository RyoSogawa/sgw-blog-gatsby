import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import type { GatsbyLinkProps } from 'gatsby'

const Link = (props: GatsbyLinkProps<unknown>): JSX.Element => {
  const { to, ref, ...rest } = props

  // サイト内リンクはgatsby/linkコンポーネントに
  if (props.to.slice(0, 1) === '/') {
    return <GatsbyLink to={to} {...rest} />
  } else {
    // サイト外リンクは別タブで開く
    return (
      <a target={'_blank'} rel={'noreferrer noopener'} href={to} {...props} />
    )
  }
}

export default Link
