'use client'
import React, { useState } from "react";
import Layout from "../Components/Layout";
import Link from "next/link";
import useGetLocations from "../hooks/useGetLocations";
import { ImSearch } from "react-icons/im"; 

const SystemlistsPage = () => {
  const { locations } = useGetLocations();
  const [searchQuery, setSearchQuery] = useState(""); 

  const filteredLocations = locations.filter((location) =>
    location.region_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Layout>
        <div className="flex justify-between items-center mb-20">
          <h1 className="text-4xl text-green font-bold  mt-10 " style={{marginLeft:300}}>
            SYSTEM LISTS
          </h1>
          {/* Search Bar */}
          <div className="relative mr-40 mt-10" style={{marginRight:300}}>
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-10 pr-20 border rounded-lg border-black font-light focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ImSearch className="text-darkGreen text-2xl" />
            </div>
          </div>
          {/* End Search Bar */}
        </div>
        <div className="w-full flex justify-center mt-6">
          <table className="w-table-auto rounded-lg overflow-hidden shadow-lg">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray">
                <th className="px-6 py-3 pl-50 text-left text-lg text-green tracking-wider">
                  System ID
                </th>
                <th className="px-6 py-3 pl-60 text-left text-lg text-green tracking-wider">
                  Location
                </th>
                <th className="px-6 pl-80 py-3 text-left text-lg text-green tracking-wider">
                  Installation Date
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {Array.isArray(filteredLocations) && filteredLocations.length > 0 ? (
                filteredLocations.map((location) => (
                  <tr
                    key={location.id}
                    className="bg-gray-100 hover:bg-gray transition duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-50">
                      <Link href={`systemData`}>{location.id}</Link>
                    </td>
                    <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-60">
                      {location.region_name}
                    </td>
                    <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-80 text-green">
                      {location.installation_date}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-4">
                    No locations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default SystemlistsPage;
