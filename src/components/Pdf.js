import React from 'react';
import jsPDF from 'jspdf';

function generarPDF() {
  const pdf = new jsPDF();
  pdf.text('Mi portfolio', 20, 20);
  pdf.text('Home', 20, 30);
  pdf.text('Portfolio', 20, 40);
  pdf.text('About Me', 20, 50);
  pdf.text('Contact', 20, 60);
  pdf.text('Banner', 20, 70);
  pdf.save('myportfolio.pdf');
}

function PdfButton() {
  return (
    <button onClick={generarPDF}>Download as PDF</button>
  );
}

export default PdfButton;
