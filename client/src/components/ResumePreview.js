import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import TemplateManager from './templates/TemplateManager';

const ResumePreview = ({ resume, template = 'modern' }) => {
  const [format, setFormat] = useState('pdf');
  const componentRef = useRef();

  // Print to PDF using browser print dialog
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${resume.title || 'Resume'}.pdf`,
  });

  // Download as PDF
  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;
    
    try {
      // Get the resume container element
      const element = componentRef.current;
      const totalHeight = element.scrollHeight;
      const a4Width = 210; // A4 width in mm
      const a4Height = 297; // A4 height in mm
      
      // Create PDF with A4 dimensions
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Calculate how many pages we need
      const pageCount = Math.ceil(totalHeight / 1000); // Approximate pixels per page
      console.log(`Resume height: ${totalHeight}px, estimated pages: ${pageCount}`);
      
      // Function to capture a specific part of the resume
      const captureSection = async (startY, height) => {
        const canvas = await html2canvas(element, {
          scale: 2, // Higher scale for better quality
          useCORS: true,
          logging: true,
          allowTaint: true,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
          y: startY,
          height: height,
          scrollY: -startY
        });
        return canvas;
      };
      
      // Capture the entire resume at once
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: true,
        allowTaint: true,
        windowWidth: element.scrollWidth,
        windowHeight: totalHeight
      });
      
      // Calculate dimensions
      const imgWidth = a4Width;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add the image to the PDF
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0),
        'JPEG',
        0,
        0,
        imgWidth,
        imgHeight
      );
      
      // If the content is taller than one page, add more pages
      if (imgHeight > a4Height) {
        const pageCount = Math.ceil(imgHeight / a4Height);
        
        for (let i = 1; i < pageCount; i++) {
          pdf.addPage();
          pdf.addImage(
            canvas.toDataURL('image/jpeg', 1.0),
            'JPEG',
            0,
            -(i * a4Height),
            imgWidth,
            imgHeight
          );
        }
      }
      
      // Save the PDF
      pdf.save(`${resume.title || 'Resume'}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  // Download as DOCX
  const handleDownloadDOCX = async () => {
    if (!componentRef.current || !resume) return;
    
    try {
      // Create a simple DOCX document
      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            new Paragraph({
              text: resume.personalInfo.name,
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER
            }),
            new Paragraph({
              text: resume.personalInfo.title || '',
              alignment: AlignmentType.CENTER
            }),
            new Paragraph({
              text: ''
            }),
            new Paragraph({
              text: 'Contact Information',
              heading: HeadingLevel.HEADING_2
            }),
            new Paragraph({
              children: [
                new TextRun(`Email: ${resume.personalInfo.email || ''}`),
              ]
            }),
            new Paragraph({
              children: [
                new TextRun(`Phone: ${resume.personalInfo.phone || ''}`),
              ]
            }),
            new Paragraph({
              text: ''
            }),
            new Paragraph({
              text: 'Summary',
              heading: HeadingLevel.HEADING_2
            }),
            new Paragraph({
              text: resume.summary || ''
            }),
            // Add more sections as needed for experience, education, etc.
          ]
        }]
      });

      // Generate and download the document
      const buffer = await Packer.toBuffer(doc);
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resume.title || 'Resume'}.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating DOCX:', error);
      alert('Failed to generate DOCX. Please try again.');
    }
  };

  // Using the TemplateManager component to handle template rendering

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="px-6 py-4 bg-blue-600 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">Resume Preview</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setFormat('pdf')}
              className={`px-3 py-1 rounded-md text-sm ${format === 'pdf' ? 'bg-white text-blue-600' : 'bg-blue-700 text-white'}`}
            >
              PDF
            </button>
            <button
              onClick={() => setFormat('docx')}
              className={`px-3 py-1 rounded-md text-sm ${format === 'docx' ? 'bg-white text-blue-600' : 'bg-blue-700 text-white'}`}
            >
              DOCX
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={format === 'pdf' ? handleDownloadPDF : handleDownloadDOCX}
              className="btn btn-primary"
            >
              Download as {format.toUpperCase()}
            </button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="overflow-auto max-h-[800px]" ref={componentRef}>
              <TemplateManager resume={resume} templateId={template} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
