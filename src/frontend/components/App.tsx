
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import fetchJoke from '../fetchJoke';
import {setJoke, setError} from '../store/actions';
import styles from './App.scss';
import type {ClientState} from '../../type-definitions';

type Props = {
    restProxyPath: string;
}

export default ({restProxyPath}: Props) => {
    const dispatch = useDispatch();
    const joke = useSelector<ClientState, string | null | undefined>(s => s.joke);
    const error = useSelector<ClientState, boolean>(s => s.error);

    useEffect(() => {
        fetchJoke(restProxyPath).then(
            (joke) => {
                dispatch(setJoke(joke));
            }
        ).catch((error) => {
            console.error(error);
            dispatch(setError(true));
        });
    }, []);

    if (error) {
        return <div className={styles.ErrorStyle}>Error loading</div>
    } else if (!joke) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.AppStyle}>
            <h4>Random Chuck Norris Joke</h4>
            <div dangerouslySetInnerHTML={{ __html: joke }}/>
        </div>
    );
};
