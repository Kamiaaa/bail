'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getFileIcon = (fileName: string): string => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  
  const iconMap: { [key: string]: string } = {
    pdf: '/img/icons/pdf.png',
    doc: '/img/icons/doc.png',
    docx: '/img/icons/doc.png',
    xls: '/img/icons/excel.png',
    xlsx: '/img/icons/excel.png',
    ppt: '/img/icons/ppt.png',
    pptx: '/img/icons/ppt.png',
    txt: '/img/icons/txt.png',
    zip: '/img/icons/zip.png',
    rar: '/img/icons/zip.png',
  };
  
  return iconMap[extension!] || '/icons/file.png';
};

const FilesPage: React.FC = () => {
  const [fileList, setFileList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 5; // Number of files per page

  // Fetch the list of uploaded files
  const fetchFileList = async () => {
    try {
      const response = await axios.get('/api/list-files');
      setFileList(response.data);
    } catch (error) {
      console.error('Failed to fetch file list:', error);
    }
  };

  useEffect(() => {
    fetchFileList();
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(fileList.length / filesPerPage);

  // Get the files for the current page
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = fileList.slice(indexOfFirstFile, indexOfLastFile);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-28 dark:bg-slate-900">
      <h1 className="text-gray-900 mb-4">Uploaded Files</h1>
      
      <ul className="list-none mt-4 space-y-4">
        {currentFiles.length > 0 ? (
          currentFiles.map((fileName, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img
                src={getFileIcon(fileName)}
                alt={fileName}
                className="w-16 h-16 object-contain"
              />
              <a
                href={`/uploads/${fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-gray-300 hover:underline text-lg"
              >
                {fileName}
              </a>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No files uploaded yet.</li>
        )}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-600 text-white font-poppins py-2 px-4 rounded-md hover:bg-blue-500 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-lg dark:text-gray-300">{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-600 text-white font-poppins dark:text-gray-300 py-2 px-4 rounded-md hover:bg-blue-500 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <a
        href="/upload"
        className="mt-4 bg-blue-600 text-white font-poppins py-2 px-4 rounded-md hover:bg-blue-500 transition-colors"
      >
        Go Back to Upload Page
      </a>
    </div>
  );
};

export default FilesPage;
