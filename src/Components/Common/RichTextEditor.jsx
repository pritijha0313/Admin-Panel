// import React from "react";
// import { Editor } from "primereact/editor";

// const RichTextEditor = ({
//     label,
//     value,
//     onChange,
//     error,
//     height = "250px",
//     required = false,
//     className = "",
// }) => {
//     return (
//         <div className={`flex flex-col gap-2 w-full ${className}`}>

//             {label && (
//                 <label className="text-sm font-semibold text-gray-700">
//                     {label} {required && <span className="text-red-500">*</span>}
//                 </label>
//             )}

//             <div
//                 className={`border rounded-md overflow-hidden ${error ? "border-red-500" : "border-gray-300"
//                     }`}
//             >
//                 <Editor
//                     value={value}
//                     onTextChange={(e) => onChange(e.htmlValue)}
//                     style={{ height }}
//                 />
//             </div>

//             {error && (
//                 <span className="text-red-500 text-xs mt-1">{error}</span>
//             )}
//         </div>
//     );
// };

// export default RichTextEditor;



import React from "react";
import { Editor } from "primereact/editor";

const RichTextEditor = ({
    label,
    value,
    onChange,
    error,
    height = "250px",
    required = false,
    className = "",
}) => {

    return (
        <div className={`flex flex-col gap-2 w-full ${className}`}>
            {label && (
                <label className="text-sm font-semibold text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <div
                className={`border rounded-md overflow-hidden ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
            >
                <Editor
                    value={value}
                    onTextChange={(e) => onChange(e.htmlValue)}
                    style={{ height }}
                />
            </div>

            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    );
};

export default RichTextEditor;



