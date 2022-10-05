import React from 'react'
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
function Demo() { 

    function ExportPDF(){
    var print = document.getElementById('print');
  //var width = document.getElementById('print').offsetWidth;
  html2canvas(print).then(canvas => {
    var imgWidth = 208;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf.jsPDF('p', 'mm', 'a3');
    var position = 5;
    pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth-7, imgHeight)
    pdf.save('GoodsReceipt.pdf');
   })
    }
  return (
    <div className='container' id='print'>
      <h3 className='bg-warning'>say hello</h3>
      <button className='btn btn-primary' onClick={ExportPDF}>Download</button>
    </div>
  )
}

export default Demo