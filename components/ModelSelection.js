import React from 'react';
import { Check } from 'lucide-react';

// Step 1: Model Selection Component
export default function ModelSelection({ selectedModel, setSelectedModel }) {
  const models = [
    { id: 'llm-base-7b', name: 'Base LLM 7B', description: 'General purpose 7B parameter model' },
    { id: 'llm-base-13b', name: 'Base LLM 13B', description: 'Larger 13B parameter model with improved capabilities' },
    { id: 'llm-base-70b', name: 'Base LLM 70B', description: 'Enterprise-grade 70B parameter model' }
  ];
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 1: Select a Base Model</h2>
      <p className="text-gray-600 mb-6">
        Choose a base model as the foundation for your fine-tuning. Larger models may provide better performance but require more computational resources.
      </p>
      
      <div className="grid gap-4 md:grid-cols-3">
        {models.map((model) => (
          <div
            key={model.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              selectedModel === model.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
            onClick={() => setSelectedModel(model.id)}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{model.name}</h3>
              {selectedModel === model.id && (
                <div className="bg-blue-500 rounded-full p-1 text-white">
                  <Check size={14} />
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-2">{model.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}