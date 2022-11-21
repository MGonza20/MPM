import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Pagination from '../pages/components/Pagination'

describe('Pagination Component Testings', () => {
    test('Testing Render Pagination Component', () => {
        render(
            <Pagination
                postsPerPage={12}
                totalPosts={20}
                paginate={(number) => {}}
            />
        )
        const paginationElement = screen.getByTestId('paginate-component')
        expect(paginationElement).toBeInTheDocument()
    })
})
