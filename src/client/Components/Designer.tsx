import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, Outlet } from 'react-router-dom';
import AttributeList from "./Attributes/AttributeList";
import TestDesignList from "./TestDesignList/TestDesignList";
import ComibinationsTable from "./Combinations/CombinationsTable";
import "../Less/app.less";

export default function Designer() {
  return (
    <Routes>
      <Route path="/" element={<TestDesignList />} />
      <Route path="testdesigns" element={<div><Outlet /></div>}>
        <Route path=":designId" element={<AttributeList />} />
      </Route>
      <Route path="combinations" element={<div><Outlet /></div>}>
        <Route path=":designId" element={<ComibinationsTable />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
