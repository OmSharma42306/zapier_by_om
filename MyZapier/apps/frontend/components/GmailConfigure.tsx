"use client";

import { useState } from "react";
import { saveActionToDB } from "../api/api";
import Link from "next/link";

export default function GmailConfigure({ index, toolsInfo, zapId }: any) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [addSignature, setAddSignature] = useState("true");
  const [labelId, setLabelId] = useState("");

  console.log("Index of this", index);
  console.log("tool name", toolsInfo);

  async function saveAction() {
    let actionId = toolsInfo.id;

    const data = {
      to,
      subject,
      body,
      addSignature: addSignature === "true",
      labelId,
      type: "Action",
      appName: "Gmail",
      operation: "Send Email",
    };

    let actionData: any = {};
    actionData["zapId"] = zapId;
    actionData["actionId"] = actionId;
    actionData["metadata"] = data;
    actionData["index"] = index;

    console.log("Action Data : ", actionData);
    const action = await saveActionToDB(actionData);
    console.log(action);
  }

  const isFormValid = to.trim() !== "" && subject.trim() !== "" && body.trim() !== "";

  return (
    <div className="w-full max-w-3xl mx-auto border rounded-md shadow-sm bg-white text-sm">
      {/* Header */}
      <div className="border-b px-4 py-3 flex items-center justify-between">
        <h2 className="font-medium text-gray-700">2. Send Email</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Next step →
        </button>
      </div>

      {/* Google Auth Section */}
      <div className="flex items-center justify-center gap-3 mt-4 px-6">
        <img
          src="https://img.icons8.com/?size=100&id=37246&format=png&color=000000"
          alt="Gmail Icon"
          className="w-6 h-6"
        />
        <Link
          legacyBehavior
          passHref
          href="http://localhost:3003/auth"
          className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50 transition shadow-sm"
          title="Google Auth"
        >
          <a target="_blank">Sign in with Google</a>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* To */}
        <div>
          <label className="block mb-1 text-gray-700">
            To <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border rounded p-2"
            placeholder="example@gmail.com"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 text-gray-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Enter email subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Body */}
        <div>
          <label className="block mb-1 text-gray-700">
            Body <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full border rounded p-2 min-h-[120px]"
            placeholder="// for field mapping"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* Add Signature */}
        <div>
          <label className="block mb-1 text-gray-700">Add Signature?</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="signature"
                value="true"
                checked={addSignature === "true"}
                onChange={() => setAddSignature("true")}
              />
              True
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="signature"
                value="false"
                checked={addSignature === "false"}
                onChange={() => setAddSignature("false")}
              />
              False
            </label>
          </div>
        </div>

        {/* Label ID (optional) */}
        <div>
          <label className="block mb-1 text-gray-700">Label ID (optional)</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="ex: INBOX, STARRED, etc..."
            value={labelId}
            onChange={(e) => setLabelId(e.target.value)}
          />
        </div>

        {/* Save */}
        <div>
          <button
            onClick={saveAction}
            disabled={!isFormValid}
            className={`px-4 py-2 rounded-md text-sm ${
              isFormValid
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
}
