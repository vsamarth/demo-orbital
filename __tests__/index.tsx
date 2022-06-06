// __tests__/snapshot.js

import { render ,screen} from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
it('renders Hello World', () => {
    render(<Home />)
    expect(screen.getByRole('heading')).toHaveTextContent('Hello World')
})