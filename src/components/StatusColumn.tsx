import { Task } from "@/types/task";
import { useDrop } from "react-dnd";
import type { ReactNode } from "react";

type StatusColumnProps = {
  status: Task["status"];
  children: ReactNode;
  onDrop: (id: string, status: Task["status"]) => void;
};

export default function StatusColumn({
  status,
  children,
  onDrop,
}: StatusColumnProps) {
  const [, drop] = useDrop(
    () => ({
      accept: "TASK",
      drop: (item: { id: string }) => {
        onDrop(item.id, status);
      },
    }),
    [onDrop, status],
  );

  return (
    <div
      ref={(node) => {
        drop(node);
      }}
      className="bg-gray-100 rounded-xl p-4 min-h-100"
    >
      <h2 className="text-sm font-semibold text-gray-800 mb-4">{status}</h2>

      <div className="space-y-3">{children}</div>
    </div>
  );
}
