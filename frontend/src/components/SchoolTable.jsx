import React from "react";

const SchoolTable = ({ schools, stream }) => {
  if (!schools || schools.length === 0)
    return <p className="text-center text-gray-600 mt-6">No schools found.</p>;

  return (
    <div className="overflow-x-auto mt-6">
        <div className="mt-6">
          {/* Table for larger screens */}
          <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="min-w-full table-auto">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">School Name</th>
            <th className="px-4 py-2">District</th>
            <th className="px-4 py-2">Pass %</th>
            <th className="px-4 py-2">1st Div</th>
            <th className="px-4 py-2">2nd Div</th>
            <th className="px-4 py-2">3rd Div</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((s, i) => (
            <tr key={s.schoolCode + i} className="text-center border-b hover:bg-gray-50">
              <td className="py-2">{i + 1}</td>
              <td className="py-2">{s.schoolName}</td>
              <td className="py-2">{s.district}</td>
              <td className="py-2">{s.streams?.[stream]?.passPercentage ?? "—"}</td>
              <td className="py-2">{s.streams?.[stream]?.divisions?.first ?? "—"}</td>
              <td className="py-2">{s.streams?.[stream]?.divisions?.second ?? "—"}</td>
              <td className="py-2">{s.streams?.[stream]?.divisions?.third ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>

          {/* Card list for small screens */}
          <div className="md:hidden flex flex-col gap-3">
            {schools.map((s, i) => (
              <div key={s.schoolCode + i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <div className="text-sm text-sky-700 font-bold">#{i + 1} — {s.schoolName}</div>
                    <div className="text-xs text-gray-500">{s.district}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{s.streams?.[stream]?.passPercentage ?? '—'}%</div>
                    <div className="text-xs text-gray-500">Pass %</div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-gray-600">
                  <div className="text-center">
                    <div className="font-semibold">{s.streams?.[stream]?.divisions?.first ?? '—'}</div>
                    <div className="text-gray-400">1st Div</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{s.streams?.[stream]?.divisions?.second ?? '—'}</div>
                    <div className="text-gray-400">2nd Div</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{s.streams?.[stream]?.divisions?.third ?? '—'}</div>
                    <div className="text-gray-400">3rd Div</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default SchoolTable;
