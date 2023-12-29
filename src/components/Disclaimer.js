

const Disclaimer = ({amb, topskattegrænse, bundskat, kommuneskat, kirkeskat, topskat, skatteloft, under15, 
    pensionsfradragHøj, pensionsfradragLav, pensionsfradragBeløb, ratemaks, opfyldningsfradrag, arbejdsgiverBidrag, 
    arbejdsgiverProcent, egetBidrag, EgetProcent, privatBidrag, ekstraIndbetaling, løn, effektivTopskat,
    visDisclaimer, setVisDisclaimer}) => {

        return(
            <div className="disclaimer">
                <h3>Disclaimer:</h3> <h3 style={{cursor: 'pointer'}} onClick={() => setVisDisclaimer(!visDisclaimer)} className='toggle'>Vis/skjul</h3>
                {visDisclaimer && 
                (<p className="disclaimer-text">Udregningerne er en forsimplet udgave af en skatteberegning, og kan danne grundlag for en hurtig undersøgelse af skattebesparelsen ved indbetaling til pensionsaftale. Der tages forbehold for rigtigheden af udregningerne, og indbetaling til pensionsordninger bør altid drøftes med en økonomisk rådgiver, eller pensionsselskab, for at sikre den mest optimale opsparing og beskatning. I beregningerne anvendes følgende værdier:
                <br/> Løn- og pensionsinformationer: <br/>
                Løn (indtastet) : {løn > 0 ? løn : 0} kr, 
                arbejdsgiver bidrag (indtastet) : {arbejdsgiverBidrag > 0 ? arbejdsgiverBidrag : 0} {arbejdsgiverProcent ? '%' : 'kr.'}, 
                eget bidrag (indtastet) : {egetBidrag > 0 ? egetBidrag : 0} {EgetProcent ? '%' : 'kr.'},
                privat pensionsbidrag (indtastet) : {privatBidrag > 0 ? privatBidrag : 0} kr 
                <br/> skatteinformationer: <br/>
                arbejdsmarkedsbidrag : {amb*100} %, 
                bundskat : {bundskat*100} %, 
                kommuneskattesats (indtastet) : {kommuneskat > 0 ? kommuneskat*100 : 0} %, 
                kirkeskattesats (indtastet) : {kirkeskat > 0 ? kirkeskat*100 : 0} %, 
                topskat : {topskat*100} %, 
                skatteloft : {Math.round(skatteloft*10000)/100} %, 
                effektiv topskattesats : {effektivTopskat*100} %, 
                topskattegrænse : {topskattegrænse} kr, 
                over/under 15 år til pension : {under15 ? 'under' : 'over'}, 
                sats til ekstra pensionsfradrag : {under15 ? pensionsfradragHøj : pensionsfradragLav} %, 
                grænse for ekstra pensionsfradrag : {pensionsfradragBeløb} kr, 
                <br/> Diverse: <br/>
                ekstraIndbetaling (indtastning) : {ekstraIndbetaling > 0 ? ekstraIndbetaling : 0} kr, 
                maksimum for indskud på ratepension : {ratemaks} kr, 
                opfyldningsfradrag : {opfyldningsfradrag} kr.</p>)}
                
                

            </div>
        )
}

export default Disclaimer