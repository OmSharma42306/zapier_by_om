'use client';

import { useState } from 'react';
import { Copy, Loader2 } from 'lucide-react';

export default function WebhookListening() {
  const [copied, setCopied] = useState(false);
  const webhookUrl = "https://hooks.zapier.com/hooks/catch/123456/abcdef";
  

  const handleCopy = async () => {
    await navigator.clipboard.writeText(webhookUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-white w-full max-w-xl border rounded-lg shadow-lg p-0 text-gray-800 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-[#f5f2ff] rounded-t-lg">
        <h2 className="font-semibold text-lg">Test</h2>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        {/* Webhook URL */}
        <div>
          <p className="text-sm font-medium mb-1">Your webhook URL</p>
          <p className="text-xs text-gray-500 mb-3">
            You’ll need to configure your application with this Zap’s webhook URL.
          </p>
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              readOnly
              value={webhookUrl}
              className="w-full px-3 py-2 text-sm bg-gray-50 outline-none"
            />
            <button
              onClick={handleCopy}
              className="bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200 flex items-center gap-1"
            >
              <Copy size={14} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            We’ve generated a custom webhook URL for you.
          </p>
        </div>

        {/* Listening Section */}
        <div className="flex items-center gap-2">
          <Loader2 className="animate-spin text-violet-600" size={18} />
          <span className="text-sm font-medium">We’re listening!</span>
        </div>
        <p className="text-xs text-gray-600">
          To confirm your trigger is set up correctly, we’ll find recent requests in your account:
          <br />
          <span className="font-medium">Webhooks by Zapier</span>
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t">
        <button className="bg-violet-600 hover:bg-violet-700 w-full py-2 text-white font-semibold rounded text-sm">
          Test trigger
        </button>
      </div>
    </div>
  );
}
