import * as React from 'react';

interface IncrementButtonProps {
    onIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class IncrementButton extends React.Component<IncrementButtonProps, {}> {
    public render() {
        return (
            <button onClick={this.props.onIncrement}>Increment Counter</button>
        );
    }
}