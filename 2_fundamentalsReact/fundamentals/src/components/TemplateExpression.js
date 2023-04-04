const TemplateExpression = () => {

    const name = "Victor";
    const life = {
        car: "Supra",
        job: "Programador",
    }

    return (
        <div>
            <h1>Hello { name }</h1>
            <p>Sonha em ter um { life.car } e trabalhar como { life.job }</p>
            <p>{console.log("It's a...")} { (( 7 * 4 ) + (2 * 4) + (7 * 2))  / 10 }</p>
        </div>
    )
    
}

export default TemplateExpression;