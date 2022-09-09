import React from 'react'
import styles from './socialList.module.css'

export const SocialList = ({links}) => {
  return (
    <div className={styles.socialList}>
       {links ? links.map(link => <SocialItem key={link.name} linkItem={link} />) : <p>no links found.</p>}
    </div>
  )
}

const SocialItem = props => {
    const {linkItem} = props
    // eslint-disable-next-line @next/next/no-img-element
    return (<a href={linkItem.link} target='_blank' rel='noreferrer'><img src={linkItem.imagesrc} alt={`${linkItem.name}`} /></a>)
}