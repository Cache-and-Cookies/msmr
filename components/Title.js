// @author Jimmy Yang
import React from 'react'
import styles from '../styles/Title.module.css'

export default function Title({ title, position }) {
  let titleStyle = []
  if (position === 'start') {
    titleStyle.push(styles.TitleStart)
  } else if (position == 'middle') {
    titleStyle.push(styles.TitleMiddle)
  }
  titleStyle = titleStyle.join(' ')

  console.log(titleStyle)
  return (
    <h1 className={ titleStyle }>
      { title }
    </h1>
  )
}