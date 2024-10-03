import { render, screen } from '@testing-library/react';
import ReportSection from '@/components/ReportSection';

describe('ReportSection', () => {
    const mockSetReport = jest.fn();
    const report = {
        "Section 1": ['Item 1', 'Item 2', 'Item 3'],
    };

    it('renders section title', () => {
        render(<ReportSection section="Section 1" report={report} setReport={mockSetReport} />);
        const titleElement = screen.getByText(/Section 1/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('renders report items', () => {
        render(<ReportSection section="Section 1" report={report} setReport={mockSetReport} />);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('Item 3')).toBeInTheDocument();
    });
});
