import React from 'react'

import styles from './style.module.scss'

import { Switch, Route, HashRouter as Router } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'

import { Sidebar as SidebarData } from '../../DB'
//위의 sidebar와 겹쳐서

const sidebarDataReverse = SidebarData.contents.slice().reverse() // 자바스크립트에서 배열에 .reverse를 하면 역순으로 바뀐다.

const Resume = () => {
  return (
    <div className={styles.resume}>
      <Router>
        <aside className={styles.leftSide}>
          <Sidebar />
        </aside>
        <aside className={styles.rightSide}>
          <Switch>{sidebarDataReverse.map((data) => <Route path={data.path} component={data.component} />)}</Switch>
        </aside>
      </Router>
    </div>
  )
}

export default Resume
