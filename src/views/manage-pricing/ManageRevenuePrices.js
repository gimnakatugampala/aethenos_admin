import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';  // Importing Material-UI Button
import Alert from '@mui/material/Alert';    // Importing Material-UI Alert
import { useEffect } from 'react';
import { AddRevenueSplit, GetRevenueSplit } from 'api';

const ManageRevenuePrices = () => {
  // State to hold the values of the form fields
  const [aethenosRevenue1, setAethenosRevenue1] = useState('');
  const [instructorRevenue1, setInstructorRevenue1] = useState('');
  const [aethenosRevenue2, setAethenosRevenue2] = useState('');
  const [instructorRevenue2, setInstructorRevenue2] = useState('');
  const [error, setError] = useState(''); // State to hold error messages

  // Handle save button click
  const handleSave = () => {
    // Reset any previous error
    setError('');

    // Check if any of the fields are empty
    if (!aethenosRevenue1 || !instructorRevenue1 || !aethenosRevenue2 || !instructorRevenue2) {
      setError('All fields must be filled out.');
      return;
    }

    // Validate that each input is a number
    const aethenos1 = parseFloat(aethenosRevenue1);
    const instructor1 = parseFloat(instructorRevenue1);
    const aethenos2 = parseFloat(aethenosRevenue2);
    const instructor2 = parseFloat(instructorRevenue2);

    if (isNaN(aethenos1) || isNaN(instructor1) || isNaN(aethenos2) || isNaN(instructor2)) {
      setError('All values must be valid numbers.');
      return;
    }

    // Validate that each pair adds up to 100%
    if (aethenos1 + instructor1 !== 100) {
      setError('The combined value of Aethenos Revenue and Instructor Revenue for Referral Link Split should be 100%.');
      return;
    }

    if (aethenos2 + instructor2 !== 100) {
      setError('The combined value of Aethenos Revenue and Instructor Revenue for Aethenos Split should be 100%.');
      return;
    }

    // Store the values (this could be an API call or local storage save)
    const data = {
      aethenosRevenue1,
      instructorRevenue1,
      aethenosRevenue2,
      instructorRevenue2,
    };

    AddRevenueSplit(data)

    console.log('Saving data:', data);
    // You can replace the above line with an API call to save the data to a server or save it to local storage.
  };

  useEffect(() => {
    GetRevenueSplit(
      setAethenosRevenue1,
      setInstructorRevenue1,
      setAethenosRevenue2,
      setInstructorRevenue2
    )
  }, [])
  

  return (
    <div>  
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            Revenue Prices
          </Typography>

          {error && (
            <Alert severity="error" className="mb-3">
              {error}
            </Alert>
          )}

          <div className='row'>
            <div className='col-md-12 mt-3'><h5>Referral Link Split</h5></div>

            <div className='col-md-6'>
              <Form inline>
                <Form.Group className="mb-3 mr-3" controlId="aethenosRevenue1">
                  <Form.Label className="mr-2">Aethenos Revenue (%)</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter value" 
                    value={aethenosRevenue1} 
                    onChange={(e) => setAethenosRevenue1(e.target.value)} 
                  />
                </Form.Group>
              </Form>
            </div>

            <div className='col-md-6'>
              <Form inline>
                <Form.Group className="mb-3" controlId="instructorRevenue1">
                  <Form.Label className="mr-2">Instructor Revenue(%)</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter value" 
                    value={instructorRevenue1} 
                    onChange={(e) => setInstructorRevenue1(e.target.value)} 
                  />
                </Form.Group>
              </Form>
             </div>

            <div className='col-md-12 mt-3'><h5>Aethenos Split</h5></div>

            <div className='col-md-6'>
              <Form inline>
                <Form.Group className="mb-3 mr-3" controlId="aethenosRevenue2">
                  <Form.Label className="mr-2">Aethenos Revenue (%)</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter value" 
                    value={aethenosRevenue2} 
                    onChange={(e) => setAethenosRevenue2(e.target.value)} 
                  />
                </Form.Group>
              </Form>
            </div>

            <div className='col-md-6'>
              <Form inline>
                <Form.Group className="mb-3" controlId="instructorRevenue2">
                  <Form.Label className="mr-2">Instructor Revenue(%)</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter value" 
                    value={instructorRevenue2} 
                    onChange={(e) => setInstructorRevenue2(e.target.value)} 
                  />
                </Form.Group>
              </Form>
            </div>

            <div className='col-md-12 mt-4'>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageRevenuePrices;
