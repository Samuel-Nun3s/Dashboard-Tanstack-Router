import { createLazyFileRoute } from '@tanstack/react-router'

import DefaultDiv from '../components/layout/DefaultDiv';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import styles from './settings.module.css';

export const Route = createLazyFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles.settings}>
      <DefaultDiv>
        <DefaultDiv
          customClass="subdiv"
        >
          <h1>Settings</h1>
        </DefaultDiv>
        <DefaultDiv
          customClass="subdiv"
        >
          <h2>Developed by:</h2>
          <h3>Samuel Nunes</h3>
          <a href="https://www.linkedin.com/in/samuel-nunes-5b4b72270/" target='blank'><FaLinkedin/></a>
          <a href="https://github.com/Samuel-Nun3s" target='blank'><FaGithub/></a>
        </DefaultDiv>
      </DefaultDiv>
    </div>
  )
}
