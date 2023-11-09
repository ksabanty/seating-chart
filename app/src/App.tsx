import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import MainGrid from './components/MainGrid';

function App() {
  return (
    <>
    <MantineProvider>
      <h1>Seating chart for your wedding</h1>
      <MainGrid />
    </MantineProvider>
    </>
  )
}

export default App
