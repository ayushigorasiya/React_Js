import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function FilterBar({ search, setSearch }) {
  return (
    <Row className="my-3">
      <Col md={6}>
        <Form.Control
          type="text"
          placeholder="Search by location or name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Col>
    </Row>
  );
}

export default FilterBar;
