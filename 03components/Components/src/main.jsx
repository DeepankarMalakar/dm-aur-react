import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from './StateExample.jsx'
import Goal from './Conditional.jsx'
// import './index.css'

function Mainroot() {
    return (
        <>
            <App />
            <Counter />
            <Goal isGoal={false} />
            <Goal isGoal={true} />
        </>
    )
}

createRoot(document.getElementById('root')).render(
    <Mainroot />
)
