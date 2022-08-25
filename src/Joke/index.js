import { useDispatch, useSelector } from 'react-redux';

import Action from '../Store/action';

import './style.css';

const Joke = () => {

  const joke = useSelector((state) => state.joke);

  const dispatch = useDispatch();

  const getAnotherJoke = () => {
    dispatch({ type: Action.FETCH_REQUEST });
  };

  
  return (
    <div className='container'>
      <h3>Don't Laugh Challenge</h3>
      <div className='joke'>{joke}</div>
      <button className='btn' onClick={getAnotherJoke}>
        Get Another Joke
      </button>
    </div>
  );
};

export default Joke;