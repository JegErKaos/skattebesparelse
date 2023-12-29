import { useState } from 'react'

const Input = ({ 
    løn, setLøn, arbejdsgiverBidrag, setArbejdsgiverBidrag, egetBidrag, privatBidrag, setPrivatBidrag,
    arbejdsgiverProcent, setEgetBidrag, handleKrClick, handleProcentClick, handleKrClickEget, handleProcentClickEget,
    egetProcent, kommuneskat, setKommuneskat, kirkeskat, setKirkeskat, ekstraIndbetaling, setEkstraIndbetaling,
    optimerEkstraFradrag, optimerTopskat, under15, handleUnder15, handleOver15, ekstraIndbetalingMedAmb, ekstraIndbetalingPct}) => {


    
    return(
        <form>
            <div className='løn'>
            <div>
            <label>Løn</label>
            <input type='text' value={løn} onChange={(e) => setLøn(e.target.value)} />
            </div>
            <div>
            <label>Arbejdsgiver bidrag</label>
            <input type='text' value={arbejdsgiverBidrag} onChange={(e) => setArbejdsgiverBidrag(e.target.value)} />
            <button style={{backgroundColor: (arbejdsgiverProcent ? '' : 'green')}} onClick={handleKrClick}>Kr</button>
            <button style={{backgroundColor: (arbejdsgiverProcent ? 'green' : '')}} onClick={handleProcentClick}>%</button>
            </div>
            <div>
            <label>Eget bidrag</label>
            <input type='text' value={egetBidrag} onChange={(e) => setEgetBidrag(e.target.value)} />
            <button style={{backgroundColor: (egetProcent ? '' : 'green')}} onClick={handleKrClickEget}>Kr</button>
            <button style={{backgroundColor: (egetProcent ? 'green' : '')}} onClick={handleProcentClickEget}>%</button>
            </div>
            <div>
            <label>Privat pensionsindbetaling</label>
            <input type='text' value={privatBidrag} onChange={(e) => setPrivatBidrag(e.target.value)} />
            </div></div>
            <div className='løn'>
            <div>
            <label>Kommuneskattesats (24,12% skrives som .2412)</label>
            <input type='text' value={kommuneskat} onChange={(e) => setKommuneskat(e.target.value)} />
            </div>
            <div>
            <label>Kirkeskattesats (0,8% skrives som .008)</label>
            <input type='text' value={kirkeskat} onChange={(e) => setKirkeskat(e.target.value)} />
            </div>
            <div>
            <button className='btn15' style={{backgroundColor: (under15 ? '' : 'green')}} onClick={handleOver15}>Over 15 år til pension</button>
            <button className='btn15' style={{backgroundColor: (under15 ? 'green' : '')}} onClick={handleUnder15}>Under 15 år til pension</button>
            </div>
            </div>
            
            <div className='løn'>
            <div>
            <label>Ekstra indbetaling</label>
            <input type='text' value={ekstraIndbetaling} onChange={(e) => setEkstraIndbetaling(e.target.value)} />
           
            </div>
            <div>
            <button className='btn15' onClick={optimerTopskat}>Optimer til topskat</button>
            <button className='btn15' onClick={optimerEkstraFradrag}>Optimer til ekstra pensionsfradrag</button>
            {(ekstraIndbetaling > 0 && <p>*en ekstra indbetaling på {ekstraIndbetaling} kr. kan laves via 
                                        arbejdsgiver, og i så fald skal den ekstra indbetaling være inklusiv amb. Igennem arbejdsgiver skal der derfor
                                        indbetales {ekstraIndbetalingMedAmb} kr. via lønnen, eller ved at der 
                                        laves et frivilligt bidrag på {ekstraIndbetalingPct}% hvis betaling skal ske løbende hele året </p>)}
            </div>
            </div>


        </form>

    )

}

export default Input