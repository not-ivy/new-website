import { render } from 'preact'
import { App } from './app'
import '@unocss/reset/tailwind.css'
import 'uno.css'

render(<App />, document.getElementById('app') as HTMLElement)
