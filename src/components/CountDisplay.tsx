import * as React from 'react';

interface CountDisplayProps {
    count: number
}

export default function CountDisplay(props: CountDisplayProps): React.ReactElement<CountDisplayProps> {
    return (
        <h1>{props.count}</h1>
    );
}