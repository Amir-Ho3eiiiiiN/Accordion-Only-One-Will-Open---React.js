import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
];

function Accordion() {
  const [isOpen, setIsOpen] = useState(0);
  const handlerOpen = (id) => {
    setIsOpen(id);
  };
  return (
    <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-lg h-full bg-white">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          isOpen={isOpen === item.id}
          onOpen={handlerOpen}
          accordion={item}
        />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ accordion, isOpen, onOpen }) {
  return (
    <div className="border-b w-full">
      <div
        onClick={() => onOpen(accordion.id)}
        className="flex justify-between items-center cursor-pointer px-4 py-3"
      >
        <h3 className="font-semibold text-lg">{accordion.title}</h3>
        <ChevronDownIcon
          className={`size-5 linea transition-all ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={` text-left fontver leading-6 text-gray-800 transition-all ${
          isOpen
            ? "max-h-max opacity-1 pt-2 pb-4 px-4"
            : "max-h-0 overflow-hidden opacity-0 p-0"
        }`}
      >
        {accordion.text}
      </div>
    </div>
  );
}
