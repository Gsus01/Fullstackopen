const Contact = ({ person }) => {
    return (
        <div>
            <p>{person.name} {person.number}</p>
        </div>
    )
}

export default Contact