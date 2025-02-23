"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface WorkspaceLayoutProps {
  children: ReactNode;
}

const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ children }) => {

  return (
    <div className="flex h-screen">
    <Navbar nome="João" sobrenome="Silva" />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex flex-1 p-6 overflow-auto bg-gray-100"
        style={{ paddingTop: 73 }}
        >
          <div className="flex-1">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
