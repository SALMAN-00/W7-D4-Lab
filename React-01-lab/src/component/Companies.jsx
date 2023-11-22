import Services from "./Services"
import Info from "./Programers"


function Companies(props){
    return(
<div className="companyDiv">

<h1>Company Name: {props.companyName}</h1>
<p>worker Number: {props.companyEmployeesNumber}</p>
<p>years of Founded: {props.companyDate}</p>


<Services services={props.services } price={props.price}/>
<Info name={props.name1} langugeProgram={props.langugeProgram1} yearsExp={props.yearsExp1} Company={props.Company1}  />
<Info name={props.name2} langugeProgram={props.langugeProgram2} yearsExp={props.yearsExp2} Company={props.Company2} />
<Info name={props.name3} langugeProgram={props.langugeProgram3} yearsExp={props.yearsExp3} Company={props.Company3} />
</div>
    )
}
export default Companies