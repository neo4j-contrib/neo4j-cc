
import { Story, Meta } from '@storybook/react';

import { Countdown, CountdownProps } from 'react-daisyui';

import { CcCountdown, CcCountdownProps } from './cc-countdown';

// import { CcButton } from '../cc-button/cc-button';
import { useEffect, useState } from 'react';

export default {
  component: CcCountdown,
  title: 'elements/CcCountdown',
} as Meta;

export const Daisy: Story<CountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return <Countdown className="text-2xl" value={value} />
}
Daisy.args = {
  value: 50,
}



export const Default: Story<CcCountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return <CcCountdown className="text-2xl" value={value} />
}
Default.args = {
  value: 50,
}

export const Clock: Story<CcCountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return (
    <span className="font-mono text-2xl">
      <CcCountdown value={10} />:
      <CcCountdown value={24} />:
      <CcCountdown value={value} />
    </span>
  )
}
Clock.args = {
  value: 34,
}

export const WithLabels: Story<CcCountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <CcCountdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="flex flex-col">
        <CcCountdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="flex flex-col">
        <CcCountdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="flex flex-col">
        <CcCountdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>
  )
}
WithLabels.args = {
  value: 37,
}

export const WithBoxes: Story<CcCountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <CcCountdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <CcCountdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <CcCountdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <CcCountdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>
  )
}
WithBoxes.args = {
  value: 26,
}
