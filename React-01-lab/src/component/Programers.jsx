
function Info(props){
    return(
        

        <div className="ProgramersDiv">
            <h3>Employers:</h3>
            <div className="EmployeeInfo">
        <h2>{props.name}</h2>
        <p>languages: {props.langugeProgram}</p>
        <p>years of work: {props.yearsExp}</p>
        <p>company: {props.Company}</p>
        </div>
        </div>
                
        
    )
}
export default Info
