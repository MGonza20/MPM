const styles = {
    dispInfo: {
        left: 60,
        top: 100,
    },
}

const SeeVetInfo = ({ seeInfo, setSeePopup }) => {
    return (
        <>
            {seeInfo !== null && (
                <div className="displayInfo" style={styles.dispInfo}>
                    <h2>Información</h2>
                    <div className="vetInfo">
                        <h4>
                            Nombre: <p>{seeInfo['name']}</p>
                        </h4>
                        <h4>Dirección: {seeInfo['direction']['city']}</h4>
                        <h4>Número de teléfono: {seeInfo['phone']}</h4>
                    </div>
                    <button
                        className="emmBtn"
                        onClick={() => setSeePopup(true)}
                    >
                        Ver Más Detalles
                    </button>
                </div>
            )}
        </>
    )
}

export default SeeVetInfo
