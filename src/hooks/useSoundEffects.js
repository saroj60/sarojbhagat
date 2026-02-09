import { useEffect, useState, useCallback } from "react";

// For this portfolio, we'll use a simple Audio object approach instead of 'use-sound' 
// to avoid dependency issues if the user doesn't have the assets, 
// but we will simulate it or use a public URL if possible.
// Actually, let's use a generated beep sound using Web Audio API for a true "tech" feel without assets.

const useSoundEffects = () => {
    const [audioContext, setAudioContext] = useState(null);

    useEffect(() => {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) {
            setAudioContext(new Ctx());
        }
    }, []);

    const playHover = useCallback(() => {
        if (!audioContext) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }, [audioContext]);

    const playClick = useCallback(() => {
        if (!audioContext) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = "square";
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }, [audioContext]);

    return { playHover, playClick };
};

export default useSoundEffects;
