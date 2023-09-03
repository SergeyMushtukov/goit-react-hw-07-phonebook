import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { updateFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = evt => dispatch(updateFilter(evt.target.value));

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </label>
  );
};
