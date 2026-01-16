import { useState } from "react";
import WebhookListening from "./WebHookListening";
import GoogleDocsConfigure from "./GoogleDocsConfigure";
import {saveTriggerToDB} from "@/api/api"
import GmailConfigure from "./GmailConfigure";

interface SetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: { id: string; name: string; icon: string } | null;
  cellIndex?: number | null;  
  zapId?: string | null;
  onSave: (config: Record<string, any>) => void;
}

export default function SetupModal({
  isOpen,
  onClose,
  tool,
  cellIndex,
  zapId,
  onSave,
}: SetupModalProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [webhookSet, setWebHookSet] = useState(false);
  const [googleDocsEvent,setGoogleDocsEvent] = useState('');
  const [gmailEvent,setGmailEvent] = useState('');
  console.log(webhookSet);
  if (!isOpen || !tool) return null;
  console.log(tool);
  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  console.log(`index of cell : ${cellIndex} : ${tool.name}`,);

  const handleSave = () => {
    
    onSave(formData);
    onClose();
  };

  // function to save trigger data
  const handleSaveTriggerData = async () => {
    const triggerId = "218e06d7-bf14-4334-9e12-a0205b209314";
    
    if(!zapId) return;
    
    const response = await saveTriggerToDB(zapId,triggerId);
    console.log('trigger response',response);
    alert(response.msg);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-[600px] p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <div className="flex items-center gap-2">
            <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
            <h2 className="text-lg font-bold">{tool.name} Setup</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Example form (different per tool) */}
        {tool.name === "WebHook" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold">Trigger Event</label>
              <select
                className="w-full border rounded p-2"
                onChange={(e) => {
                  handleChange("triggerEvent", e.target.value);
                  console.log(e.target.value);
                  if (e.target.value === "catchRawHook") {
                    console.log(e.target.value);
                    setWebHookSet(true);
                  }
                }}
              >
                <option value="catchRawHook">Catch Raw Hook</option>
                <option value="catchHook">Catch Hook</option>
              </select>
              {webhookSet && (
                <div className="mt-4">
                  <WebhookListening />
                </div>
              )}
              {webhookSet ? <>
              <button onClick={handleSaveTriggerData}><h1>Save Trigger</h1></button>
              </>: ""}
            </div>
          </div>
        )}

        {tool.name === "Google Docs" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold">Google Docs Events</label>
              <select
                className="w-full border rounded p-2"
                onChange={(e) => {
                  handleChange("triggerEvent", e.target.value);
                  console.log(e.target.value);
                  if(e.target.value){
                    setGoogleDocsEvent("appendtodocs")
                  }
                }}
              >
                <option value="appendtodocs">Append Text To Docs</option>
                <option value="appendtodocs">Append </option>
                {/* <option value="catchHook">Catch Hook</option> */}
              </select>
              {googleDocsEvent&& (
                <div className="mt-4">
                  <h1>google docs : {cellIndex}</h1>
                  <GoogleDocsConfigure index={cellIndex} toolsInfo={tool} zapId= {zapId} />
                </div>
              )}
            </div>
          </div>
          
        )}

        {tool.name === "Gmail" && (
  <div className="space-y-4">
    <div>
      <label className="text-sm font-semibold">Gmail Events</label>

      <select
        className="w-full border rounded p-2"
        onChange={(e) => {
          handleChange("actionEvent", e.target.value);
          console.log(e.target.value);

          if (e.target.value) {
            setGmailEvent(e.target.value);
          }
        }}
      >
        <option value="">Select an event</option>
        <option value="sendEmail">Send Email</option>
      </select>

      {gmailEvent && (
        <div className="mt-4">
          <h1>gmail : {cellIndex}</h1>
          <GmailConfigure index={cellIndex} toolsInfo={tool} zapId={zapId} />
        </div>
      )} 
    </div>
  </div>
)}

        {/* Save Button */}
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded border">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
