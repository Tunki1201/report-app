// ReportSection.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { DndContext } from '@dnd-kit/core';
import ReportSection from '@/components/ReportSection';

describe('ReportSection', () => {
    const mockSetReport = jest.fn();
    const report = {
        "Section 1": [
            { id: 'item-1', type: 'Item' },
            { id: 'item-2', type: 'Item' },
            { id: 'item-3', type: 'Item' },
        ],
    };

    const renderWithDnd = (children: React.ReactNode) => {
        return render(
            <DndContext>
                {children}
            </DndContext>
        );
    };

    it('renders section title', () => {
        renderWithDnd(<ReportSection section="Section 1" report={report} setReport={mockSetReport} />);
        const titleElement = screen.getByText(/Section 1/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('renders report items', () => {
        renderWithDnd(<ReportSection section="Section 1" report={report} setReport={mockSetReport} />);
        expect(screen.getByText('item-1')).toBeInTheDocument();
        expect(screen.getByText('item-2')).toBeInTheDocument();
        expect(screen.getByText('item-3')).toBeInTheDocument();
    });

    it('calls setReport when an item is dragged and dropped', () => {
        renderWithDnd(<ReportSection section="Section 1" report={report} setReport={mockSetReport} />);

        // Get item references
        const item1 = screen.getByText('item-1');
        const item3 = screen.getByText('item-3');

        // Mock the drag-and-drop functionality
        fireEvent.dragStart(item1);
        fireEvent.dragEnter(item3);
        fireEvent.drop(item3); // Dropping Item 1 over Item 3

        // Check if setReport was called with the updated order
        expect(mockSetReport).toHaveBeenCalled();

        // Check the specific call arguments to ensure the items were rearranged correctly
        const expectedOrder = [
            { id: 'item-2', type: 'Item' },
            { id: 'item-1', type: 'Item' }, // item-1 should be first after the drop
            { id: 'item-3', type: 'Item' },
        ];
        expect(mockSetReport).toHaveBeenCalledWith(expect.objectContaining({
            "Section 1": expectedOrder,
        }));
    });
});
