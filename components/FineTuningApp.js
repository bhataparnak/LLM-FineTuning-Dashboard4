import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Upload, Check, X, AlertCircle, Database, BookOpen, Cpu, Settings, BarChart } from 'lucide-react';
import ModelSelection from './ModelSelection';
import DataUpload from './DataUpload';
import DataValidation from './DataValidation';
import TrainingConfiguration from './TrainingConfiguration';
import TrainingProgress from './TrainingProgress';
import Deployment from './Deployment';

// Main component that manages the entire flow
export default function FineTuningApp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedModel, setSelectedModel] = useState(null);
  const [datasetName, setDatasetName] = useState('');
  const [trainingConfig, setTrainingConfig] = useState({
    epochs: 3,
    batchSize: 8,
    learningRate: 0.00002
  });
  
  // Steps for the fine-tuning process
  const steps = [
    { id: 1, name: 'Select Base Model', icon: <Cpu size={20} /> },
    { id: 2, name: 'Upload Training Data', icon: <Upload size={20} /> },
    { id: 3, name: 'Data Validation', icon: <AlertCircle size={20} /> },
    { id: 4, name: 'Configure Training', icon: <Settings size={20} /> },
    { id: 5, name: 'Training Progress', icon: <BarChart size={20} /> },
    { id: 6, name: 'Deployment', icon: <Database size={20} /> }
  ];
  
  // Navigate to the next step
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Navigate to the previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Render the appropriate step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ModelSelection selectedModel={selectedModel} setSelectedModel={setSelectedModel} />;
      case 2:
        return <DataUpload datasetName={datasetName} setDatasetName={setDatasetName} />;
      case 3:
        return <DataValidation />;
      case 4:
        return <TrainingConfiguration 
          trainingConfig={trainingConfig} 
          setTrainingConfig={setTrainingConfig} 
        />;
      case 5:
        return <TrainingProgress />;
      case 6:
        return <Deployment selectedModel={selectedModel} />;
      default:
        return <div>Unknown step</div>;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">LLM Fine-tuning Dashboard</h1>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          {/* Steps indicator */}
          <div className="mb-8">
            <nav className="flex justify-center">
              <ol className="flex items-center space-x-2 md:space-x-4">
                {steps.map((step) => (
                  <li key={step.id} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        step.id === currentStep
                          ? 'bg-blue-600 text-white'
                          : step.id < currentStep
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step.id < currentStep ? (
                        <Check size={16} />
                      ) : (
                        step.icon || step.id
                      )}
                    </div>
                    <span
                      className={`hidden md:block ml-2 ${
                        step.id === currentStep
                          ? 'text-blue-600 font-medium'
                          : step.id < currentStep
                          ? 'text-green-500'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.name}
                    </span>
                    {step.id < steps.length && (
                      <div className="ml-2 mr-2 text-gray-300">
                        <ChevronRight size={16} />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          
          {/* Step content */}
          <div className="bg-white shadow rounded-lg p-6">
            {renderStepContent()}
          </div>
          
          {/* Navigation buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-4 py-2 rounded-md ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft size={16} className="mr-2" />
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length}
              className={`flex items-center px-4 py-2 rounded-md ${
                currentStep === steps.length
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentStep === steps.length ? 'Finish' : 'Next'}
              {currentStep !== steps.length && <ChevronRight size={16} className="ml-2" />}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}