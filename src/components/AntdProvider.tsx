"use client";

import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const antdTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#6366f1",
    colorInfo: "#22d3ee",
    colorBgBase: "#050816",
    colorBgContainer: "#0f1320",
    colorBgElevated: "#131826",
    colorBorder: "#1e2534",
    colorText: "#e2e8f0",
    colorTextSecondary: "#94a3b8",
    borderRadius: 8,
    fontFamily: "Inter, sans-serif",
  },
};

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
