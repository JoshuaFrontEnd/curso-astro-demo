import { useState } from 'preact/hooks';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div class="flex justify-center items-center mb-4">
      <span class="text-yellow-300 text-xl mr-4">{counter}</span>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
};
