import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));


  return (
    <li className={css.item}>
      <div className={css.itemWrapper}>
        <p className={css.text}>
          {contact.name}: {contact.phone}
        </p>
        <button
          className={css.contactButton}
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};


