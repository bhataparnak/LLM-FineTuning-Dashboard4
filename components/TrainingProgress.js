import React from 'react';
import { Cpu } from 'lucide-react';

// Step 5: Training Progress
export default function TrainingProgress() {
  const progressData = {
    trainingLoss: [0.68, 0.59, 0.48, 0.42, 0.38, 0.35, 0.33, 0.31, 0.30, 0.29],
    validationLoss: [0.71, 0.62, 0.54, 0.49, 0.47, 0.45, 0.44, 0.43, 0.43, 0.42],
    currentEpoch: 3,
    totalEpochs: 3,
    status: 'running',
    startTime: '2023-10-15T14:30:00Z',
    estimatedTimeRemaining: '12 minutes'
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 5: Training Progress</h2>
      <p className="text-gray-600 mb-6">
        Monitor the training progress of your fine-tuned model.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <Cpu size={20} className="text-blue-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Status:</strong> Training in progress - Epoch {progressData.currentEpoch} of {progressData.totalEpochs}
            </p>
            <p className="text-sm text-blue-700 mt-1">
              <strong>Estimated time remaining:</strong> {progressData.estimatedTimeRemaining}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-4">Training Metrics</h3>
        <div className="border rounded-lg p-4">
          {/* Placeholder for Loss Chart */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-gray-500 mb-2">Loss chart would be displayed here</p>
                <p className="text-sm text-gray-400">Training Loss: 0.33</p>
                <p className="text-sm text-gray-400">Validation Loss: 0.44</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-4">Training Log</h3>
        <div className="border rounded-lg p-4 bg-gray-50 h-48 overflow-y-auto font-mono text-sm">
          <p className="text-gray-800">[14:30:15] Starting fine-tuning job...</p>
          <p className="text-gray-800">[14:31:02] Epoch 1/3: 100%|██████████| 438/438 [05:21&lt;00:00]</p>
          <p className="text-gray-800">[14:31:05] Epoch 1 - Training Loss: 0.48, Validation Loss: 0.54</p>
          <p className="text-gray-800">[14:36:34] Epoch 2/3: 100%|██████████| 438/438 [05:29&lt;00:00]</p>
          <p className="text-gray-800">[14:36:37] Epoch 2 - Training Loss: 0.38, Validation Loss: 0.47</p>
          <p className="text-gray-800">[14:42:05] Epoch 3/3: 57%|█████▋    | 250/438 [02:54&lt;02:11]</p>
          <p className="text-gray-800">[14:42:08] Current Training Loss: 0.33</p>
        </div>
      </div>
    </div>
  );
}