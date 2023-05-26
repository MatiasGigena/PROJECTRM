import Card from './Card';
import styling from './cards.module.css';

const Cards = ({ characters, onClose }) => {
  return (
    <div className={styling.Cards}>
      {characters.map(
        ({ id, name, species, gender, image, origin, status }) => {
          return (
            <Card
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              origin={origin?.name}
              status={status}
              onClose={onClose}
              key={id}
            />
          );
        }
      )}
    </div>
  );
};
export default Cards;
