import React, { useEffect, useState } from 'react'
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
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import { AddSetDefaultPricing , AddSetPricing , GetPricingRange } from 'api';


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


  const handleDefaultPrice = () => {
    console.log(DminPrice)
    console.log(DmaxPrice)

    if(DminPrice == ""){
      ErrorAlert("Empty Field","Please Enter a Default Minimum Price")
      return
    }else if(DmaxPrice == ""){
      ErrorAlert("Empty Field","Please Enter a Default Maximum Price")
      return
    }else if(!(/^\d*$/.test(DminPrice))){
      ErrorAlert("Invalid Input","Please Enter Only Numbers for Default Minimum Value")
      return
    }else if(!(/^\d*$/.test(DmaxPrice))){
      ErrorAlert("Invalid Input","Please Enter Only Numbers for Default Maximum Value")
      return
    }

    AddSetDefaultPricing(DminPrice,DmaxPrice)

  }

  const handleAllPricing = () =>{

    const item = {
      "country": [
          "America",
          "Australia",
          "Brazil",
          "Canada",
          "Chile",
          "Columbia",
          "Egypt",
          "European Union",
          "Great Britain",
          "Indonesia",
          "Israel",
          "India",
          "Japan",
          "South Korea",
          "Mexico",
          "Malaysia",
          "Nigeria",
          "Norway",
          "Peru",
          "Philippines",
          "Poland",
          "Romania",
          "Russia",
          "Singapore",
          "Thailand",
          "Turkey",
          "Taiwan",
          "Vietnam",
          "South Africa",
          "Other Countries"
      ],
      "minPrice": [
        minUSA == "" ? "0" : minUSA,
        minAustralia == "" ? "0" : minAustralia,
        minBrazil == "" ? "0" : minBrazil,
        minCanada == "" ? "0" : minCanada,
        minChile == "" ? "0" : minChile,
        minColumbia == "" ? "0" : minColumbia,
        minEgypt == "" ? "0" : minEgypt,
        minEU == "" ? "0" : minEU,
        minGB == "" ? "0" : minGB,
        minindonedia == "" ? "0" : minindonedia,
        minIsrael == "" ?  "0" : minIsrael,
        minIndia == "" ? "0" : minIndia,
        minJapan == "" ? "0" : minJapan,
        minKorea == "" ? "0" : minKorea,
        minMexico == "" ? "0" : minMexico,
        minMalaysia == "" ? "0" : minMalaysia,
        minNigeria == "" ? "0" : minNigeria,
        minNorway == "" ? "0" : minNorway,
        minPeru == "" ? "0" : minPeru,
        minPhilipine == "" ? "0" : minPhilipine,
        minPoland == "" ? "0" : minPoland,
        minRomania == "" ? "0" : minRomania,
        minRussia == "" ? "0" : minRussia,
        minSingapore == "" ? "0" : minSingapore,
        minThailand == "" ? "0" : minThailand,
        minTurkey == "" ? "0" : minTurkey,
        minTaiwan == "" ? "0" : minTaiwan,
        minVietnam == "" ?  "0" : minVietnam,
        minSA == "" ? "0" : minSA,
        DminPrice == "" ? "0" : DminPrice
      ],
      "maxPrice": [
        maxUSA == "" ? "0" : maxUSA,
        maxAustralia == "" ?  "0" : maxAustralia,
        maxBrazil == "" ? "0" : maxBrazil,
        maxCanada == "" ? "0" : maxCanada,
        maxChile == "" ? "0" : maxChile,
        maxColumbia == "" ? "0" : maxColumbia,
        maxEgypt == "" ? "0" : maxEgypt,
        maxEU == "" ? "0" : maxEU,
        maxGB == "" ? "0" : maxGB,
        maxindonedia == "" ? "0" : maxindonedia,
        maxIsrael == "" ? "0" : maxIsrael,
        maxIndia == "" ? "0" : maxIndia,
        maxJapan == "" ? "0" : maxJapan,
        maxKorea == "" ? "0" : maxKorea,
        maxMexico == "" ? "0" : maxMexico,
        maxMalaysia == "" ? "0" : maxMalaysia,
        maxNigeria == "" ? "0" : maxNigeria,
        maxNorway == "" ? "0" : maxNorway,
        maxPeru == "" ? "0" : maxPeru,
        maxPhilipine == "" ? "0" : maxPhilipine,
        maxPoland == "" ? "0" : maxPoland,
        maxRomania == "" ? "0" : maxRomania,
        maxRussia == "" ? "0" : maxRussia,
        maxSingapore == "" ? "0" : maxSingapore,
        maxThailand == "" ? "0" : maxThailand,
        maxTurkey == "" ? "0" : maxTurkey,
        maxTaiwan == "" ?  "0" : maxTaiwan,
        maxVietnam == "" ? "0" : maxVietnam,
        maxSA == "" ? "0" : maxSA,
        DmaxPrice == "" ? "0" : DmaxPrice
      ]
    }

    AddSetPricing(item)

    console.log(item)
  }


  useEffect(() => {
    GetPricingRange(
      setDminPrice,
      setDmaxPrice,
      setminUSA,
      setmaxUSA,
      setminAustralia,
      setmaxAustralia,
      setminBrazil,
      setmaxBrazil,
      setminCanada,
      setmaxCanada,
      setminChile,
      setmaxChile,
      setminColumbia,
      setmaxColumbia,
      setminEgypt,
      setmaxEgypt,
      setminEU,
      setmaxEU,
      setminGB,
      setmaxGB,
      setminindonedia,
      setmaxindonedia,
      setminIsrael,
      setmaxIsrael,
      setminIndia,
      setmaxIndia,
      setminJapan,
      setmaxJapan,
      setminKorea,
      setmaxKorea,
      setminMexico,
      setmaxMexico,
      setminMalaysia,
      setmaxMalaysia,
      setminNigeria,
      setmaxNigeria,
      setminNorway,
      setmaxNorway,
      setminPeru,
      setmaxPeru,
      setminPhilipine,
      setmaxPhilipine,
      setminPoland,
      setmaxPoland,
      setminRomania,
      setmaxRomania,
      setminRussia,
      setmaxRussia,
      setminSingapore,
      setmaxSingapore,
      setminThailand,
      setmaxThailand,
      setminTurkey,
      setmaxTurkey,
      setminTaiwan,
      setmaxTaiwan,
      setminVietnam,
      setmaxVietnam,
      setminSA,
      setmaxSA
      )
  },[])
  

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

     <Button onClick={handleAllPricing} className='mx-1' variant="contained"><AddIcon /> Save Prices</Button>
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
  <Button  onClick={handleDefaultPrice} className='mx-1' variant="contained">Submit</Button>
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
            <Form.Control value={minUSA} onChange={(e) => setminUSA(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxUSA} onChange={(e) => setmaxUSA(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Australia</b></td>
          <td>AUD</td>
          <td>
            <Form.Control value={minAustralia} onChange={(e) => setminAustralia(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxAustralia} onChange={(e) => setmaxAustralia(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        
        <tr>
          <td><b>Brazil</b></td>
          <td>BRL</td>
          <td>
            <Form.Control value={minBrazil} onChange={(e) => setminBrazil(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxBrazil} onChange={(e) => setmaxBrazil(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Canada</b></td>
          <td>CAD</td>
          <td>
            <Form.Control value={minCanada} onChange={(e) => setminCanada(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxCanada} onChange={(e) => setmaxCanada(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Chile</b></td>
          <td>CLP</td>
          <td>
            <Form.Control value={minChile} onChange={(e) => setminChile(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxChile} onChange={(e) => setmaxChile(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Columbia</b></td>
          <td>COP</td>
          <td>
            <Form.Control value={minColumbia} onChange={(e) => setminColumbia(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxColumbia} onChange={(e) => setmaxColumbia(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Egypt</b></td>
          <td>EGP</td>
          <td>
            <Form.Control value={minEgypt} onChange={(e) => setminEgypt(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxEgypt} onChange={(e) => setmaxEgypt(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        
        <tr>
          <td><b>European Union</b></td>
          <td>EUR</td>
          <td>
            <Form.Control value={minEU} onChange={(e) => setminEU(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxEU} onChange={(e) => setmaxEU(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Great Britain</b></td>
          <td>GBP</td>
          <td>
            <Form.Control value={minGB} onChange={(e) => setminGB(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxGB} onChange={(e) => setmaxGB(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Indonesia</b></td>
          <td>IDR</td>
          <td>
            <Form.Control value={minindonedia} onChange={(e) => setminindonedia(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxindonedia} onChange={(e) => setmaxindonedia(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Israel</b></td>
          <td>ILS</td>
          <td>
            <Form.Control value={minIsrael} onChange={(e) => setminIsrael(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxIsrael} onChange={(e) => setmaxIsrael(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>India</b></td>
          <td>INR</td>
          <td>
            <Form.Control value={minIndia} onChange={(e) => setminIndia(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxIndia} onChange={(e) => setmaxIndia(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Japan</b></td>
          <td>JPY</td>
          <td>
            <Form.Control value={minJapan} onChange={(e) => setminJapan(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxJapan} onChange={(e) => setmaxJapan(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>South Korea</b></td>
          <td>KRW</td>
          <td>
            <Form.Control value={minKorea} onChange={(e) => setminKorea(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxKorea} onChange={(e) => setmaxKorea(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Mexico</b></td>
          <td>MXN</td>
          <td>
            <Form.Control value={minMexico} onChange={(e) => setminMexico(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxMexico} onChange={(e) => setmaxMexico(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Malaysia</b></td>
          <td>MYR</td>
          <td>
            <Form.Control value={minMalaysia} onChange={(e) => setminMalaysia(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxMalaysia} onChange={(e) => setmaxMalaysia(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Nigeria</b></td>
          <td>NGN</td>
          <td>
            <Form.Control value={minNigeria} onChange={(e) => setminNigeria(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxNigeria} onChange={(e) => setmaxNigeria(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Norway</b></td>
          <td>NOK</td>
          <td>
            <Form.Control value={minNorway} onChange={(e) => setminNorway(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxNorway} onChange={(e) => setmaxNorway(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Peru</b></td>
          <td>PEN</td>
          <td>
            <Form.Control value={minPeru} onChange={(e) => setminPeru(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxPeru} onChange={(e) => setmaxPeru(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Philippines</b></td>
          <td>PHP</td>
          <td>
            <Form.Control value={minPhilipine} onChange={(e) => setminPhilipine(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxPhilipine} onChange={(e) => setmaxPhilipine(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Poland</b></td>
          <td>PLN</td>
          <td>
            <Form.Control value={minPoland} onChange={(e) => setminPoland(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxPoland} onChange={(e) => setmaxPoland(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Romania</b></td>
          <td>RON</td>
          <td>
            <Form.Control value={minRomania} onChange={(e) => setminRomania(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxRomania} onChange={(e) => setmaxRomania(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Russia</b></td>
          <td>RUB</td>
          <td>
            <Form.Control value={minRussia} onChange={(e) => setminRussia(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxRussia} onChange={(e) => setmaxRussia(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Singapore</b></td>
          <td>SGD</td>
          <td>
            <Form.Control value={minSingapore} onChange={(e) => setminSingapore(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxSingapore} onChange={(e) => setmaxSingapore(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Thailand</b></td>
          <td>THB</td>
          <td>
            <Form.Control value={minThailand} onChange={(e) => setminThailand(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxThailand} onChange={(e) => setmaxThailand(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Turkey</b></td>
          <td>TRY</td>
          <td>
            <Form.Control value={minTurkey} onChange={(e) => setminTurkey(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxTurkey} onChange={(e) => setmaxTurkey(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Taiwan</b></td>
          <td>TWD</td>
          <td>
            <Form.Control value={minTaiwan} onChange={(e) => setminTaiwan(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxTaiwan} onChange={(e) => setmaxTaiwan(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>Vietnam</b></td>
          <td>VND</td>
          <td>
            <Form.Control value={minVietnam} onChange={(e) => setminVietnam(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxVietnam} onChange={(e) => setmaxVietnam(e.target.value)} type="text" placeholder="Max Price" />
          </td>
        </tr>

        <tr>
          <td><b>South Africa</b></td>
          <td>ZAR</td>
          <td>
            <Form.Control value={minSA} onChange={(e) => setminSA(e.target.value)} type="text" placeholder="Min Price" />
          </td>
          <td>
          <Form.Control value={maxSA} onChange={(e) => setmaxSA(e.target.value)} type="text" placeholder="Max Price" />
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