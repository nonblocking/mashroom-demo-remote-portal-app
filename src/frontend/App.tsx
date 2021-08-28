
import React, { useEffect, useState } from 'react';
import styles from './App.scss';

type Props = {
    restProxyPath: string;
}

export default ({restProxyPath}: Props) => {
    const [joke, setJoke] = useState<string | undefined | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${restProxyPath}/randomJoke`).then(
            (response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`Error: Received ${response.status}`);
            }
        ).then(
            (response) => {
                setJoke(response.joke);
            }
        ).catch((error) => {
            console.error(error);
            setError(true);
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
