"use client";

export function DashboardZapsLoader() {
  return (
    <div className="flex justify-center">
      <div className="p-8 max-w-screen-lg w-full">
        {/* Table Header Skeleton */}
        <div className="flex pb-3 border-b">
          <div className="flex-1">
            <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="h-4 w-16 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>

        {/* Rows Skeleton */}
        <div className="mt-2 space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center border-b border-t py-4"
            >
              <div className="flex-1">
                <div className="h-4 w-[70%] rounded bg-gray-200 animate-pulse" />
              </div>

              <div className="flex-1">
                <div className="h-4 w-28 rounded bg-gray-200 animate-pulse" />
              </div>

              <div className="flex-1">
                <div className="h-4 w-20 rounded bg-gray-200 animate-pulse" />
              </div>

              <div className="flex-1">
                <div className="h-9 w-20 rounded-md bg-gray-200 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom subtle loading hint */}
        <div className="flex items-center gap-2 pt-4 text-sm text-gray-500">
          <span className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" />
          Loading your workflows...
        </div>
      </div>
    </div>
  );
}
