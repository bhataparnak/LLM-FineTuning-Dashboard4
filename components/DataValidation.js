import React from 'react';
import { AlertCircle } from 'lucide-react';

// Step 3: Data Validation Component
export default function DataValidation() {
  const validationResults = {
    totalExamples: 3500,
    validExamples: 3482,
    invalidExamples: 18,
    issues: [
      { type: 'Missing completion', count: 7 },
      { type: 'Prompt too long', count: 8 },
      { type: 'Invalid format', count: 3 }
    ]
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 3: Data Validation</h2>
      <p className="text-gray-600 mb-6">
        Review the validation results to ensure your training data is properly formatted.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded-lg p-4 bg-green-50 border-green-200">
          <h3 className="text-sm text-green-700 font-medium">Valid Examples</h3>
          <p className="text-2xl font-bold text-green-700">{validationResults.validExamples}</p>
        </div>
        <div className="border rounded-lg p-4 bg-red-50 border-red-200">
          <h3 className="text-sm text-red-700 font-medium">Invalid Examples</h3>
          <p className="text-2xl font-bold text-red-700">{validationResults.invalidExamples}</p>
        </div>
        <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
          <h3 className="text-sm text-blue-700 font-medium">Total Examples</h3>
          <p className="text-2xl font-bold text-blue-700">{validationResults.totalExamples}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Validation Issues</h3>
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Count
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {validationResults.issues.map((issue, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {issue.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {issue.count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle size={20} className="text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              We recommend fixing the validation issues before proceeding with training. You can either fix the issues in your original files and re-upload, or proceed with only the valid examples.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}