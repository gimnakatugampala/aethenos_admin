import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import AddIcon from '@mui/icons-material/Add';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Paper from '@mui/material/Paper';
import Form from 'react-bootstrap/Form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';


const ManagePricing = () => {

  const [DminPrice, setDminPrice] = useState("")
  const [DmaxPrice, setDmaxPrice] = useState("")

  const [minUSA, setminUSA] = useState("")
  const [maxUSA, setmaxUSA] = useState("")

  const [minAustralia, setminAustralia] = useState("")
  const [maxAustralia, setmaxAustralia] = useState("")

  const [minBrazil, setminBrazil] = useState("")
  const [maxBrazil, setmaxBrazil] = useState("")

  const [minCanada, setminCanada] = useState("")
  const [maxCanada, setmaxCanada] = useState("")

  const [minChile, setminChile] = useState("")
  const [maxChile, setmaxChile] = useState("")
  
  const [minColumbia, setminColumbia] = useState("")
  const [maxColumbia, setmaxColumbia] = useState("")

  const [minEgypt, setminEgypt] = useState("")
  const [maxEgypt, setmaxEgypt] = useState("")

  const [minEU, setminEU] = useState("")
  const [maxEU, setmaxEU] = useState("")

  const [minGB, setminGB] = useState("")
  const [maxGB, setmaxGB] = useState("")

  const [minindonedia, setminindonedia] = useState("")
  const [maxindonedia, setmaxindonedia] = useState("")

  const [minIsrael, setminIsrael] = useState("")
  const [maxIsrael, setmaxIsrael] = useState("")

  const [minIndia, setminIndia] = useState("")
  const [maxIndia, setmaxIndia] = useState("")

  const [minJapan, setminJapan] = useState("")
  const [maxJapan, setmaxJapan] = useState("")

  const [minKorea, setminKorea] = useState("")
  const [maxKorea, setmaxKorea] = useState("")

  const [minMexico, setminMexico] = useState("")
  const [maxMexico, setmaxMexico] = useState("")

  const [minMalaysia, setminMalaysia] = useState("")
  const [maxMalaysia, setmaxMalaysia] = useState("")

  const [minNigeria, setminNigeria] = useState("")
  const [maxNigeria, setmaxNigeria] = useState("")
  
  const [minNorway, setminNorway] = useState("")
  const [maxNorway, setmaxNorway] = useState("")

  const [minPeru, setminPeru] = useState("")
  const [maxPeru, setmaxPeru] = useState("")


  const [minPhilipine, setminPhilipine] = useState("")
  const [maxPhilipine, setmaxPhilipine] = useState("")


  const [minPoland, setminPoland] = useState("")
  const [maxPoland, setmaxPoland] = useState("")

  const [minRomania, setminRomania] = useState("")
  const [maxRomania, setmaxRomania] = useState("")

  const [minRussia, setminRussia] = useState("")
  const [maxRussia, setmaxRussia] = useState("")

  const [minSingapore, setminSingapore] = useState("")
  const [maxSingapore, setmaxSingapore] = useState("")

  const [minThailand, setminThailand] = useState("")
  const [maxThailand, setmaxThailand] = useState("")

  const [minTurkey, setminTurkey] = useState("")
  const [maxTurkey, setmaxTurkey] = useState("")


  const [minTaiwan, setminTaiwan] = useState("")
  const [maxTaiwan, setmaxTaiwan] = useState("")

  const [minVietnam, setminVietnam] = useState("")
  const [maxVietnam, setmaxVietnam] = useState("")

  const [minSA, setminSA] = useState("")
  const [maxSA, setmaxSA] = useState("")

  const [minOC, setminOC] = useState("")
  const [maxOC, setmaxOC] = useState("")
  




  
  

  return (
    <div className='row'>

    <Card className='col-md-12'>
    <CardContent>

    <Typography className='my-3' variant="h2">
        Set Course Pricing
      </Typography>
   
    <Paper className='row'>

     <div>

    <div className='d-flex justify-content-end mb-5'> 

     <Button className='mx-1' variant="contained"><AddIcon /> Save Prices</Button>
    </div>

   
    <div className='row my-3'>
    <div className='col-md-4'>
    <Form.Label>Minimum Price (USD)</Form.Label>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
      <Form.Control
        onChange={(e) => setDminPrice(e.target.value)}
        value={DminPrice}
        placeholder="USD"
        aria-label="USD"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    </div>

  <div className='col-md-4'>
    <Form.Label>Maximum Price (USD)</Form.Label>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
      <Form.Control
      onChange={(e) => setDmaxPrice(e.target.value)}
        value={DmaxPrice}
        placeholder="USD"
        aria-label="USD"
        aria-describedby="basic-addon1"
      />
    </InputGroup>


  </div>

  <div className='col-md-4 d-flex align-items-center mt-2'>
  <Button  className='mx-1' variant="contained">Submit</Button>
  </div>




</div>

 

  

   

     <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Country</th>
          <th>Currency</th>
          <th>Min Price</th>
          <th>Max Price</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td><b>America</b></td>
          <td>USD</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Australia</b></td>
          <td>AUD</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        
        <tr>
          <td><b>Brazil</b></td>
          <td>BRL</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Canada</b></td>
          <td>CAD</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Chile</b></td>
          <td>CLP</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Columbia</b></td>
          <td>COP</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Egypt</b></td>
          <td>EGP</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        
        <tr>
          <td><b>European Union</b></td>
          <td>EUR</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Great Britain</b></td>
          <td>GBP</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Indonesia</b></td>
          <td>IDR</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Israel</b></td>
          <td>ILS</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>India</b></td>
          <td>INR</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Japan</b></td>
          <td>JPY</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>South Korea</b></td>
          <td>KRW</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Mexico</b></td>
          <td>MXN</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Malaysia</b></td>
          <td>MYR</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Nigeria</b></td>
          <td>NGN</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Norway</b></td>
          <td>NOK</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Peru</b></td>
          <td>PEN</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Philippines</b></td>
          <td>PHP</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Poland</b></td>
          <td>PLN</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Romania</b></td>
          <td>RON</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Russia</b></td>
          <td>RUB</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Singapore</b></td>
          <td>SGD</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Thailand</b></td>
          <td>THB</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Turkey</b></td>
          <td>TRY</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Taiwan</b></td>
          <td>TWD</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Vietnam</b></td>
          <td>VND</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>South Africa</b></td>
          <td>ZAR</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr>

        {/* <tr>
          <td><b>Other Countries</b></td>
          <td>USD</td>
          <td>
            <Form.Control type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control type="text" placeholder="Max Price" />
          </td>
        </tr> */}

      </tbody>
    </Table>
     </div>
    



    </Paper>
    </CardContent>
  </Card>
  </div>
  )
}

export default ManagePricing