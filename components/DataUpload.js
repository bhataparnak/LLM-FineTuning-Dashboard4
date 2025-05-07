import React, { useState } from 'react';
import { Upload, BookOpen, X } from 'lucide-react';

// Step 2: Data Upload Component
export default function DataUpload({ datasetName, setDatasetName }) {
  const [files, setFiles] = useState([]);
  const [uploadMethod, setUploadMethod] = useState('file');
  
  const addFile = (file) => {
    setFiles([...files, file]);
  };
  
  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };
  
  // Mock file upload handler (in a real app, this would handle the actual file upload)
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 2: Upload Training Data</h2>
      <p className="text-gray-600 mb-6">
        Upload your training data in JSONL format. Each line should contain a prompt-completion pair.
      </p>
      
      <div className="mb-4">
        <label htmlFor="dataset-name" className="block text-sm font-medium text-gray-700 mb-1">
          Dataset Name
        </label>
        <input
          type="text"
          id="dataset-name"
          className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border"
          value={datasetName}
          onChange={(e) => setDatasetName(e.target.value)}
          placeholder="My Fine-tuning Dataset"
        />
      </div>
      
      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${
              uploadMethod === 'file' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'
            }`}
            onClick={() => setUploadMethod('file')}
          >
            Upload Files
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              uploadMethod === 'database' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'
            }`}
            onClick={() => setUploadMethod('database')}
          >
            Import from Database
          </button>
        </div>
        
        {uploadMethod === 'file' ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload size={36} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-600 mb-2">Drag and drop your JSONL files here</p>
            <p className="text-sm text-gray-500 mb-4">or</p>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              multiple
              accept=".jsonl,.json"
              onChange={handleFileUpload}
            />
            <label 
              htmlFor="file-upload" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Browse Files
            </label>
          </div>
        ) : (
          <div className="border rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Database Connection
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border">
                <option>Snowflake - Analytics</option>
                <option>PostgreSQL - Production</option>
                <option>BigQuery - Marketing</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SQL Query
              </label>
              <textarea
                className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border"
                rows="3"
                placeholder="SELECT prompt, completion FROM training_data LIMIT 1000"
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Preview Data
            </button>
          </div>
        )}
      </div>
      
      {files.length > 0 && (
        <div>
          <h3 className="font-medium mb-2">Uploaded Files</h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center border rounded-md p-2 bg-gray-50"
              >
                <div className="flex items-center">
                  <BookOpen size={16} className="text-gray-500 mr-2" />
                  <span>{file.name}</span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}