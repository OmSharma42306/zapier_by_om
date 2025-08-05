'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const topApps = [
  { name: 'Gmail', icon: '📧' },
  { name: 'Google Sheets', icon: '📊' },
  { name: 'Notion', icon: '📓' },
  { name: 'Slack', icon: '💬' },
  { name: 'Google Calendar', icon: '📆' },
  { name: 'Google Drive', icon: '🗂️' },
  { name: 'HubSpot', icon: '🌀' },
  { name: 'Google Forms', icon: '📝' },
  { name: 'Facebook Lead Ads', icon: '📘' },
  { name: 'Mailchimp', icon: '🐵' },
  { name: 'Calendly', icon: '🕒' },
  { name: 'Microsoft Outlook', icon: '📩' },
  { name: 'Typeform', icon: '🔘' },
];

const builtInTools = [
  'Webhooks',
  'Schedule',
  'Email',
  'RSS',
  'Code',
  'Email Parser',
  'Sub-Zap',
];

const zapierProducts = [
  'Chatbots',
  'Interfaces',
  'Tables',
  'Functions',
  'Agents',
];

export default function ServicesModal({name}:any) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-2 py-1 bg-sky-900 text-white rounded hover:bg-#ECE9DF-700"
      >
        {name}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90vw] max-w-4xl rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>

            <input
              type="text"
              placeholder="Search 7,000+ apps and tools..."
              className="w-full px-4 py-2 border rounded mb-6"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Your top apps</h2>
                <ul className="space-y-2">
                  {topApps.map((app) => (
                    <li key={app.name} className="flex items-center gap-2">
                      <span className="text-xl">{app.icon}</span>
                      <span>{app.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Popular built-in tools</h2>
                <ul className="space-y-2 mb-6">
                  {builtInTools.map((tool) => (
                    <li key={tool} className="text-gray-700">{tool}</li>
                  ))}
                </ul>

                <h2 className="text-lg font-semibold mb-2">Zapier products</h2>
                <ul className="space-y-2">
                  {zapierProducts.map((product) => (
                    <li key={product} className="text-gray-700">{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
