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
            <p>{console.log("It's a...")} { 8 + 8 }</p>
        </div>
    )
    
}

export default TemplateExpression;