import {render, screen, logRoles} from "@testing-library/react";
import Skills from "./index"

describe("Skills", () => {
    const skills = ["Javascript, React js, Html"];

    test("renders correctlt", () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument()
    })

    test("render a list of skills", () => {
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length)
    })

    test("render login button", () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button", {name: 'Login'});
        expect(loginButton).toBeInTheDocument()
    })

    test("render starting button", () => {
        render(<Skills skills={skills} />)
        const startButton = screen.queryByRole("button", {name: 'Start Learning'});
        expect(startButton).not.toBeInTheDocument()
    })

    test("render starting button2", async () => {
        const view = render(<Skills skills={skills} />)
        logRoles(view.container)
        const startButton = await screen.findByRole("button", {name: 'Start Learning'}, {timeout: 2000});
        expect(startButton).toBeInTheDocument()
    })
})