import React from 'react';

// Step 4: Training Configuration
export default function TrainingConfiguration({ trainingConfig, setTrainingConfig }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainingConfig({
      ...trainingConfig,
      [name]: name === 'epochs' || name === 'batchSize' ? parseInt(value) : parseFloat(value)
    });
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 4: Configure Training</h2>
      <p className="text-gray-600 mb-6">
        Set the hyperparameters for your fine-tuning job. The default values are recommended for most use cases.
      </p>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="epochs" className="block text-sm font-medium text-gray-700 mb-1">
            Training Epochs
          </label>
          <input
            type="number"
            id="epochs"
            name="epochs"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border"
            value={trainingConfig.epochs}
            onChange={handleChange}
            min="1"
            max="10"
          />
          <p className="mt-1 text-sm text-gray-500">
            Number of complete passes through the training dataset (1-10 recommended)
          </p>
        </div>
        
        <div>
          <label htmlFor="batchSize" className="block text-sm font-medium text-gray-700 mb-1">
            Batch Size
          </label>
          <select
            id="batchSize"
            name="batchSize"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border"
            value={trainingConfig.batchSize}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Number of examples processed together (higher values require more GPU memory)
          </p>
        </div>
        
        <div>
          <label htmlFor="learningRate" className="block text-sm font-medium text-gray-700 mb-1">
            Learning Rate
          </label>
          <input
            type="number"
            id="learningRate"
            name="learningRate"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 border"
            value={trainingConfig.learningRate}
            onChange={handleChange}
            step="0.000001"
            min="0.000001"
            max="0.01"
          />
          <p className="mt-1 text-sm text-gray-500">
            Step size for gradient updates (typically between 0.00001 and 0.0001)
          </p>
        </div>
        
        <div className="border-t pt-6">
          <h3 className="font-medium mb-2">Advanced Options</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="use-lora"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="use-lora" className="ml-2 block text-sm text-gray-700">
                Use LoRA (Low-Rank Adaptation)
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="enable-early-stopping"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="enable-early-stopping" className="ml-2 block text-sm text-gray-700">
                Enable Early Stopping
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="enable-checkpointing"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="enable-checkpointing" className="ml-2 block text-sm text-gray-700">
                Save Checkpoints
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}