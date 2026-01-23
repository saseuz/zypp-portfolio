import './App.css'
import { MainLayout } from './layouts/MainLayout'
import { ThemeProvider } from './context/ThemeContext'
import { Index } from './pages/Index'

function App() {

  return (
    <ThemeProvider>
      <MainLayout>
          <Index />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
