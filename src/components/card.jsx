const Card = (props) => {

    const {card, handleChoice, flipped} = props;

    const handleClick = () => {
        handleChoice(card)
    }
      
      return (
        <div className="card">
          <div className={flipped ? "flipped" : ""}>
            <img className='front' /* key={item.id} */ src={card.src} alt="" />
            <div
             onClick={handleClick}
             className="background">
            </div>
          </div>
        </div>
      )
}

export default Card