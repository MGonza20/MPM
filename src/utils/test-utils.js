import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    storee = store(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={storee}>{children}</Provider>
  }
  return { storee, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}