"use client";

import { useState, useEffect } from "react";
import { getGoogleData,saveActionToDB } from "../api/api"
import Link from "next/link"


type Drive = { id: string; name: string };
type Folder = { id: string; name: string; parents?: string[] };
type Doc = { id: string; name: string; mimeType: string; parents?: string[] };

export default function GoogleDocsConfigure({index,toolsInfo,zapId}:any) {
  const [drives, setDrives] = useState<Drive[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [docs, setDocs] = useState<Doc[]>([]);

  const [selectedDrive, setSelectedDrive] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [selectedDoc, setSelectedDoc] = useState("");
  const [textToAppend, setTextToAppend] = useState("");
  const [appendNewLine, setAppendNewLine] = useState("true");
  console.log("Index of this",index);
  console.log("tool name",toolsInfo);
  // Fetch data from API
  useEffect(() => {
    async function loadGoogleData() {
      const data = await getGoogleData();
      setDrives(data.drives || []);
      setFolders(data.folders || []);
      setDocs(data.docsAndSheets || []);
    console.log(data);
    }
    
    loadGoogleData();
  }, []);

  // write an api to send action data
  async function saveAction(){
    // zapId,actionId,data,index....
    
    let actionId = toolsInfo.id;
    const data = {"text":textToAppend,"type":"Action","appName":"Google Docs","operation":"Append Text","documentId":selectedDoc};

    let actionData : any = {};
    actionData["zapId"] = zapId;
    actionData["actionId"] = actionId;
    actionData["metadata"] = data;
    actionData["index"] = index;

    console.log("Action Data : ",actionData);
    const action = await saveActionToDB(actionData);
    console.log(action);
  }

  // Filter docs based on folder if selected
  const filteredDocs = selectedFolder
    ? docs.filter((d) => d.parents?.includes(selectedFolder))
    : docs;

  // Validation
  const isFormValid = selectedDoc && textToAppend.trim() !== "";

  return (
    <div className="w-full max-w-3xl mx-auto border rounded-md shadow-sm bg-white text-sm">
      {/* Header */}
      <div className="border-b px-4 py-3 flex items-center justify-between">
        <h2 className="font-medium text-gray-700">
          2. Append Text to Document
        </h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Next step →
        </button>
      </div>

      {/* Tabs
      <div className="flex items-center space-x-6 px-4 py-2 border-b text-sm">
        <span className="text-green-600 font-medium">Setup ✓</span>
        <span className="text-yellow-600 font-medium">Configure ⚠️</span>
        <span className="text-gray-500">Test ⏱</span>
        <div className="ml-auto flex items-center space-x-4 text-blue-600">
          <button>Copilot suggestions</button>
          <button>Refresh fields</button>
          <button>Field search</button>
        </div>
      </div> */}
            {/* Google Auth Section */}
      <div className="flex items-center justify-center gap-3 mt-4 px-6">
        <img
          src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
          alt="Google Icon"
          className="w-6 h-6"
        />
        <Link
          legacyBehavior
          passHref
          href="http://localhost:3003/auth"
          className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50 transition shadow-sm"
          title="Google Auth"
        >
          <a target="_blank">
          Sign in with Google
          </a>
        </Link>
      </div>

      
      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Drive */}
        <div>
          <label className="block mb-1 text-gray-700">Drive</label>
          <select
            className="w-full border rounded p-2"
            value={selectedDrive}
            onChange={(e) => setSelectedDrive(e.target.value)}
          >
            <option value="">Select Drive</option>
            {drives.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name || d.id}
              </option>
            ))}
            <option>My Google Drive</option>
          </select>
        </div>

        {/* Folder */}
        <div>
          <label className="block mb-1 text-gray-700">Folder</label>
          <select
            className="w-full border rounded p-2"
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
          >
            <option value="">root</option>
            {folders.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>

        {/* Document */}
        <div>
          <label className="block mb-1 text-gray-700">
            Document Name <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border rounded p-2"
            value={selectedDoc}
            onChange={(e) => setSelectedDoc(e.target.value)}
          >
            <option value="">Select Document</option>
            {filteredDocs
              .filter(
                (doc) => doc.mimeType === "application/vnd.google-apps.document"
              )
              .map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name}
                </option>
              ))}
          </select>
          <button className="mt-2 px-3 py-1 border rounded-md text-sm text-gray-700 hover:bg-gray-100">
            + Add search step
          </button>
        </div>

        {/* Text to Append */}
        <div>
          <label className="block mb-1 text-gray-700">
            Text to Append <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full border rounded p-2"
            placeholder="// for field mapping"
            value={textToAppend}
            onChange={(e) => setTextToAppend(e.target.value)}
          />
        </div>

        {/* Append Text on New Line */}
        <div>
          <label className="block mb-1 text-gray-700">
            Append Text on New Line?
          </label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="newLine"
                value="true"
                checked={appendNewLine === "true"}
                onChange={() => setAppendNewLine("true")}
              />{" "}
              True
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="newLine"
                value="false"
                checked={appendNewLine === "false"}
                onChange={() => setAppendNewLine("false")}
              />{" "}
              False
            </label>
          </div>
        </div>
         <div>
          
          <button onClick={saveAction}>Save Data</button>
          </div>
      </div>

      {/* Footer
      <div className="px-4 py-3 border-t">
        <button
          disabled={!isFormValid}
          className={`w-full py-2 rounded-md ${
            isFormValid
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isFormValid ? "Continue" : "To continue, finish required fields"}
        </button> */}
      {/* </div> */}
    </div>
  );
}
