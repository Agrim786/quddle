import { useState } from "react";
import {
    HiDocumentText,
    HiDocumentDuplicate,
    HiDownload
} from "react-icons/hi";

export default function DataRoom() {
    const [input, setInput] = useState("");
    const [authorized, setAuthorized] = useState(false);

    const login = async (e) => {
        e.preventDefault();

        const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ password: input }),
        });

        const data = await res.json();
        if (data.success) {
            setAuthorized(true);
        } else {
            alert("Wrong password");
        }
    };

    const downloadFile = async (fileName) => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/files/${fileName}`, {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) {
            alert("Unauthorized");
            return;
        }

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
    };


    /* ================= PASSWORD SCREEN ================= */
    if (!authorized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6">
                <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 max-w-sm w-full shadow-2xl">
                    <h1 className="text-3xl font-semibold mb-6 text-center text-white">
                        Enter Data Room
                    </h1>

                    <form onSubmit={login} className="flex flex-col gap-4">
                        <input
                            type="password"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-white/40"
                            placeholder="Password"
                        />

                        <button
                            type="submit"
                            className="bg-white text-black font-semibold py-3 rounded-xl hover:bg-white/90 transition-all w-full"
                        >
                            Unlock
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    /* ================= AUTHORIZED SCREEN ================= */
    const files = [
        {
            name: "Pitch Deck",
            filename: "PITCHDECKQUDDLE.pdf",
            type: "PDF",
            icon: <HiDocumentText className="text-4xl text-red-300" />,
            updated: "Jan 2025",
            size: "3.2 MB",
        },
        {
            name: "EIN Certificate",
            filename: "EIN_147c.pdf",
            type: "PDF",
            icon: <HiDocumentText className="text-4xl text-red-300" />,
            updated: "Jan 2025",
            size: "400 KB",
        },
        {
            name: "Articles of Organization",
            filename: "Article of Organization.pdf",
            type: "PDF",
            icon: <HiDocumentText className="text-4xl text-red-300" />,
            updated: "Jan 2025",
            size: "1.1 MB",
        },
        {
            name: "Founders Document",
            filename: "FoundersDOC.pdf",
            type: "PDF",
            icon: <HiDocumentText className="text-4xl text-red-300" />,
            updated: "Jan 2025",
            size: "2.3 MB",
        },
        {
            name: "IM Document",
            filename: "IMDOC.pdf",
            type: "PDF",
            icon: <HiDocumentText className="text-4xl text-red-300" />,
            updated: "Jan 2025",
            size: "1.0 MB",
        },
        {
            name: "Provisional Patent Application",
            filename: "Provisional Patent Application Summaries.pdf",
            type: "PDF",
            icon: <HiDocumentText className="text-4xl text-red-300" />,
            updated: "Jan 2025",
            size: "2.8 MB",
        },
        {
            name: "Quddle Technical Overview",
            filename: "Quddle TECH.pdf",
            type: "PDF",
            icon: <HiDocumentText className="text-4xl text-red-300" />,
            updated: "Jan 2025",
            size: "1.5 MB",
        },
    ];


    return (
        <div
            className="min-h-screen w-full text-white px-6 py-16"
            style={{
                background: "linear-gradient(135deg, #111827 0%, #000000 100%)",
            }}
        >
            {/* HEADER */}
            <div className="max-w-5xl mx-auto mb-12">
                <h1 className="text-5xl font-bold mb-3">
                    Quddle.ai — Data Room
                </h1>
                <p className="text-white/60 text-lg">
                    Confidential investor documents. Do not share without permission.
                </p>
            </div>

            {/* FILE GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {files.map((file) => (
                    <div
                        key={file.filename}
                        className="bg-white/10 border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-xl hover:bg-white/20 transition-all group cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            {file.icon}
                            <div>
                                <h2 className="text-xl font-semibold">{file.name}</h2>
                                <p className="text-sm text-white/50">{file.type}</p>
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-white/60">
                            <p>Updated: {file.updated}</p>
                            <p>Size: {file.size}</p>
                        </div>

                        <button
                            onClick={() => downloadFile(file.filename)}
                            className="mt-6 flex items-center gap-2 text-white font-medium bg-white/10 
             hover:bg-white/20 border border-white/20 py-2 px-4 rounded-xl 
             w-fit transition-all group-hover:scale-[1.03]"
                        >
                            <HiDownload />
                            Download
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
}
