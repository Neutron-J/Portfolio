import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './text-section.module.css'

export default ({ section }) => (
  <div className={styles.preview}>
    <h3 className={styles.sectionTitle}>
      {section.sectionTitle}
    </h3>
    <div
       dangerouslySetInnerHTML={{
        __html: section.bodyText.childContentfulRichText.html
      }} 
    />
  </div>
)
