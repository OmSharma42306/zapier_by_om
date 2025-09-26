// 'use client';

// import { useState } from 'react';
// import { Pencil, X, Maximize } from 'lucide-react';
// import WebhookListening from "./WebHookListening"

// export default function WebhookSetup() {
//   const [title, setTitle] = useState("Catch Hook");
//   const [editingTitle, setEditingTitle] = useState(false);
  
//   return (  

//     <div className="bg-white w-full max-w-xl border rounded-lg shadow-lg p-0 text-gray-800 font-sans">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3 border-b bg-[#f5f2ff] rounded-t-lg">
//         <div className="flex items-center gap-2 text-lg font-semibold">
//           <span>1.</span>
//           {editingTitle ? (
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               onBlur={() => setEditingTitle(false)}
//               autoFocus
//               className="border-b border-gray-400 outline-none bg-transparent"
//             />
//           ) : (
//             <div className="flex items-center gap-1">
//               <span>{title}</span>
//               <Pencil size={16} className="cursor-pointer" onClick={() => setEditingTitle(true)} />
//             </div>
//           )}
//         </div>
//         <div className="flex items-center gap-3">
//           <Maximize size={18} className="cursor-pointer text-gray-500 hover:text-gray-800" />
//           <X size={18} className="cursor-pointer text-gray-500 hover:text-red-600" />
//         </div>
//       </div>

//       {/* Steps */}
//       <div className="flex gap-2 px-4 py-2 text-sm border-b items-center">
//         <span className="text-black font-medium">Setup</span>
//         <span className="text-gray-400">›</span>
//         <span className="text-green-600 font-medium">Configure ✓</span>
//         <span className="text-gray-400">›</span>
//         <span className="text-yellow-600 font-medium">Test ⚠️</span>
//       </div>

//       {/* Body */}
//       <div className="p-4 space-y-6">
//         {/* App section */}
//         <div>
//           <label className="block text-sm font-medium mb-1">App <span className="text-red-500">*</span></label>
//           <div className="border px-3 py-2 flex items-center justify-between rounded-md">
//             <div className="flex items-center gap-3">
//               <div className="border border-orange-500 text-orange-500 px-2 py-1 rounded text-sm">
//                 Webhooks by Zapier
//               </div>
//               <span className="bg-yellow-300 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">Premium</span>
//             </div>
//             <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-1 rounded">
//               Change
//             </button>
//           </div>
//         </div>

//         {/* Trigger event section */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Trigger event <span className="text-red-500">*</span></label>
//           <select className="w-full border px-3 py-2 rounded-md">
//             <option>Catch Hook</option>
//             <option>Catch Raw Hook</option>
//             <option>Custom Hook</option>
//           </select>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="px-4 py-3 border-t">
//         <button className="bg-violet-600 hover:bg-violet-700 w-full py-2 text-white font-semibold rounded text-sm">
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { Pencil, X, Maximize } from 'lucide-react';

export default function WebhookSetup() {
  const [title, setTitle] = useState("Catch Hook");
  const [editingTitle, setEditingTitle] = useState(false);
  const [triggerEvent, setTriggerEvent] = useState("Catch Hook");
  console.log("Trigger Event:", triggerEvent);

  // Example webhook URL
  const webhookURL = "https://example.com/webhook/123456";

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
          <select
            className="w-full border px-3 py-2 rounded-md"
            value={triggerEvent}
            onChange={(e) => setTriggerEvent(e.target.value)}
          >
            <option>Catch Hook</option>
            <option>Catch Raw Hook</option>
            <option>Custom Hook</option>
          </select>

          {/* Show Webhook URL when "Catch Raw Hook" is selected */}
          {triggerEvent === "Catch Raw Hook" && (
            <div className="mt-2 p-2 bg-gray-100 border rounded text-sm text-gray-800">
              Listening on URL: <code className="text-blue-600">{webhookURL}</code>
            </div>
          )}
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

// 'use client';

// import { useState } from 'react';
// import { Pencil, X, Maximize, Copy, Loader2 } from 'lucide-react';

// export default function WebhookSetup() {
//   const [title, setTitle] = useState("Catch Hook");
//   const [editingTitle, setEditingTitle] = useState(false);
//   const [step, setStep] = useState<"setup" | "listening">("setup");
//   const [copied, setCopied] = useState(false);
//   console.log("STep",)

//   const webhookUrl = "https://hooks.zapier.com/hooks/catch/123456/abcdef";

//   const handleCopy = async () => {
//     await navigator.clipboard.writeText(webhookUrl);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };

//   return (
//     <div className="bg-white w-full max-w-xl border rounded-lg shadow-lg p-0 text-gray-800 font-sans">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3 border-b bg-[#f5f2ff] rounded-t-lg">
//         <div className="flex items-center gap-2 text-lg font-semibold">
//           <span>1.</span>
//           {editingTitle ? (
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               onBlur={() => setEditingTitle(false)}
//               autoFocus
//               className="border-b border-gray-400 outline-none bg-transparent"
//             />
//           ) : (
//             <div className="flex items-center gap-1">
//               <span>{title}</span>
//               <Pencil
//                 size={16}
//                 className="cursor-pointer"
//                 onClick={() => setEditingTitle(true)}
//               />
//             </div>
//           )}
//         </div>
//         <div className="flex items-center gap-3">
//           <Maximize size={18} className="cursor-pointer text-gray-500 hover:text-gray-800" />
//           <X size={18} className="cursor-pointer text-gray-500 hover:text-red-600" />
//         </div>
//       </div>

//       {/* Step Indicator */}
//       <div className="flex gap-2 px-4 py-2 text-sm border-b items-center">
//         <span className={`font-medium ${step === "setup" ? "text-black" : "text-green-600"}`}>
//           Setup {step !== "setup" && "✓"}
//         </span>
//         <span className="text-gray-400">›</span>
//         <span
//           className={`font-medium ${
//             step === "setup"
//               ? "text-gray-400"
//               : step === "listening"
//               ? "text-yellow-600"
//               : "text-green-600"
//           }`}
//         >
//           Test {step === "listening" ? "⚠️" : ""}
//         </span>
//       </div>

//       {/* Body */}
//       {step === "setup" ? (
//         <div className="p-4 space-y-6">
//           {/* App section */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               App <span className="text-red-500">*</span>
//             </label>
//             <div className="border px-3 py-2 flex items-center justify-between rounded-md">
//               <div className="flex items-center gap-3">
//                 <div className="border border-orange-500 text-orange-500 px-2 py-1 rounded text-sm">
//                   Webhooks by Zapier
//                 </div>
//                 <span className="bg-yellow-300 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">
//                   Premium
//                 </span>
//               </div>
//               <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-1 rounded">
//                 Change
//               </button>
//             </div>
//           </div>

//           {/* Trigger event section */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Trigger event <span className="text-red-500">*</span>
//             </label>
//             <select className="w-full border px-3 py-2 rounded-md">
//               <option>Catch Hook</option>
//               <option>Catch Raw Hook</option>
//               <option>Custom Hook</option>
//             </select>
//           </div>
//         </div>
//       ) : (
//         <div className="p-6 space-y-6">
//           {/* Webhook URL */}
//           <div>
//             <p className="text-sm font-medium mb-1">Your webhook URL</p>
//             <p className="text-xs text-gray-500 mb-3">
//               You’ll need to configure your application with this Zap’s webhook URL.
//             </p>
//             <div className="flex items-center border rounded-md overflow-hidden">
//               <input
//                 type="text"
//                 readOnly
//                 value={webhookUrl}
//                 className="w-full px-3 py-2 text-sm bg-gray-50 outline-none"
//               />
//               <button
//                 onClick={handleCopy}
//                 className="bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200 flex items-center gap-1"
//               >
//                 <Copy size={14} />
//                 {copied ? "Copied!" : "Copy"}
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               We’ve generated a custom webhook URL for you.
//             </p>
//           </div>

//           {/* Listening Section */}
//           <div className="flex items-center gap-2">
//             <Loader2 className="animate-spin text-violet-600" size={18} />
//             <span className="text-sm font-medium">We’re listening!</span>
//           </div>
//           <p className="text-xs text-gray-600">
//             To confirm your trigger is set up correctly, we’ll find recent requests in your account:
//             <br />
//             <span className="font-medium">Webhooks by Zapier</span>
//           </p>
//         </div>
//       )}

//       {/* Footer */}
//       <div className="px-4 py-3 border-t">
//         {step === "setup" ? (
//           <button
//             onClick={() => setStep("listening")}
//             className="bg-violet-600 hover:bg-violet-700 w-full py-2 text-white font-semibold rounded text-sm"
//           >
//             Continue
//           </button>
//         ) : (
//           <button className="bg-violet-600 hover:bg-violet-700 w-full py-2 text-white font-semibold rounded text-sm">
//             Test trigger
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { Pencil, X, Maximize } from 'lucide-react';
// import WebhookListening from "./WebHookListening"

// export default function WebhookSetup() {
//   const [title, setTitle] = useState("Catch Hook");
//   const [editingTitle, setEditingTitle] = useState(false);
//   const [trigger, setTrigger] = useState("Catch Hook");
//   const [step, setStep] = useState<"setup" | "listening">("setup");

//   return (  
//     <div className="bg-white w-full max-w-xl border rounded-lg shadow-lg p-0 text-gray-800 font-sans">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3 border-b bg-[#f5f2ff] rounded-t-lg">
//         <div className="flex items-center gap-2 text-lg font-semibold">
//           <span>1.</span>
//           {editingTitle ? (
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               onBlur={() => setEditingTitle(false)}
//               autoFocus
//               className="border-b border-gray-400 outline-none bg-transparent"
//             />
//           ) : (
//             <div className="flex items-center gap-1">
//               <span>{title}</span>
//               <Pencil size={16} className="cursor-pointer" onClick={() => setEditingTitle(true)} />
//             </div>
//           )}
//         </div>
//         <div className="flex items-center gap-3">
//           <Maximize size={18} className="cursor-pointer text-gray-500 hover:text-gray-800" />
//           <X size={18} className="cursor-pointer text-gray-500 hover:text-red-600" />
//         </div>
//       </div>

//       {/* Steps */}
//       <div className="flex gap-2 px-4 py-2 text-sm border-b items-center">
//         <span className="text-black font-medium">Setup</span>
//         <span className="text-gray-400">›</span>
//         <span className="text-green-600 font-medium">Configure ✓</span>
//         <span className="text-gray-400">›</span>
//         <span className="text-yellow-600 font-medium">Test ⚠️</span>
//       </div>

//       {/* Body */}
//       <div className="p-4 space-y-6">
//         {/* App section */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             App <span className="text-red-500">*</span>
//           </label>
//           <div className="border px-3 py-2 flex items-center justify-between rounded-md">
//             <div className="flex items-center gap-3">
//               <div className="border border-orange-500 text-orange-500 px-2 py-1 rounded text-sm">
//                 Webhooks by Zapier
//               </div>
//               <span className="bg-yellow-300 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">Premium</span>
//             </div>
//             <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-1 rounded">
//               Change
//             </button>
//           </div>
//         </div>

//         {/* Trigger event section */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Trigger event <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full border px-3 py-2 rounded-md"
//             value={trigger}
//             onChange={(e) => setTrigger(e.target.value)}
//           >
//             <option>Catch Hook</option>
//             <option>Catch Raw Hook</option>
//             <option>Custom Hook</option>
//           </select>
//         </div>

//         {/* Hook URL */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Webhook URL</label>
//           <pre className="bg-gray-100 border rounded p-2 text-sm overflow-x-auto">
//             https://hooks.zapier.com/hooks/catch/123456/abcdef
//           </pre>
//         </div>

//         {/* Listening (only if Catch Raw Hook) */}
//         {trigger === "Catch Raw Hook" && step === "listening" && (
//           <WebhookListening />
//         )}
//       </div>

//       {/* Footer */}
//       <div className="px-4 py-3 border-t">
//         <button
//           type="button"
//           onClick={() => {
//             if (trigger === "Catch Raw Hook") {
//               setStep("listening");
//             }
//           }}
//           className="bg-violet-600 hover:bg-violet-700 w-full py-2 text-white font-semibold rounded text-sm"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }
