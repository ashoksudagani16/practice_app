import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/greet"

describe("Greet", () => {
    test('check text hi', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hi/i)
        expect(textElement).toBeInTheDocument()
    })
    
    test('check component with a name', () => {
        render(<Greet name="Ashok" />)
        const textElement = screen.getByText("Hi Ashok")
        expect(textElement).toBeInTheDocument()
    })
})
