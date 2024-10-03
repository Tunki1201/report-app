import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ReportSectionProps {
  section: string;
  report: { [key: string]: { id: string, type: string }[] };
  setReport: (report: { [key: string]: { id: string, type: string }[] }) => void;
}

const ReportSection: React.FC<ReportSectionProps> = ({ section, report, setReport }) => {

  // Handle drag end event
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = report[section].findIndex(item => item.id === active.id);
    const newIndex = report[section].findIndex(item => item.id === over.id);

    const updatedItems = arrayMove(report[section], oldIndex, newIndex);

    setReport({
      ...report,
      [section]: updatedItems,
    });
  };

  return (
    <div className="border p-4 rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">{section}</h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={report[section].map(item => item.id)}>
          {report[section].map((item, index) => (
            <SortableItem key={index} id={item.id} type={item.type} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

interface SortableItemProps {
  id: string;
  type: string;
}

// SortableItem component for each draggable item
const SortableItem: React.FC<SortableItemProps> = ({ id, type }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-gray-100 p-2 rounded-md mb-2 hover:bg-gray-200 transition-colors duration-200 ease-in-out"
    >
      {type}
    </div>
  );
};

export default ReportSection;
