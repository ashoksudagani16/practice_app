import React, { useState } from 'react';
import { Table, Button, Form, Badge } from 'react-bootstrap';
import RemarksModal from '../../components/RemarksModal/RemarksModal';

const DummyUsers = () => {
    const [rows, setRows] = useState([
        { id: 1, status: 'pending', remarks: '' },
        { id: 2, status: 'pending', remarks: '' },
        { id: 3, status: 'approved', remarks: 'Approved by manager' },
        { id: 4, status: 'rejected', remarks: 'Rejected due to missing details' },
      ]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState('');
  const [modalViewMode, setModalViewMode] = useState(false);
  const [currentRemarks, setCurrentRemarks] = useState('');

  const handleRowSelection = (rowId) => {
    setSelectedRows((prev) => {
      if (prev.includes(rowId)) {
        return prev.filter((id) => id !== rowId);
      } else {
        return [...prev, rowId];
      }
    });
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(rows.filter((row) => row.status === 'pending').map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const openRemarksModal = (type) => {
    setActionType(type);
    setModalViewMode(false); // Not in view mode when approving or rejecting
    setModalOpen(true);
  };

  const handleViewRemarks = (remarks) => {
    setCurrentRemarks(remarks);
    setModalViewMode(true); // Set modal to view mode for viewing remarks
    setModalOpen(true);
  };

  const renderBadge = (status) => {
    switch (status) {
      case 'pending':
        return <Badge bg="warning">Pending</Badge>;
      case 'approved':
        return <Badge bg="success">Approved</Badge>;
      case 'rejected':
        return <Badge bg="danger">Rejected</Badge>;
      default:
        return null;
    }
  };

  const handleSubmitRemarks = (remarks) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        selectedRows.includes(row.id)
          ? { ...row, status: actionType === 'approve' ? 'approved' : 'rejected', remarks }
          : row
      )
    );
    setSelectedRows([]);
    setModalOpen(false);
  };

  return (
    <div>
      <Button
        variant="success"
        disabled={selectedRows.length === 0}
        onClick={() => openRemarksModal('approve')}
      >
        Approve
      </Button>
      {' '}
      <Button
        variant="danger"
        disabled={selectedRows.length === 0}
        onClick={() => openRemarksModal('reject')}
      >
        Reject
      </Button>
      
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                data-testid={`select row`}
                name='select row'
                onChange={handleSelectAll}
                checked={
                  selectedRows.length > 0 &&
                  selectedRows.length === rows.filter((row) => row.status === 'pending').length
                }
              />
            </th>
            <th>ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                {row.status === 'pending' && (
                  <Form.Check
                    type="checkbox"
                    onChange={() => handleRowSelection(row.id)}
                    checked={selectedRows.includes(row.id)}
                  />
                )}
              </td>
              <td>{row.id}</td>
              <td>{renderBadge(row.status)}</td>
              <td>
                <Button
                  variant="primary"
                  data-testid={`view-remarks-${row.id}`} // Add a unique identifier
                  disabled={row.status === 'pending'}
                  onClick={() => handleViewRemarks(row.remarks)}
                >
                View Remarks
                </Button>
                {' '}
                <Button variant="secondary" disabled={row.status === 'pending'}>
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {modalOpen && (
        <RemarksModal
          actionType={actionType}
          onSubmit={handleSubmitRemarks}
          onClose={() => setModalOpen(false)}
          viewMode={modalViewMode}
          existingRemarks={currentRemarks}
        />
      )}
    </div>
  );
};

export default DummyUsers;
