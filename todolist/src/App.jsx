
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import List from './components/List'
import Title from './components/Title'

function App() {
  
  return (
      <div className='container'>
      <Title />
      <hr/>
      <Input/>
      <List/>
      <Button title="Delete" title-two ="Add"/>
    </div>
  )
}
export default App
