import React from 'react';
export const Bar = props => {
    const percent = Math.round((props.likes * 100) / (props.likes + props.dislikes))
    return <progress max="100" value={percent} />
};