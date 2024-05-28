import { Toaster, toast } from 'sonner'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster richColors />
    <App />
  </Provider>
)
