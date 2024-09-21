import React, { useState, useEffect } from 'react';
import { SkillProps } from './skills.types';

function Index(props: SkillProps) {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1001)
    }, [])
    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>;
                })}
            </ul>
            {isLoggedIn ?
                <button>Start Learning</button> :
                <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </>
    )
}

export default Index
