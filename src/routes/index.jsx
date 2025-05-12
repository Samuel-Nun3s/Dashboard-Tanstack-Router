import { createFileRoute } from "@tanstack/react-router";

import styles from "./index.module.css";

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <div className={styles.home}>
      <div className={styles.defaultDiv}>
        <h1>Welcome to the Dashboard</h1>
        <div>
          <p>
            This dashboard was developed with the goal of demonstrating, in practice, how to use React to build modern and interactive interfaces. Through it, you can manage users in a simple and efficient way.
          </p>
          <br/>
          <p>
            Here, you can view the list of registered users, add new entries, edit existing information, and also delete users that are no longer needed. All of this is done using features like hooks, reusable components, and dynamic routing with TanStack Router.
          </p>
          <br/>
          <p>
            The purpose of this project is to reinforce fundamental React concepts, providing a solid foundation for building real-world applications with a focus on usability and best practices.
          </p>
          <br/>
          <p>
            Feel free to explore every feature. This is another step toward mastering development with React!
          </p>
        </div>
      </div>
    </div>
  )
}
