// test-utils.js
import { render, queries } from '@testing-library/react'


// react testing library

const customRender = (ui, options) =>
  render(ui, { queries: { ...queries }, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
