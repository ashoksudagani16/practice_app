import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TableComponent from './DummyUsersPage';

describe('TableComponent', () => {
  // Initial render test
  test('renders table with initial rows and buttons disabled', () => {
    render(<TableComponent />);
    expect(screen.getByText('Approve')).toBeDisabled();
    expect(screen.getByText('Reject')).toBeDisabled();
  });

  // Test for selecting a row and enabling buttons
  test('enables approve and reject buttons when a pending row is selected', () => {
    render(<TableComponent />);
    
    const checkbox = screen.getAllByRole('checkbox')[1]; // select the first pending row
    fireEvent.click(checkbox);

    expect(screen.getByText('Approve')).toBeEnabled();
    expect(screen.getByText('Reject')).toBeEnabled();
  });

  // Test for opening modal for viewing remarks
  test('opens modal for viewing remarks', async () => {
    render(<TableComponent />);
    
    const viewButton = screen.getByTestId('view-remarks-3'); // Change as per your test ID
    fireEvent.click(viewButton);
    
    await waitFor(() => {
      expect(screen.getByText('View Remarkss')).toBeInTheDocument();
      expect(screen.getByText('Approved by manager')).toBeInTheDocument(); // Check for remarks text
    });
  });

  // Test for submitting remarks and updating row status
  test('submits remarks and updates row status', async () => {
    render(<TableComponent />);
    
    const checkbox = screen.getAllByRole('checkbox')[1]; // select the first pending row
    fireEvent.click(checkbox);
    
    fireEvent.click(screen.getByText('Approve')); // Assume this opens the modal
    const remarksInput = screen.getByPlaceholderText('Enter remarks for approve');
    fireEvent.change(remarksInput, { target: { value: 'Approved by manager' } });
    
    fireEvent.click(screen.getByText('Submit')); // Change as per your button text

    await waitFor(() => {
        const approvedRows = screen.getAllByText('Approved');
      expect(approvedRows.length).toBe(2); // Assuming this updates the status
    });
  });

  // Test for a row status that is already approved or rejected
  test('disables actions for approved or rejected rows', () => {
    render(<TableComponent />);
    
    // Simulate the table having a row that is approved
    // You might want to mock the initial data for this test

    const viewButtons = screen.getAllByText('View Remarks')

    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(viewButtons[2]).toBeEnabled(); // Ensure this is enabled
    expect(screen.getByText('Approve')).toBeDisabled(); // Should be disabled
    expect(screen.getByText('Reject')).toBeDisabled(); // Should be disabled
  });
});
