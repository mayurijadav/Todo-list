import Image from 'next/image'
import styles from './page.module.css'
import TodoInputt from './TodoInput';

 function Home() {
  return (
    <>
      <h1>TODO LIST</h1>
      <TodoInputt />
    </>
  )
}
export default Home;
