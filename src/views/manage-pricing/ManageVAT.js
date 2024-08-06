import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import { AddVATPrices, GetVATPrices } from 'api';

const ManageVAT = () => {

    const [AustriaVAT, setAustriaVAT] = useState(0)
    const [BelgiumVAT, setBelgiumVAT] = useState(0)
    const [BulgariaVAT, setBulgariaVAT] = useState(0)
    const [CyprusVAT, setCyprusVAT] = useState(0)
    const [CzechRepublicVAT, setCzechRepublicVAT] = useState(0)
    const [GermanyVAT, setGermanyVAT] = useState(0)
    const [DenmarkVAT, setDenmarkVAT] = useState(0)
    const [EstoniaVAT, setEstoniaVAT] = useState(0)
    const [GreeceVAT, setGreeceVAT] = useState(0)
    const [SpainVAT, setSpainVAT] = useState(0)
    const [FinlandVAT, setFinlandVAT] = useState(0)
    const [FranceVAT, setFranceVAT] = useState(0)
    const [UnitedKingdomVAT, setUnitedKingdomVAT] = useState(0)
    const [CroatiaVAT, setCroatiaVAT] = useState(0)
    const [HungaryVAT, setHungaryVAT] = useState(0)
    const [IrelandVAT, setIrelandVAT] = useState(0)
    const [ItalyVAT, setItalyVAT] = useState(0)
    const [LithuaniaVAT, setLithuaniaVAT] = useState(0)
    const [LuxembourgVAT, setLuxembourgVAT] = useState(0)
    const [LatviaVAT, setLatviaVAT] = useState(0)
    const [MaltaVAT, setMaltaVAT] = useState(0)
    const [NetherlandsVAT, setNetherlandsVAT] = useState(0)
    const [PolandVAT, setPolandVAT] = useState(0)
    const [PortugalVAT, setPortugalVAT] = useState(0)
    const [RomaniaVAT, setRomaniaVAT] = useState(0)
    const [SwedenVAT, setSwedenVAT] = useState(0)
    const [SloveniaVAT, setSloveniaVAT] = useState(0)
    const [SlovakRepublicVAT, setSlovakRepublicVAT] = useState(0)




    useEffect(() => {
        GetVATPrices(
            setAustriaVAT,
            setBelgiumVAT,
            setBulgariaVAT,
            setCyprusVAT,
            setCzechRepublicVAT,
            setGermanyVAT,
            setDenmarkVAT,
            setEstoniaVAT,
            setGreeceVAT,
            setSpainVAT,
            setFinlandVAT,
            setFranceVAT,
            setUnitedKingdomVAT,
            setCroatiaVAT,
            setHungaryVAT,
            setIrelandVAT,
            setItalyVAT,
            setLithuaniaVAT,
            setLuxembourgVAT,
            setLatviaVAT,
            setMaltaVAT,
            setNetherlandsVAT,
            setPolandVAT,
            setPortugalVAT,
            setRomaniaVAT,
            setSwedenVAT,
            setSloveniaVAT,
            setSlovakRepublicVAT
        )
    }, [])
    

    const handleSaveVAT = () => {

        const raw = [
            {
                "country": "Austria ",
                "vat": AustriaVAT
            },
            {
                "country": "Belgium",
                "vat": BelgiumVAT
            },
            {
                "country": "Bulgaria",
                "vat": BulgariaVAT
            },
            {
                "country": "Cyprus",
                "vat": CyprusVAT
            },
            {
                "country": "Czech Republic",
                "vat": CzechRepublicVAT
            },
            {
                "country": "Germany",
                "vat": GermanyVAT
            },
            {
                "country": "Denmark",
                "vat": DenmarkVAT
            },
            {
                "country": "Estonia",
                "vat": EstoniaVAT
            },
            {
                "country": "Greece",
                "vat": GreeceVAT
            },
            {
                "country": "Spain",
                "vat": SpainVAT
            },
            {
                "country": "Finland",
                "vat": FinlandVAT
            },
            {
                "country": "France",
                "vat": FranceVAT
            },
            {
                "country": "United Kingdom",
                "vat": UnitedKingdomVAT
            },
            {
                "country": "Croatia",
                "vat": CroatiaVAT
            },
            {
                "country": "Hungary",
                "vat": HungaryVAT
            },
            {
                "country": "Ireland",
                "vat": IrelandVAT
            },
            {
                "country": "Italy",
                "vat": ItalyVAT
            },
            {
                "country": "Lithuania",
                "vat": LithuaniaVAT
            },
            {
                "country": "Luxembourg",
                "vat": LuxembourgVAT
            },
            {
                "country": "Latvia",
                "vat": LatviaVAT
            },
            {
                "country": "Malta",
                "vat": MaltaVAT
            },
            {
                "country": "Netherlands",
                "vat": NetherlandsVAT
            },
            {
                "country": "Poland",
                "vat": PolandVAT
            },
            {
                "country": "Portugal",
                "vat": PortugalVAT
            },
            {
                "country": "Romania",
                "vat": RomaniaVAT
            },
            {
                "country": "Sweden",
                "vat": SwedenVAT
            },
            {
                "country": "Slovenia",
                "vat": SloveniaVAT
            },
            {
                "country": "Slovak Republic",
                "vat": SlovakRepublicVAT
            }
        ];

        AddVATPrices(raw) 
    }





  return (
    <div className=''>

    <Card className='col-md-12'>
    <CardContent >

    <Typography  variant="h2">
        Set VAT Prices
      </Typography>
 
    <div className='d-flex justify-content-end my-2'> 
        <Button onClick={handleSaveVAT} className='mx-1' variant="contained"><AddIcon /> Save</Button>
    </div>


    <Table className='col-md-8 mx-auto  my-3' responsive striped bordered hover>
      <thead>
        <tr>
          <th>Country</th>
          <th>VAT (%)</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td><b>Austria</b></td>
          <td>
            <Form.Control value={AustriaVAT} onChange={(e) => setAustriaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Belgium</b></td>
          <td>
            <Form.Control value={BelgiumVAT} onChange={(e) => setBelgiumVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Bulgaria</b></td>
          <td>
            <Form.Control value={BulgariaVAT} onChange={(e) => setBulgariaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Cyprus</b></td>
          <td>
            <Form.Control value={CyprusVAT} onChange={(e) => setCyprusVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Czech Republic</b></td>
          <td>
            <Form.Control value={CzechRepublicVAT} onChange={(e) => setCzechRepublicVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Germany</b></td>
          <td>
            <Form.Control value={GermanyVAT} onChange={(e) => setGermanyVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Denmark</b></td>
          <td>
            <Form.Control value={DenmarkVAT} onChange={(e) => setDenmarkVAT(e.target.value)}  type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Estonia</b></td>
          <td>
            <Form.Control value={EstoniaVAT} onChange={(e) => setEstoniaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Greece</b></td>
          <td>
            <Form.Control value={GreeceVAT} onChange={(e) => setGreeceVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Spain</b></td>
          <td>
            <Form.Control value={SpainVAT} onChange={(e) => setSpainVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>


        <tr>
          <td><b>Finland</b></td>
          <td>
            <Form.Control value={FinlandVAT} onChange={(e) => setFinlandVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>France</b></td>
          <td>
            <Form.Control value={FranceVAT} onChange={(e) => setFranceVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>United Kingdom</b></td>
          <td>
            <Form.Control value={UnitedKingdomVAT} onChange={(e) => setUnitedKingdomVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Croatia</b></td>
          <td>
            <Form.Control value={CroatiaVAT} onChange={(e) => setCroatiaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Hungary</b></td>
          <td>
            <Form.Control value={HungaryVAT} onChange={(e) => setHungaryVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Ireland</b></td>
          <td>
            <Form.Control value={IrelandVAT} onChange={(e) => setIrelandVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Italy</b></td>
          <td>
            <Form.Control value={ItalyVAT} onChange={(e) => setItalyVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Lithuania</b></td>
          <td>
            <Form.Control value={LithuaniaVAT} onChange={(e) => setLithuaniaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Luxembourg</b></td>
          <td>
            <Form.Control value={LuxembourgVAT} onChange={(e) => setLuxembourgVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Latvia</b></td>
          <td>
            <Form.Control value={LatviaVAT} onChange={(e) => setLatviaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Malta</b></td>
          <td>
            <Form.Control value={MaltaVAT} onChange={(e) => setMaltaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Netherlands</b></td>
          <td>
            <Form.Control value={NetherlandsVAT} onChange={(e) => setNetherlandsVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Poland</b></td>
          <td>
            <Form.Control value={PolandVAT} onChange={(e) => setPolandVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Portugal</b></td>
          <td>
            <Form.Control value={PortugalVAT} onChange={(e) => setPortugalVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Romania</b></td>
          <td>
            <Form.Control value={RomaniaVAT} onChange={(e) => setRomaniaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Sweden</b></td>
          <td>
            <Form.Control value={SwedenVAT} onChange={(e) => setSwedenVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Slovenia</b></td>
          <td>
            <Form.Control value={SloveniaVAT} onChange={(e) => setSloveniaVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

        <tr>
          <td><b>Slovak Republic</b></td>
          <td>
            <Form.Control value={SlovakRepublicVAT} onChange={(e) => setSlovakRepublicVAT(e.target.value)} type="text" placeholder="VAT" />
          </td>
        </tr>

     

      </tbody>
    </Table>

    </CardContent>
    </Card>
    </div>
   
  )
}

export default ManageVAT