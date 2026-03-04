"use client";

import Header from "@/components/ui/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { LuLoaderCircle } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const SUBJECT_TAGS = [
  { name: "Math" },
  { name: "Science" },
  { name: "History" },
  { name: "Literature" },
  { name: "Chemistry" },
  { name: "Physics" },
  { name: "Biology" },
  { name: "Other" },
];

export default function UploadNote() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [selectedTag, setSelectedTag] = useState("Math");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
      if (!title) {
        setTitle(files[0].name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
      if (!title) {
        setTitle(files[0].name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  const formatFileSize = (bytes: number) => {
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile || !title) return;

    setIsUploading(true);

    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);

      setTimeout(() => {
        router.push("/notes");
      }, 1500);
    }, 2000);
  };

  if (uploadSuccess) {
    return (
      <div className="min-h-full flex items-center justify-center p-8 text-gray-900 dark:text-gray-100">
        <div className="text-center space-y-6">
          <div className="inline-flex p-4 rounded-full bg-green-50 dark:bg-green-900/30">
            <FaCheckCircle className="size-16 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Upload Successful!
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Your note has been uploaded and is being processed...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-900 dark:text-gray-100 transition-colors">
      <Header
        title="Upload Note"
        subtitle="Upload your study materials to generate AI summaries and quizzes"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Upload */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-colors">
          <label className="block text-sm font-medium mb-4">
            Upload File
          </label>

          {!uploadedFile ? (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setIsDragging(false);
              }}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                isDragging
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700/40"
              }`}
            >
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileSelect}
                accept=".pdf,.doc,.docx,.txt,.md"
              />

              <div className="space-y-4">
                <div className="inline-flex p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/40">
                  <MdOutlineFileUpload className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-lg font-medium">
                  Drop your file here, or{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    browse
                  </span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Supports PDF, DOC, DOCX, TXT, and MD files
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl transition-colors">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <FaRegFileLines className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">
                  {uploadedFile.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatFileSize(uploadedFile.size)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setUploadedFile(null)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <RxCross2 className="size-5 text-gray-500 dark:text-gray-300" />
              </button>
            </div>
          )}
        </div>

        {/* Note Details */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm space-y-6 transition-colors">
          <div>
            <label className="block text-sm font-medium mb-2">
              Note Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              Subject
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SUBJECT_TAGS.map((tag) => (
                <button
                  key={tag.name}
                  type="button"
                  onClick={() => setSelectedTag(tag.name)}
                  className={`px-4 py-2.5 rounded-lg border-2 text-sm font-medium transition-all ${
                    selectedTag === tag.name
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-colors">
          <label className="block text-sm font-medium mb-2">
            Description (Optional)
          </label>
          <textarea
            rows={4}
            placeholder="Add any additional context or notes..."
            className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-colors resize-none"
          />
        </div>

        {/* AI Processing Options */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-colors">
          <label className="block text-sm font-medium mb-4">
            AI Processing Options
          </label>

          <div className="space-y-3">
            {[
              "Generate AI Summary",
              "Create Practice Quiz",
              "Extract Key Concepts",
            ].map((label, i) => (
              <label
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked={i < 2}
                  className="size-4 accent-blue-600 dark:accent-blue-500"
                />
                <div>
                  <p className="font-medium text-sm">{label}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.push("/notes")}
            className="flex-1 px-6 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!uploadedFile || !title || isUploading}
            className="flex-1 flex gap-2 items-center justify-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-lg rounded-md py-3 px-2 transition-colors disabled:opacity-50"
          >
            {isUploading ? (
              <>
                <LuLoaderCircle className="size-5 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <MdOutlineFileUpload className="size-5" />
                Upload Note
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}