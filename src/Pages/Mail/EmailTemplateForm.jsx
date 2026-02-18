import React, { useState } from "react";
import { Mail } from "lucide-react";
import InputField from "../../Components/Common/InputField";
import RichTextEditor from "../../Components/Common/RichTextEditor";
import sanitizeHtml from "sanitize-html";


function decodeHTML(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

export default function EmailTemplateForm() {
  const [templateName, setTemplateName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [templates, setTemplates] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!templateName) newErrors.templateName = "Template name is required";
    if (!fromEmail) newErrors.fromEmail = "From Email is required";
    if (!subject) newErrors.subject = "Subject is required";
    if (!body) newErrors.body = "Email body cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    if (editingId) {
      setTemplates((prev) =>
        prev.map((t) =>
          t.id === editingId
            ? { ...t, templateName, fromEmail, subject, body }
            : t
        )
      );
    } else {
      const newTemplate = {
        id: Date.now(),
        templateName,
        fromEmail,
        subject,
        body,
      };
      setTemplates((prev) => [newTemplate, ...prev]);
    }

    setTemplateName("");
    setFromEmail("");
    setSubject("");
    setBody("");
    setEditingId(null);
    setErrors({});
  };

  return (
    <div className="space-y-6 p-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="border rounded-xl bg-white">
          <div className="flex items-center gap-2 border-b p-4">
            <Mail className="h-5 w-5" />
            <h2 className="text-lg font-semibold">
              {editingId ? "Edit Email Template" : "Create Email Template"}
            </h2>
          </div>

          <div className="space-y-4 p-4">
            <InputField
              label="Template Name"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Welcome Email"
              error={errors.templateName}
            />

            <InputField
              label="From Email"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              placeholder="no-reply@yourapp.com"
              error={errors.fromEmail}
            />

            <InputField
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Welcome to Our Platform 🎉"
              error={errors.subject}
            />

            <div>
              <label className="block mb-2 font-medium text-sm">Email Body</label>
              <RichTextEditor value={body} onChange={setBody} />
              {errors.body && (
                <p className="text-red-500 text-xs mt-1">{errors.body}</p>
              )}
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
            >
              {editingId ? "Update Template" : "Save Email Template"}
            </button>
          </div>
        </div>

        <div className="border bg-[#F7F8FA] rounded-xl">
          <div className="border-b p-4">
            <h2 className="text-lg font-semibold">Email Preview</h2>
          </div>

          <div className="p-4">
            <div className="max-w-md mx-auto bg-white rounded-lg border shadow-sm">
              <div className="border-b px-4 py-3">
                <p className="text-gray-600 text-lg">
                  From: <span className="font-semibold">{fromEmail || "example@mail.com"}</span>
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Subject: <span className="font-semibold">{subject || "(No Subject)"}</span>
                </p>
              </div>

              <div
                className="px-4 py-4 text-sm leading-relaxed prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(
                    body
                      ? decodeHTML(body)
                      : "<p>Your email content will appear here...</p>"
                  ),
                }}
              />
            </div>
          </div>
        </div>

      </div>

      <div className="border rounded-xl p-4 bg-white">
        <h3 className="text-lg font-semibold mb-4">Saved Templates</h3>

        {templates.length === 0 ? (
          <p className="text-gray-500 text-sm">No templates saved yet.</p>
        ) : (
          <ul className="space-y-3">
            {templates.map((t) => (
              <li
                key={t.id}
                className="p-4 border rounded-lg hover:bg-gray-100 flex justify-between"
              >
                <div>
                  <h4 className="font-medium">{t.templateName}</h4>
                  <p className="text-xs text-gray-500">{t.subject}</p>
                </div>

                <button
                  onClick={() => {
                    setEditingId(t.id);
                    setTemplateName(t.templateName);
                    setFromEmail(t.fromEmail);
                    setSubject(t.subject);
                    setBody(t.body);
                  }}
                  className="text-purple-600 font-medium"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}



