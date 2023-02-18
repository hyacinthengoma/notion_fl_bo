//import { ParseError } from 'katex'
import { renderToString } from "react-dom/server";
//import renderToString from 'katex'

import 'katex/dist/katex.min.css';

function render(expression: string, displayMode: boolean): string {
  let result: string
  try {
    result = renderToString(expression, { displayMode: displayMode })
  } catch (e) {
    /*if (e instanceof ParseError) {
      result = e.message
    }*/
    if (process.env.NODE_ENV !== 'production') {
      console.error(e)
    }
  }
  return result
}

const Equation = ({ children, displayMode = true }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: render(children, displayMode),
      }}
    />
  )
}

export default Equation
