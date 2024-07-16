import "./Card.css"
const Card =({ categoria, formData}) => {
    return (
    <div className="Card">
        {formData ? (
         <>

        <h3>{formData.title}</h3>
        <p>{formData.title}</p>
        <p><strong>Archivo de Video:</strong> {formData.file}</p>
        </>
        ) :(
            <h3>{categoria}</h3>
        )}
    </div>
    );

}

export default Card