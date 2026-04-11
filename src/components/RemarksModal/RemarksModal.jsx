import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RemarksModal = ({ actionType, onSubmit, onClose, existingRemarks = '', viewMode = false }) => {
  const [remarks, setRemarks] = useState(viewMode ? existingRemarks : '');

  const handleChange = (e) => {
    setRemarks(e.target.value);
  };

  const handleSubmit = () => {
    if (remarks.trim()) {
      onSubmit(remarks);
      setRemarks('');
    } else {
      alert('Please enter remarks before submitting.');
    }
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {viewMode
            ? 'View Remarkss'
            : actionType === 'approve'
            ? 'Approve Remarks'
            : 'Reject Remarks'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {viewMode ? (
          <Form.Group>
            <Form.Label>Remarks:</Form.Label>
            <Form.Control as="textarea" rows={3} value={remarks} readOnly />
          </Form.Group>
        ) : (
          <Form>
            <Form.Group>
              <Form.Label>Enter remarks for {actionType}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={remarks}
                onChange={handleChange}
                placeholder={`Enter remarks for ${actionType}`}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        {!viewMode && (
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default RemarksModal;
