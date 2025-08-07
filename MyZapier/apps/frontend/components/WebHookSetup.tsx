'use client';

import { useState } from 'react';
import { Pencil, X, Maximize } from 'lucide-react';

export default function WebhookSetup() {
  const [title, setTitle] = useState("Catch Hook");
  const [editingTitle, setEditingTitle] = useState(false);

  return (
    <div className="bg-white w-full max-w-xl border rounded-lg shadow-lg p-0 text-gray-800 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-[#f5f2ff] rounded-t-lg">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>1.</span>
          {editingTitle ? (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setEditingTitle(false)}
              autoFocus
              className="border-b border-gray-400 outline-none bg-transparent"
            />
          ) : (
            <div className="flex items-center gap-1">
              <span>{title}</span>
              <Pencil size={16} className="cursor-pointer" onClick={() => setEditingTitle(true)} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <Maximize size={18} className="cursor-pointer text-gray-500 hover:text-gray-800" />
          <X size={18} className="cursor-pointer text-gray-500 hover:text-red-600" />
        </div>
      </div>

      {/* Steps */}
      <div className="flex gap-2 px-4 py-2 text-sm border-b items-center">
        <span className="text-black font-medium">Setup</span>
        <span className="text-gray-400">›</span>
        <span className="text-green-600 font-medium">Configure ✓</span>
        <span className="text-gray-400">›</span>
        <span className="text-yellow-600 font-medium">Test ⚠️</span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-6">
        {/* App section */}
        <div>
          <label className="block text-sm font-medium mb-1">App <span className="text-red-500">*</span></label>
          <div className="border px-3 py-2 flex items-center justify-between rounded-md">
            <div className="flex items-center gap-3">
              <div className="border border-orange-500 text-orange-500 px-2 py-1 rounded text-sm">
                Webhooks by Zapier
              </div>
              <span className="bg-yellow-300 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">Premium</span>
            </div>
            <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-1 rounded">
              Change
            </button>
          </div>
        </div>

        {/* Trigger event section */}
        <div>
          <label className="block text-sm font-medium mb-1">Trigger event <span className="text-red-500">*</span></label>
          <select className="w-full border px-3 py-2 rounded-md">
            <option>Catch Hook</option>
            <option>Catch Raw Hook</option>
            <option>Custom Hook</option>
          </select>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t">
        <button className="bg-violet-600 hover:bg-violet-700 w-full py-2 text-white font-semibold rounded text-sm">
          Continue
        </button>
      </div>
    </div>
  );
}
