'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import ElementButton from '../components/ElementButton';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

// Dynamically import ReportSection to disable SSR
const ReportSection = dynamic(() => import('../components/ReportSection'), {
  ssr: false,
});

// Sortable Section component
const SortableSection = ({ id, children }) => {
  const { setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="mb-4">
      {children}
    </div>
  );
};

export default function Home() {
  // Report state with unique IDs for each element
  const [report, setReport] = useState<{ [key: string]: { id: string, type: string }[] }>({
    introduction: [],
    body: [],
    conclusion: [],
  });

  // State to track section order
  const [sections, setSections] = useState<string[]>(['introduction', 'body', 'conclusion']);

  // Add element to a section with a unique ID and sequential number for all types of elements
  const addElement = (section: string, element: string) => {
    // Count the number of existing elements of the same type in the section
    const elementCount = report[section].filter(item => item.type.startsWith(element)).length;

    // Create the label (e.g., Heading1, Detail2) based on the count
    const elementLabel = `${element}${elementCount + 1}`;

    setReport((prevReport) => ({
      ...prevReport,
      [section]: [...prevReport[section], { id: `${elementLabel}-${Date.now()}`, type: elementLabel }],
    }));
  };

  // Handle section drag end
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = sections.indexOf(active.id);
      const newIndex = sections.indexOf(over.id);
      setSections(arrayMove(sections, oldIndex, newIndex));
    }
  };

  const elements = {
    introduction: ['Heading', 'Paragraph'],
    body: ['Detail'],
    conclusion: ['Summary'],
  };

  return (
    <main className="flex flex-col gap-4 p-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Report Builder</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Draggable Sections */}
        <DndContext modifiers={[restrictToVerticalAxis]} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sections}>
            <div className="flex-1">
              {sections.map((section) => (
                <SortableSection key={section} id={section}>
                  <ReportSection section={section} report={report} setReport={setReport} />
                </SortableSection>
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* Buttons */}
        <div className="flex flex-col">
          {sections.map((section) =>
            elements[section].map((element) => (
              <ElementButton
                key={`${section}-${element}`}
                section={section}
                element={element}
                addElement={addElement}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
