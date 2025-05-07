import React, { useState } from 'react';
import { Check } from 'lucide-react';

// Step 6: Deployment
export default function Deployment({ selectedModel }) {
  const [deploymentName, setDeploymentName] = useState('');
  const [deploymentType, setDeploymentType] = useState('api');
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 6: Deployment</h2>
      <p className="text-gray-600 mb-6">
        Configure how you want to deploy and access your fine-tuned model.
      </p>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="model-name" className="block text-sm font-medium text-gray-700 mb-1">
            Deployment Name
          </label>
          <input
            type="text"
            id="model-name"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border"
            value={deploymentName}
            onChange={(e) => setDeploymentName(e.target.value)}
            placeholder="my-finetuned-model-v1"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deployment Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                deploymentType === 'api'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
              onClick={() => setDeploymentType('api')}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">API Endpoint</h3>
                {deploymentType === 'api' && (
                  <div className="bg-blue-500 rounded-full p-1 text-white">
                    <Check size={14} />
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Deploy as a REST API for application integration
              </p>
            </div>
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                deploymentType === 'notebook'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
              onClick={() => setDeploymentType('notebook')}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Notebook</h3>
                {deploymentType === 'notebook' && (
                  <div className="bg-blue-500 rounded-full p-1 text-white">
                    <Check size={14} />
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Use directly in notebook environments for data analysis
              </p>
            </div>
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                deploymentType === 'batch'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
              onClick={() => setDeploymentType('batch')}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Batch Processing</h3>
                {deploymentType === 'batch' && (
                  <div className="bg-blue-500 rounded-full p-1 text-white">
                    <Check size={14} />
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Process large volumes of data in background jobs
              </p>
            </div>
          </div>
        </div>
        
        {deploymentType === 'api' && (
          <div>
            <h3 className="font-medium mb-2">API Configuration</h3>
            <div className="space-y-4 border rounded-lg p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Authentication Type
                </label>
                <select className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border">
                  <option>API Key</option>
                  <option>OAuth 2.0</option>
                  <option>JWT</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rate Limiting
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    className="w-24 border-gray-300 rounded-md shadow-sm px-4 py-2 border"
                    defaultValue="60"
                  />
                  <span className="flex items-center text-gray-500">requests per minute</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Scaling Configuration
                </label>
                <select className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border">
                  <option>Auto-scaling (1-5 instances)</option>
                  <option>Fixed (1 instance)</option>
                  <option>Fixed (2 instances)</option>
                  <option>Fixed (5 instances)</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {deploymentType === 'notebook' && (
          <div>
            <h3 className="font-medium mb-2">Notebook Integration</h3>
            <div className="space-y-4 border rounded-lg p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notebook Environment
                </label>
                <select className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border">
                  <option>Jupyter Notebook</option>
                  <option>Google Colab</option>
                  <option>Databricks Notebook</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Package Dependencies
                </label>
                <textarea
                  className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border"
                  rows="3"
                  defaultValue="transformers==4.30.2&#10;torch==2.0.1&#10;accelerate==0.20.3"
                ></textarea>
              </div>
            </div>
          </div>
        )}
        
        {deploymentType === 'batch' && (
          <div>
            <h3 className="font-medium mb-2">Batch Processing Configuration</h3>
            <div className="space-y-4 border rounded-lg p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Input Source
                </label>
                <select className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border">
                  <option>Data Warehouse</option>
                  <option>Object Storage</option>
                  <option>Message Queue</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Scheduling
                </label>
                <select className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border">
                  <option>Daily</option>
                  <option>Hourly</option>
                  <option>Weekly</option>
                  <option>On-demand</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Output Destination
                </label>
                <select className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border">
                  <option>Data Warehouse</option>
                  <option>Object Storage</option>
                  <option>API Callback</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        <div className="border-t pt-6">
          <h3 className="font-medium mb-2">Advanced Settings</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="enable-monitoring"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="enable-monitoring" className="ml-2 block text-sm text-gray-700">
                Enable Performance Monitoring
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="enable-logging"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="enable-logging" className="ml-2 block text-sm text-gray-700">
                Enable Request Logging
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="enable-versioning"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="enable-versioning" className="ml-2 block text-sm text-gray-700">
                Enable Model Versioning
              </label>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Check size={20} className="text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Your fine-tuned model is ready for deployment! Once deployed, you'll receive access credentials and usage documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}