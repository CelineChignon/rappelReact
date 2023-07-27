import { useState } from "react"

//le premier etat du stat est vide au chargement de la page
// une fois que l'user rempli le formulaire et clic 
const Contact = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    })
    //preventDefault pour eviter la reactualisation de la page quand l'user clic sur envoyer
    const handleSubmit = (event) => {
        event.preventDefault();

        setContactData({
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        })
    }
    return (
        <section className="formulaireContact">
            <h3>CONTACT</h3>
            <div className="formulaire">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" />

                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" />

                    <label htmlFor="message">Votre message: </label>
                    <input id="message" type="text" />

                    <button type="submit">Send Message</button>

                </form>

                <p>Votre message: </p>
                <p>
                    {contactData.name} : {contactData.message}
                </p>
            </div>
        </section>
    )
}

export default Contact