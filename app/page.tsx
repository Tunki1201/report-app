'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import ElementButton from '../components/ElementButton';

// Dynamically import ReportSection to disable SSR
const ReportSection = dynamic(() => import('../components/ReportSection'), {
  ssr: false,
});

export default function Home() {
  // Report state with unique IDs for each element
  const [report, setReport] = useState<{ [key: string]: { id: string, type: string }[] }>({
    introduction: [],
    body: [],
    conclusion: [],
  });

  // Add element to a section with a unique ID
  const addElement = (section: string, element: string) => {
    setReport((prevReport) => ({
      ...prevReport,
      [section]: [...prevReport[section], { id: `${element}-${Date.now()}`, type: element }],
    }));
  };

  // Sections and their corresponding elements
  const sections = ['introduction', 'body', 'conclusion'];
  const elements = {
    introduction: ['Heading', 'Paragraph'],
    body: ['Detail'],
    conclusion: ['Summary'],
  };

  return (
    <main className="flex flex-col gap-4 p-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Report Builder</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Report Sections */}
        <div className="flex-1">
          {sections.map((section) => (
            <ReportSection key={section} section={section} report={report} setReport={setReport} />
          ))}
        </div>

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
