import { useState } from 'react';
import { GymSVG } from './icons';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';

  const randomNum = faker.number.int();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  

export default function Fitness() {
  const totalButtons = 11; // 6 Gym + 5 Running
  const [buttonStates, setButtonStates] = useState(Array(totalButtons).fill(false));

  const handleButtonClick = (index: number) => {
    const newStates = [...buttonStates];
    newStates[index] = true;
    setButtonStates(newStates);
  };

  const handleComplete = () => {
    setButtonStates(Array(totalButtons).fill(false));
  };

  const allButtonsClicked = buttonStates.every(state => state);

  return (
    <div className="flex flex-col h-full justify-center items-center gap-12 p-12">
      {/* Gym and Running Buttons */}
      <div className="flex gap-4 flex-wrap">

      <Bar options={options} data={data} />;
        {buttonStates.slice(0, 6).map((clicked, index) => (
          <button
            key={`gym-${index}`}
            className={`p-2 ${clicked ? 'bg-green-500' : 'bg-blue-500'}`}
            onClick={() => handleButtonClick(index)}
            disabled={clicked}
          >
            <GymSVG/> 
          </button>
        ))}
        {buttonStates.slice(6, 11).map((clicked, index) => (
          <button
            key={`run-${index}`}
            className={`p-2 ${clicked ? 'bg-purple-500' : 'bg-orange-500'}`}
            onClick={() => handleButtonClick(index + 6)}
            disabled={clicked}
          >
            Running {index + 1}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full"
          style={{ width: `${(buttonStates.filter(Boolean).length / 6) * 100}%` }}
        />
      </div>

      {/* Complete Button */}
      <button
        className={`mt-6 p-2 ${allButtonsClicked ? 'bg-yellow-500' : 'bg-gray-500'}`}
        onClick={handleComplete}
        disabled={!allButtonsClicked}
      >
        Complete
      </button>
    </div>
  );
}
