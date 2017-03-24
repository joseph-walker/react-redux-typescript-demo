import * as React from 'react';

interface IncrementByButtonProps {
    onIncrementBy: (amount: number) => void
}

interface IncrementByButtonState {
    incrementByAmount: number
}

export default class IncrementByButton extends React.Component<IncrementByButtonProps, IncrementByButtonState> {
    public constructor(props: IncrementByButtonProps) {
        super(props);

        this.state = {
            incrementByAmount: 1
        };
    }

    private updateIncrementByAmount(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            incrementByAmount: parseInt(event.target.value) || 0
        });
    }

    private incrementBy() {
        this.props.onIncrementBy(this.state.incrementByAmount);
    }

    public render() {
        return (
            <div>
                <input
                    type="number"
                    onChange={this.updateIncrementByAmount.bind(this)}
                    value={this.state.incrementByAmount} />
                <button
                    onClick={this.incrementBy.bind(this)}>Increment Counter By {this.state.incrementByAmount}</button>
            </div>
        );
    }
}