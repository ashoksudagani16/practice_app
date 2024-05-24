import { render, screen } from "@testing-library/react";
import Greet from "./greet"

describe("Greet", () => {
    it('check text hi', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hi/i)
        expect(textElement).toBeInTheDocument()
    })
    
    it('check component with a name', () => {
        render(<Greet name="Ashok" />)
        const textElement = screen.getByText("Hi Ashok")
        expect(textElement).toBeInTheDocument()
    })
})


// fit  --> jest only tests if we use only method
// xit  --> jest skip tests if we use skip method