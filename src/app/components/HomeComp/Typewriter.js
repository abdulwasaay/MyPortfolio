"use client";
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

export default function TypeWriter() {
    const [isType,setIstype] = useState()
    return (
        <Typewriter
            words={['Frontend Developer', 'Programmer', 'Software Engineer']}
            cursor
            loop = {false}
            onType={()=> setIstype(false)}
            onDelete={()=> setIstype(false)}
            onDelay={()=> setIstype(true)}
            cursorBlinking={isType?true : false}
            cursorColor='#0ef'
            delaySpeed={3500}
            typeSpeed={100}
            deleteSpeed={100}
        />
    )
}