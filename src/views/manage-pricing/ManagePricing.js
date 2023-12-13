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
  const [DTip, setDTip] = useState("")
  const [DminValue, setDminValue] = useState("")

  const [minUSA, setminUSA] = useState("")
  const [maxUSA, setmaxUSA] = useState("")
  const [USATip, setUSATip] = useState("")
  const [USAminValue, setUSAminValue] = useState("")

  const [minAustralia, setminAustralia] = useState("")
  const [maxAustralia, setmaxAustralia] = useState("")
  const [AusTip, setAusTip] = useState("")
  const [AusminValue, setAusminValue] = useState("")

  const [minBrazil, setminBrazil] = useState("")
  const [maxBrazil, setmaxBrazil] = useState("")
  const [BrazilTip, setBrazilTip] = useState("")
  const [BrazilminValue, setBrazilminValue] = useState("")

  const [minCanada, setminCanada] = useState("")
  const [maxCanada, setmaxCanada] = useState("")
  const [CanadaTip, setCanadaTip] = useState("")
  const [CanadaminValue, setCanadaminValue] = useState("")

  const [minChile, setminChile] = useState("")
  const [maxChile, setmaxChile] = useState("")
  const [ChileTip, setChileTip] = useState("")
  const [ChileminValue, setChileminValue] = useState("")
  
  const [minColumbia, setminColumbia] = useState("")
  const [maxColumbia, setmaxColumbia] = useState("")
  const [ColumbiaTip, setColumbiaTip] = useState("")
  const [ColumbiaMinValue, setColumbiaMinValue] = useState("")

  const [minEgypt, setminEgypt] = useState("")
  const [maxEgypt, setmaxEgypt] = useState("")
  const [EgyptTip, setEgyptTip] = useState("")
  const [EgyptminValue, setEgyptminValue] = useState("")

  const [minEU, setminEU] = useState("")
  const [maxEU, setmaxEU] = useState("")
  const [EUTip, setEUTip] = useState("")
  const [EUminValue, setEUminValue] = useState("")

  const [minGB, setminGB] = useState("")
  const [maxGB, setmaxGB] = useState("")
  const [GBPTip, setGBPTip] = useState("")
  const [GBPminValue, setGBPminValue] = useState("")
  

  const [minindonedia, setminindonedia] = useState("")
  const [maxindonedia, setmaxindonedia] = useState("")
  const [IndoTip, setIndoTip] = useState("")
  const [IndominValue, setIndominValue] = useState("")

  const [minIsrael, setminIsrael] = useState("")
  const [maxIsrael, setmaxIsrael] = useState("")
  const [IsrealTip, setIsrealTip] = useState("")
  const [IsrealminValue, setIsrealminValue] = useState("")


  const [minIndia, setminIndia] = useState("")
  const [maxIndia, setmaxIndia] = useState("")
  const [IndiaTip, setIndiaTip] = useState("")
  const [IndiaminValue, setIndiaminValue] = useState("")

  const [minJapan, setminJapan] = useState("")
  const [maxJapan, setmaxJapan] = useState("")
  const [JapanTip, setJapanTip] = useState("")
  const [JapanminValue, setJapanminValue] = useState("")

  const [minKorea, setminKorea] = useState("")
  const [maxKorea, setmaxKorea] = useState("")
  const [KoreaTip, setKoreaTip] = useState("")
  const [KoreaminValue, setKoreaminValue] = useState("")

  const [minMexico, setminMexico] = useState("")
  const [maxMexico, setmaxMexico] = useState("")
  const [MexicoTip, setMexicoTip] = useState("")
  const [MexicominValue, setMexicominValue] = useState("")

  const [minMalaysia, setminMalaysia] = useState("")
  const [maxMalaysia, setmaxMalaysia] = useState("")
  const [MalaysiaTip, setMalaysiaTip] = useState("")
  const [MalaysiaminValue, setMalaysiaminValue] = useState("")

  const [minNigeria, setminNigeria] = useState("")
  const [maxNigeria, setmaxNigeria] = useState("")
  const [NigeriaTip, setNigeriaTip] = useState("")
  const [NigeriaminValue, setNigeriaminValue] = useState("")
  
  const [minNorway, setminNorway] = useState("")
  const [maxNorway, setmaxNorway] = useState("")
  const [NorwayTip, setNorwayTip] = useState("")
  const [NorwayminValue, setNorwayminValue] = useState("")

  const [minPeru, setminPeru] = useState("")
  const [maxPeru, setmaxPeru] = useState("")
  const [PeruTip, setPeruTip] = useState("")
  const [PeruminValue, setPeruminValue] = useState("")


  const [minPhilipine, setminPhilipine] = useState("")
  const [maxPhilipine, setmaxPhilipine] = useState("")
  const [PhilippinesTip, setPhilippinesTip] = useState("")
  const [PhilippinesminValue, setPhilippinesminValue] = useState("")


  const [minPoland, setminPoland] = useState("")
  const [maxPoland, setmaxPoland] = useState("")
  const [PolandTip, setPolandTip] = useState("")
  const [PolandminValue, setPolandminValue] = useState("")

  const [minRomania, setminRomania] = useState("")
  const [maxRomania, setmaxRomania] = useState("")
  const [RomaniaTip, setRomaniaTip] = useState("")
  const [RomaniaminValue, setRomaniaminValue] = useState("")

  const [minRussia, setminRussia] = useState("")
  const [maxRussia, setmaxRussia] = useState("")
  const [RussiaTip, setRussiaTip] = useState("")
  const [RussiaminValue, setRussiaminValue] = useState("")

  const [minSingapore, setminSingapore] = useState("")
  const [maxSingapore, setmaxSingapore] = useState("")
  const [SingaporeTip, setSingaporeTip] = useState("")
  const [SingaporeminValue, setSingaporeminValue] = useState("")

  const [minThailand, setminThailand] = useState("")
  const [maxThailand, setmaxThailand] = useState("")
  const [ThailandTip, setThailandTip] = useState("")
  const [ThailandminValue, setThailandminValue] = useState("")

  const [minTurkey, setminTurkey] = useState("")
  const [maxTurkey, setmaxTurkey] = useState("")
  const [TurkeyTip, setTurkeyTip] = useState("")
  const [TurkeyminValue, setTurkeyminValue] = useState("")


  const [minTaiwan, setminTaiwan] = useState("")
  const [maxTaiwan, setmaxTaiwan] = useState("")
  const [TaiwanTip, setTaiwanTip] = useState("")
  const [TaiwanminValue, setTaiwanminValue] = useState("")

  const [minVietnam, setminVietnam] = useState("")
  const [maxVietnam, setmaxVietnam] = useState("")
  const [VietnamTip, setVietnamTip] = useState("")
  const [VietnamminValue, setVietnamminValue] = useState("")

  const [minSA, setminSA] = useState("")
  const [maxSA, setmaxSA] = useState("")
  const [SATip, setSATip] = useState("")
  const [SAminValue, setSAminValue] = useState("")

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

    AddSetDefaultPricing(DminPrice,DmaxPrice,DTip,DminValue)

  }

  const handleAllPricing = () =>{

    console.log(USATip)
    console.log(USAminValue)

    const item = [
      {
          "country": "America",
          "minPrice": `${minUSA}`,
          "maxPrice": `${maxUSA}`,
          "tip": `${USATip}`,
          "minimumPrice": `${USAminValue}`
      },
      {
          "country": "Australia",
          "minPrice": `${minAustralia}`,
          "maxPrice": `${maxAustralia}`,
          "tip": `${AusTip}`,
          "minimumPrice": `${AusminValue}`
      },
      {
          "country": "Brazil",
          "minPrice": `${minBrazil}`,
          "maxPrice": `${maxBrazil}`,
          "tip": `${BrazilTip}`,
          "minimumPrice": `${BrazilminValue}`,
      },
      {
          "country": "Canada",
          "minPrice": `${minCanada}`,
          "maxPrice": `${maxCanada}`,
          "tip": `${CanadaTip}`,
          "minimumPrice": `${CanadaminValue}`,
      },
      {
          "country": "Chile",
          "minPrice": `${minChile}`,
          "maxPrice": `${maxChile}`,
          "tip": `${ChileTip}`,
          "minimumPrice": `${ChileminValue}`
      },
      {
          "country": "Columbia",
          "minPrice": `${minColumbia}`,
          "maxPrice": `${maxColumbia}`,
          "tip": `${ColumbiaTip}`,
          "minimumPrice": `${ColumbiaMinValue}`
      },
      {
          "country": "Egypt",
          "minPrice": `${minEgypt}`,
          "maxPrice": `${maxEgypt}`,
          "tip": `${EgyptTip}`,
          "minimumPrice": `${EgyptminValue}`
      },
      {
          "country": "European Union",
          "minPrice": `${minEU}`,
          "maxPrice": `${maxEU}`,
          "tip": `${EUTip}`,
          "minimumPrice": `${EUminValue}`,
      },
      {
          "country": "Great Britain",
          "minPrice": `${minGB}`,
          "maxPrice": `${maxGB}`,
          "tip": `${GBPTip}`,
          "minimumPrice": `${GBPminValue}`
      },
      {
          "country": "Indonesia",
          "minPrice": `${minindonedia}`,
          "maxPrice": `${maxindonedia}`,
          "tip": `${IndoTip}`,
          "minimumPrice": `${IndominValue}`
      },
      {
          "country": "Israel",
          "minPrice": `${minIsrael}`,
          "maxPrice": `${maxIsrael}`,
          "tip": `${IsrealTip}`,
          "minimumPrice": `${IsrealminValue}`
      },
      {
          "country": "India",
          "minPrice": `${minIndia}`,
          "maxPrice": `${maxIndia}`,
          "tip": `${IndiaTip}`,
          "minimumPrice": `${IndiaminValue}`
      },
      {
          "country": "Japan",
          "minPrice": `${minJapan}`,
          "maxPrice": `${maxJapan}`,
          "tip": `${JapanTip}`,
          "minimumPrice": `${JapanminValue}`
      },
      {
          "country": "South Korea",
          "minPrice": `${minKorea}`,
          "maxPrice": `${maxKorea}`,
          "tip": `${KoreaTip}`,
          "minimumPrice": `${KoreaminValue}`
      },
      {
          "country": "Mexico",
          "minPrice": `${minMexico}`,
          "maxPrice": `${maxMexico}`,
          "tip": `${MexicoTip}`,
          "minimumPrice": `${MexicominValue}`
      },
      {
          "country": "Malaysia",
          "minPrice": `${minMalaysia}`,
          "maxPrice": `${maxMalaysia}`,
          "tip": `${MalaysiaTip}`,
          "minimumPrice": `${MalaysiaminValue}`
      },
      {
          "country": "Nigeria",
          "minPrice": `${minNigeria}`,
          "maxPrice": `${maxNigeria}`,
          "tip": `${NigeriaTip}`,
          "minimumPrice": `${NigeriaminValue}`
      },
      {
          "country": "Norway",
          "minPrice": `${minNorway}`,
          "maxPrice": `${maxNorway}`,
          "tip": `${NorwayTip}`,
          "minimumPrice": `${NorwayminValue}`
      },
      {
          "country": "Peru",
          "minPrice": `${minPeru}`,
          "maxPrice": `${maxPeru}`,
          "tip": `${PeruTip}`,
          "minimumPrice": `${PeruminValue}`,
      },
      {
          "country": "Philippines",
          "minPrice": `${minPhilipine}`,
          "maxPrice": `${maxPhilipine}`,
          "tip": `${PhilippinesTip}`,
          "minimumPrice": `${PhilippinesminValue}`
      },
      {
          "country": "Poland",
          "minPrice": `${minPoland}`,
          "maxPrice": `${maxPoland}`,
          "tip": `${PolandTip}`,
          "minimumPrice": `${PolandminValue}`,
      },
      {
          "country": "Romania",
          "minPrice": `${minRomania}`,
          "maxPrice": `${maxRomania}`,
          "tip": `${RomaniaTip}`,
          "minimumPrice": `${RomaniaminValue}`
      },
      {
          "country": "Russia",
          "minPrice": `${minRussia}`,
          "maxPrice": `${maxRussia}`,
          "tip": `${RussiaTip}`,
          "minimumPrice": `${RussiaminValue}`
      },
      {
          "country": "Singapore",
          "minPrice": `${minSingapore}`,
          "maxPrice": `${maxSingapore}`,
          "tip": `${SingaporeTip}`,
          "minimumPrice": `${SingaporeminValue}`
      },
      {
          "country": "Thailand",
          "minPrice": `${minThailand}`,
          "maxPrice": `${maxThailand}`,
          "tip": `${ThailandTip}`,
          "minimumPrice": `${ThailandminValue}`
      },
      {
          "country": "Turkey",
          "minPrice": `${minTurkey}`,
          "maxPrice": `${maxTurkey}`,
          "tip": `${TurkeyTip}`,
          "minimumPrice": `${TurkeyminValue}`
      },
      {
          "country": "Taiwan",
          "minPrice": `${minTaiwan}`,
          "maxPrice": `${maxTaiwan}`,
          "tip": `${TaiwanTip}`,
          "minimumPrice": `${TaiwanminValue}`
      },
      {
          "country": "Vietnam",
          "minPrice": `${minVietnam}`,
          "maxPrice": `${maxVietnam}`,
          "tip": `${VietnamTip}`,
          "minimumPrice": `${VietnamminValue}`
      },
      {
          "country": "South Africa",
          "minPrice": `${minSA}`,
          "maxPrice": `${maxSA}`,
          "tip": `${SATip}`,
          "minimumPrice": `${SAminValue}`
      }
  ]

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
      setmaxSA,
      setUSATip,
      setUSAminValue,
      setAusTip,
      setAusminValue,
      setBrazilTip,
      setBrazilminValue,
      setCanadaTip,
      setCanadaminValue,
      setChileTip,
      setChileminValue,
      setColumbiaTip,
      setColumbiaMinValue,
      setEgyptTip,
      setEgyptminValue,
      setEUTip,
      setEUminValue,
      setGBPTip,
      setGBPminValue,
      setIndoTip,
      setIndominValue,
      setIsrealTip,
      setIsrealminValue,
      setIndiaTip,
      setIndiaminValue,
      setJapanTip,
      setJapanminValue,
      setKoreaTip,
      setKoreaminValue,
      setMexicoTip,
      setMexicominValue,
      setMalaysiaTip,
      setMalaysiaminValue,
      setNigeriaTip,
      setNigeriaminValue,
      setNorwayTip,
      setNorwayminValue,
      setPeruTip,
      setPeruminValue,
      setPhilippinesTip,
      setPhilippinesminValue,
      setPolandTip,
      setPolandminValue,
      setRomaniaTip,
      setRomaniaminValue,
      setRussiaTip,
      setRussiaminValue,
      setSingaporeTip,
      setSingaporeminValue,
      setThailandTip,
      setThailandminValue,
      setTurkeyTip,
      setTurkeyminValue,
      setTaiwanTip,
      setTaiwanminValue,
      setVietnamTip,
      setVietnamminValue,
      setSATip,
      setSAminValue,
      setDTip,
      setDminValue,
     
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
    <div className='col-md-2'>
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

  <div className='col-md-2'>
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

  <div className='col-md-3'>
    <Form.Label>Tip</Form.Label>
    <Form.Control value={DTip} onChange={(e) => setDTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
  </div>

  <div className='col-md-2'>
    <Form.Label>Min Value (USD)</Form.Label>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
      <Form.Control
        value={DminValue}
        onChange={(e) => setDminValue(e.target.value)}
        placeholder="USD"
        aria-label="USD"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  </div>

  <div className='col-md-3 d-flex align-items-center mt-2'>
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
          <th>Tip</th>
          <th>Global Min Price</th>
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
          <td>
          <Form.Control value={USATip} onChange={(e) => setUSATip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={USAminValue} onChange={(e) =>setUSAminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={AusTip} onChange={(e) => setAusTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={AusminValue} onChange={(e) => setAusminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={BrazilTip} onChange={(e) => setBrazilTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={BrazilminValue} onChange={(e) => setBrazilminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={CanadaTip} onChange={(e) => setCanadaTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={CanadaminValue} onChange={(e) => setCanadaminValue(e.target.value)}  type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={ChileTip} onChange={(e) => setChileTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={ChileminValue} onChange={(e) => setChileminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={ColumbiaTip} onChange={(e) => setColumbiaTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={ColumbiaMinValue} onChange={(e) => setColumbiaMinValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={EgyptTip} onChange={(e) => setEgyptTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={EgyptminValue} onChange={(e) => setEgyptminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={EUTip} onChange={(e) => setEUTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={EUminValue} onChange={(e) => setEUminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={GBPTip} onChange={(e) => setGBPTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={GBPminValue} onChange={(e) => setGBPminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={IndoTip} onChange={(e) => setIndoTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={IndominValue} onChange={(e) => setIndominValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={IsrealTip} onChange={(e) => setIsrealTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={IsrealminValue} onChange={(e) => setIsrealminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={IndiaTip} onChange={(e) => setIndiaTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={IndiaminValue} onChange={(e) => setIndiaminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={JapanTip} onChange={(e) => setJapanTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={JapanminValue} onChange={(e) => setJapanminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={KoreaTip} onChange={(e) => setKoreaTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={KoreaminValue} onChange={(e) => setKoreaminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={MexicoTip} onChange={(e) => setMexicoTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={MexicominValue} onChange={(e) => setMexicominValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={MalaysiaTip} onChange={(e) => setMalaysiaTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={MalaysiaminValue} onChange={(e) => setMalaysiaminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={NigeriaTip} onChange={(e) => setNigeriaTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={NigeriaminValue} onChange={(e) => setNigeriaminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={NorwayTip} onChange={(e) => setNorwayTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={NorwayminValue} onChange={(e) => setNorwayminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={PeruTip} onChange={(e) => setPeruTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={PeruminValue} onChange={(e) => setPeruminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={PhilippinesTip} onChange={(e) => setPhilippinesTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={PhilippinesminValue} onChange={(e) => setPhilippinesminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={PolandTip} onChange={(e) => setPolandTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={PolandminValue} onChange={(e) => setPolandminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={RomaniaTip} onChange={(e) => setRomaniaTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={RomaniaminValue} onChange={(e) => setRomaniaminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={RussiaTip} onChange={(e) => setRussiaTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={RussiaminValue} onChange={(e) => setRussiaminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={SingaporeTip} onChange={(e) => setSingaporeTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={SingaporeminValue} onChange={(e) => setSingaporeminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={ThailandTip} onChange={(e) => setThailandTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={ThailandminValue} onChange={(e) => setThailandminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={TurkeyTip} onChange={(e) => setTurkeyTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={TurkeyminValue} onChange={(e) => setTurkeyminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={TaiwanTip} onChange={(e) => setTaiwanTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={TaiwanminValue} onChange={(e) => setTaiwanminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={VietnamTip} onChange={(e) => setVietnamTip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={VietnamminValue} onChange={(e) => setVietnamminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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
          <td>
          <Form.Control value={SATip} onChange={(e) => setSATip(e.target.value)} as="textarea" rows={2} type="text" placeholder="Enter Tip" />
          </td>
          <td>
          <Form.Control value={SAminValue} onChange={(e) => setSAminValue(e.target.value)} type="text" placeholder="Minimum Value" />
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