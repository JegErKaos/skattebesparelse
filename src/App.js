import Input from './components/Input'
import Header from './components/Header'
import Results from './components/Results'
import Disclaimer from './components/Disclaimer'
import { useEffect, useState } from 'react'

function App() {

  const [løn, setLøn] = useState('')
  const [arbejdsgiverBidrag, setArbejdsgiverBidrag] = useState('')
  const [egetBidrag, setEgetBidrag] = useState('')
  const [endeligtArbejdsgiverBidrag, setEndeligtArbejdsgiverBidrag] = useState('')
  const [endeligtEgetBidrag, setEndeligtEgetBidrag] = useState('')
  const [arbejdsgiverProcent, setArbejdsgiverProcent] = useState(false)
  const [egetProcent, setEgetProcent] = useState(false)
  const [privatBidrag, setPrivatBidrag] = useState('')
  const [kommuneskat, setKommuneskat] = useState(.2498)
  const [kirkeskat, setKirkeskat] = useState(.008)
  const [effektivTopskat, setEffektivTopskat] = useState('')
  const [ekstraIndbetaling, setEkstraIndbetaling] = useState('')
  const [ekstraIndbetalingMedAmb, setEkstraIndbetalingMedAmb] = useState('')
  const [ekstraIndbetalingPct, setEkstraIndbetalingPct] = useState('')
  const [under15, setUnder15] = useState(false)
  const [visDisclaimer, setVisDisclaimer] = useState(true)

  
  

  const amb = .08
  const topskattegrænse = 588900
  const bundskat = .1206
  const topskat = .15
  const skatteloft = .5207
  const pensionsfradragLav = .12
  const pensionsfradragHøj = .32
  const pensionsfradragBeløb = 80600
  const ratemaks = 63100
  const opfyldningsfradrag = 58100
  
  

  const personligIndkomst =  Math.floor((Number(løn)-Number(endeligtEgetBidrag))*(1-amb)-Number(privatBidrag))
  const beløbOverTopskat = Math.max(personligIndkomst - topskattegrænse, 0)
  const pensionsIndbetaling = Math.floor((Number(endeligtArbejdsgiverBidrag) + Number(endeligtEgetBidrag))*(1-amb)+Number(privatBidrag))
  const beløbUnderFradrag = Math.max(pensionsfradragBeløb - pensionsIndbetaling, 0)
  const topskatVærdi = Math.floor(Math.min(beløbOverTopskat, ekstraIndbetaling)*effektivTopskat)
  const bundskatVærdi = Math.floor(ekstraIndbetaling*bundskat)
  const kommuneskatVærdi = Math.floor(ekstraIndbetaling*kommuneskat)
  const kirkeskatVærdi = Math.floor(ekstraIndbetaling*kirkeskat)
  const ekstraFradragVærdi = Math.floor((under15 ? pensionsfradragHøj : pensionsfradragLav)*Math.min(beløbUnderFradrag, ekstraIndbetaling)*(Number(kommuneskat)+Number(kirkeskat)))
  const samletVærdi = topskatVærdi + bundskatVærdi + kommuneskatVærdi + kirkeskatVærdi + ekstraFradragVærdi

  useEffect(() => {
    setEndeligtArbejdsgiverBidrag(arbejdsgiverProcent ? løn * arbejdsgiverBidrag / 100 : arbejdsgiverBidrag)
    setEndeligtEgetBidrag(egetProcent ? løn * egetBidrag / 100 : egetBidrag)
    setEffektivTopskat(Math.round(Math.min(skatteloft-Number(kommuneskat)-bundskat, topskat) * 10000) / 10000 )
    setEkstraIndbetalingMedAmb(Math.round(ekstraIndbetaling/(1-amb)))
    setEkstraIndbetalingPct(Math.round((ekstraIndbetaling/(1-amb)/Number(løn))*10000)/100)
  
  }, [løn, arbejdsgiverBidrag, arbejdsgiverProcent, egetBidrag, egetProcent, kommuneskat, ekstraIndbetaling])

  const handleKrClick = (e) => {
      e.preventDefault()
      setArbejdsgiverProcent(false)
  }

  const handleProcentClick = (e) => {
      e.preventDefault()
      setArbejdsgiverProcent(true)
  }

  const handleKrClickEget = (e) => {
    e.preventDefault()
    setEgetProcent(false)
}

const handleProcentClickEget = (e) => {
    e.preventDefault()
    setEgetProcent(true)
}

const optimerTopskat = (e) => {
  e.preventDefault()
  setEkstraIndbetaling(beløbOverTopskat)
}
const optimerEkstraFradrag = (e) => {
  e.preventDefault()
  setEkstraIndbetaling(beløbUnderFradrag)
}

const handleUnder15 = (e) => {
  e.preventDefault()
  setUnder15(true)
}
const handleOver15 = (e) => {
  e.preventDefault()
  setUnder15(false)
}
  
  return (
    <div className="App">
      <Header />
      <Input  
      løn={løn} 
      setLøn={setLøn} 
      arbejdsgiverBidrag={arbejdsgiverBidrag} 
      setArbejdsgiverBidrag={setArbejdsgiverBidrag}
      egetBidrag={egetBidrag}
      setEgetBidrag={setEgetBidrag}
      handleKrClick={handleKrClick}
      handleProcentClick={handleProcentClick}
      handleKrClickEget={handleKrClickEget}
      handleProcentClickEget={handleProcentClickEget}
      arbejdsgiverProcent={arbejdsgiverProcent}
      setArbejdsgiverProcent={setArbejdsgiverProcent}
      egetProcent={egetProcent}
      setEgetProcent={setEgetProcent}
      privatBidrag={privatBidrag}
      setPrivatBidrag={setPrivatBidrag}
      kommuneskat={kommuneskat}
      setKommuneskat={setKommuneskat}
      kirkeskat={kirkeskat}
      setKirkeskat={setKirkeskat}
      ekstraIndbetaling={ekstraIndbetaling}
      setEkstraIndbetaling={setEkstraIndbetaling}
      optimerEkstraFradrag={optimerEkstraFradrag}
      optimerTopskat={optimerTopskat}
      under15={under15}
      handleUnder15={handleUnder15}
      handleOver15={handleOver15}
      ekstraIndbetalingMedAmb={ekstraIndbetalingMedAmb}
      ekstraIndbetalingPct={ekstraIndbetalingPct}
      />

      {ekstraIndbetaling > 0 && <Results 
      ekstraIndbetaling={ekstraIndbetaling}
      samletVærdi={samletVærdi}
      topskatVærdi={topskatVærdi}
      bundskatVærdi={bundskatVærdi}
      kommuneskatVærdi={kommuneskatVærdi}
      kirkeskatVærdi={kirkeskatVærdi}
      ekstraFradragVærdi={ekstraFradragVærdi}
      ratemaks={ratemaks}
      pensionsIndbetaling={pensionsIndbetaling}
      opfyldningsfradrag={opfyldningsfradrag}
      løn={løn}
      />}

      {ekstraIndbetaling > 0 && <Disclaimer 
      amb={amb}
      topskattegrænse={topskattegrænse}
      bundskat={bundskat}
      kommuneskat={kommuneskat}
      kirkeskat={kirkeskat}
      topskat={topskat}
      skatteloft={skatteloft}
      under15={under15}
      pensionsfradragHøj={pensionsfradragHøj}
      pensionsfradragLav={pensionsfradragLav}
      pensionsfradragBeløb={pensionsfradragBeløb}
      ratemaks={ratemaks}
      opfyldningsfradrag={opfyldningsfradrag}
      arbejdsgiverBidrag={arbejdsgiverBidrag}
      arbejdsgiverProcent={arbejdsgiverProcent}
      egetBidrag={egetBidrag}
      EgetProcent={egetProcent}
      privatBidrag={privatBidrag}
      ekstraIndbetaling={ekstraIndbetaling}
      løn={løn}
      effektivTopskat={effektivTopskat}
      visDisclaimer={visDisclaimer}
      setVisDisclaimer={setVisDisclaimer}
      />}

      
    </div>
  );
}

export default App;
