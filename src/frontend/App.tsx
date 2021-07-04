
import React, { PureComponent } from 'react';
import styles from './App.scss';

import type { MashroomRestService } from '@mashroom/mashroom-portal/type-definitions';

type Props = {
    restProxyPath: string,
    restService: MashroomRestService
}

type State = {
    joke: string | undefined | null;
    error: boolean;
}

export default class App extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: false,
            joke: null
        }
    }

    componentDidMount() {
        const { restService, restProxyPath } = this.props;

        restService.withBasePath(restProxyPath).get('/randomJoke').then(
            (response) => {
                this.setState({
                    joke: response.joke,
                });
            },
            (error) => {
                console.error(error);
                this.setState({
                   error: true
                });
            }
        )
    }

    renderContent() {
        const { joke, error } = this.state;
        if (error) {
            return <div className={styles.ErrorStyle}>Error loading</div>
        } else if (!joke) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h4>Random Chuck Norris Joke</h4>
                <div dangerouslySetInnerHTML={{ __html: joke }}/>
            </div>
        );
    }

    render() {


        return (
            <div className={styles.AppStyle}>
                {this.renderContent()}
            </div>
        );
    }
}
