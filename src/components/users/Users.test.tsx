import {render, screen, fireEvent, within} from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import UserList from "./UserList";
import App from "./index"

// user form test cases
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
    const nameInput = screen.getByRole('textbox', {name: /name/i });
    const emailInput = screen.getByRole('textbox', {name: /email/i });

    // if present, simulate typing data into that
    // user.type(nameInput, "ashok");
    // user.type(emailInput, "ashok@gmail.com");
    fireEvent.change(nameInput, { target: { value: 'ashok' } });
    fireEvent.change(emailInput, { target: { value: 'ashok@gmail.com' } });

    // check submit button present or not 
    const button = screen.getByRole('button');

    // if present, simulate click that submit button
    // user.click(button);
    fireEvent.click(button);

    // assertion to make sure 'onSubmit' gets called with name/email
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("ashok", "ashok@gmail.com");
});

test("clear the inputs after submit", () => {
    const mock = jest.fn();
    
    // render the component
    render(<UserForm onSubmit={mock} />);

    // check two inputs are present or not 
    const nameInput = screen.getByRole('textbox', {name: /name/i });
    const emailInput = screen.getByRole('textbox', {name: /email/i });

    // if present, simulate typing data into that
    fireEvent.change(nameInput, { target: { value: 'ashok' } });
    fireEvent.change(emailInput, { target: { value: 'ashok@gmail.com' } });

    // check submit button present or not 
    const button = screen.getByRole('button');

    // if present, simulate click that submit button
    fireEvent.click(button);

    // assertion: To clear inputs after onSubmit
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
})


// user list test cases

function renderUserListComponent() {
    const users = [{name: "ashok", email: "ashok@email.com"}, 
        {name: "ram", email: "ram@email.com"}]
    
     // find the component
    render(<UserList users={users}  />);

    return {
        users
    }
}


test("it renders one row per user", ()=> {
 // find the component
 renderUserListComponent()
//  const {container} = render(<UserList users={users}  />);

 // check all rows present or not as per users 
 const rows = within(screen.getByTestId("users")).getAllByRole("row")
//  const rows = container.querySelectorAll('tbody tr')

 // assertion: correct number of in the table
 expect(rows).toHaveLength(2);
})



test("check rendering email and name of each user", () => {
// find the component
const {users} = renderUserListComponent()

for(let u of users){
    //check all cells users data
    const name = screen.getByRole('cell', {name: u.name})
    const email = screen.getByRole('cell', {name: u.email})

    //assertion: check data is present or not
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
}
})


// whole app test case

test("can receive new user and shows in the list", () => {
    // render the component
    render(<App />)

    // simulate typing data into the form, shows in the list

        // check two inputs are present or not 
        const nameInput = screen.getByRole('textbox', {name: /name/i });
        const emailInput = screen.getByRole('textbox', {name: /email/i });
    
        // if present, simulate typing data into that
        fireEvent.change(nameInput, { target: { value: 'ashok' } });
        fireEvent.change(emailInput, { target: { value: 'ashok@gmail.com' } });
    
        // check submit button present or not 
        const button = screen.getByRole('button');
    
        // if present, simulate click that submit button
        fireEvent.click(button);

        const name = screen.getByRole('cell', {name: 'ashok' })
        const email = screen.getByRole('cell', {name: 'ashok@gmail.com' })
    
        // assertion: make sure simulated present or not in the list
        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()

})