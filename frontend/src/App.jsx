import React, { useState } from "react";
import axios from "axios";
import FilterBar from "./components/FilterBar";
import SchoolTable from "./components/SchoolTable";

function Spinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-12 h-12 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [district, setDistrict] = useState("");
  const [stream, setStream] = useState("");
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!district || !stream) {
      alert("Please enter both district and stream");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/schools/${encodeURIComponent(district)}/${encodeURIComponent(stream)}`
      );
      setSchools(res.data || []);
    } catch (err) {
      console.error(err);
      alert("Error fetching data from backend");
      setSchools([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-sky-700">
            Rajasthan RBSE School Ranker
          </h1>
          <p className="text-center text-sm text-gray-600 mt-1">Search top performing schools by district and stream</p>
        </header>

        <FilterBar
          district={district}
          setDistrict={setDistrict}
          stream={stream}
          setStream={setStream}
          handleSearch={handleSearch}
        />

        <main>
          {loading ? (
            <Spinner />
          ) : (
            <SchoolTable schools={schools} stream={stream} />
          )}
        </main>

        <footer className="text-center text-xs text-gray-500 mt-8">Data sourced from RBSE records. Built with care.</footer>
      </div>
    </div>
  );
}
