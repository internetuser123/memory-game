const Card = (props) => {

    const {card, handleChoice} = props;

    const handleClick = () => {
        handleChoice(card)
    }
      
      return (
        <div>
          <div>
            <img className='images' /* key={item.id} */ src={card.src} alt="" />
            <div
             onClick={handleClick}
             className="background">
            </div>
          </div>
        </div>
      )
}

export default Card