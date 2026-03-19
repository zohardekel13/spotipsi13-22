import sound from '../songs_table/songs/1.mp3';
import { useEffect, useRef } from 'react';
import type {Song}  from '../../App';

const UseAudioPlayer = (song : Song | undefined) => {
    const refAudio = useRef(<audio src={sound} is='myAudio'/>)

    useEffect(() => {
        refAudio.current = <audio src={sound} is='myAudio'/>
    }, [song])
    return (
        refAudio
    )
}
export default UseAudioPlayer;