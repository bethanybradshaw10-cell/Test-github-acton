import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      {/* 背景装饰光斑 */}
      <div className="gradient-bg"></div>
      
      {/* 主卡片 */}
      <div className="glass-card">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1>Vite + React</h1>
        <p className="subtitle">高性能前端构建测试页</p>
        
        <div className="interaction-area">
          <button onClick={() => setCount((count) => count + 1)}>
            当前计数 is {count}
          </button>
          <p className="hint">
            编辑 <code>src/App.jsx</code> 保存以测试热更新 (HMR)
          </p>
        </div>
        
        <p className="read-the-docs">
          点击上方 Logo 查看官方文档
        </p>
      </div>
    </div>
  )
}

export default App