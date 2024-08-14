import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and submit button", () => {
    const mockOnSubmit = jest.fn();
    render(<UserForm onSubmit={mockOnSubmit} />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument()
})

test("it calls onSubmit func when user submit the form", () => {
    const mock = jest.fn();
    
    // render the component
    render(<UserForm onSubmit={mock} />);

    // check two inputs are present or not 
    const [nameInput, emailInput] = screen.getAllByRole('textbox');

    // if present, simulate typing data into that
    user.type(nameInput, "ashok");
    user.type(emailInput, "ashok@gmail.com");

    // check submit button present or not 
    const button = screen.getByRole('button');

    // if present, simulate click that submit button
    user.click(button);

    // assertion to make sure 'onSubmit' gets called with name/email
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("ashok", "ashok@gmail.com");
});
