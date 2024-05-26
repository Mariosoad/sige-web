'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const getNextComingSoonDate = (): Date => {
    return new Date(`06/21/2024`);
};

const comingSoonIncoming = (): boolean => {
    const now = new Date();
    return now.getMonth() === 11 && now.getDate() === 25;
};

const padNumber = (number: number): string => (number < 10 ? `${number}` : `${number}`);

const CountdownDays: React.FC = () => {
    const intervalRef = useRef<number | null>(null);

    const [comingSoon, setComingSoon] = useState<boolean>(false);
    const [nextComingSoon, setNextComingSoon] = useState<Date>(getNextComingSoonDate());
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const updateTimeLeft = useCallback(() => {
        const now = new Date();
        const timeDiffInMs = nextComingSoon.getTime() - now.getTime();

        if (timeDiffInMs <= 0) {
            window.clearInterval(intervalRef.current!);
            setComingSoon(true);
            setNextComingSoon(getNextComingSoonDate());
        }

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        setTimeLeft({
            days: Math.floor(timeDiffInMs / days),
            hours: Math.floor((timeDiffInMs % days) / hours),
            minutes: Math.floor((timeDiffInMs % hours) / minutes),
            seconds: Math.floor((timeDiffInMs % minutes) / seconds),
        });
    }, [nextComingSoon]);

    useEffect(() => {
        if (comingSoonIncoming()) {
            setComingSoon(true);
            return;
        }

        updateTimeLeft();
        intervalRef.current = window.setInterval(updateTimeLeft, 1000);

        return () => {
            window.clearInterval(intervalRef.current!);
        };
    }, [nextComingSoon, updateTimeLeft]);

    const onStartNextCountdownClick = () => {
        updateTimeLeft();
        intervalRef.current = window.setInterval(updateTimeLeft, 1000);
        setComingSoon(false);
    };

    return (
        <h2 className='text-4xl 2xl:text-6xl font-extrabold color-title'>
            <b>{padNumber(timeLeft.days)}D</b> <b>{padNumber(timeLeft.hours)}H </b>
            <b>{padNumber(timeLeft.minutes)}M</b>
        </h2>
    );
};

export default CountdownDays;
