
const Results = ({ ekstraIndbetaling, samletVærdi, topskatVærdi, bundskatVærdi, kommuneskatVærdi, kirkeskatVærdi, 
    ekstraFradragVærdi, ratemaks, pensionsIndbetaling, opfyldningsfradrag, løn }) => {

    return(
        <div className='løn'>
        <h2>Besparelse: {samletVærdi} kr.</h2>
        Ved at lave en ekstra pensionsindbetaling på {ekstraIndbetaling} opnår du en skattebesparelse på {samletVærdi} kr. Du opnår altså en besparelse på {Math.round(samletVærdi/ekstraIndbetaling*10000)/100}%. 
        <br/><br/> Skattebesparelsen fordeler sig således:
        <br/>Bundskat: {bundskatVærdi} kr.
        <br/>Kommuneskat: {kommuneskatVærdi} kr.
        <br/>kirkeskat: {kirkeskatVærdi} kr.
        <br/>topskat: {topskatVærdi} kr.
        <br/>ekstra pensionsfradrag: {ekstraFradragVærdi} kr.
        <br/><br/>

       {Number(ekstraIndbetaling) + Number(pensionsIndbetaling) > ratemaks && <p className='obs'>*Den samlede pensionsindbetaling overstiger ratemaks. Vær derfor opmærksom på en del af indbetalingen skal gå til en livrente</p>}
       {Number(ekstraIndbetaling) + Number(pensionsIndbetaling) > ratemaks + opfyldningsfradrag && <p className='obs'>*Den samlede pensionsindbetaling overstiger ratemaks og opfyldningsfradraget på livrente ved private indbetalinger. Sker indbetalinger via arbejdsgiver giver dette ikke anledning til problemer, men ved privat indbetaling kan du risikere yderligere beskatning</p>}
       {Number(ekstraIndbetaling) + Number(pensionsIndbetaling) > løn && <p className='warning'>*Den samlede pensionsindbetaling overstiger din løn.</p>}
        </div>
    )
}

export default Results