'use client';

import React, { useState } from 'react';
import axios from 'axios';

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setError('');
    setSuccessMessage(''); // Clear success message on new file select
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);
      setError('');
      const response = await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        setSuccessMessage('File uploaded successfully!');
        // Removed router.refresh(); to keep the success message visible
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Upload failed, please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="grid grid-col items-center justify-center h-96 pt-20 dark:bg-slate-900">
      <h1 className=" text-blue-600">Please Drop Your CV Here</h1>
      <div className="w-full max-w-sm">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-blue-600 hover:file:bg-violet-100"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      </div>
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 bg-blue-600 text-white font-poppins py-2 px-4 rounded-md hover:bg-blue-500 transition-colors disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadPage;
