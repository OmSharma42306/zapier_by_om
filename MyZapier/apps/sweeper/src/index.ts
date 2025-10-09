import { prismaClient as client } from "@repo/db";
import { myQueue } from "./queue";

async function runSweeper() {
  while (true) {
    // pick things from db
    const pendingRows = await client.zapRunOutbox.findMany({
      where: {
        zapRun: {
          index: 1,
        },
      },
      take: 1,
      orderBy: {
        zapRun: { index: "asc" },
      },
      include: { zapRun: true },
    });
    console.log("Pending Rows", pendingRows);

    if (pendingRows.length === 0) {
      // no index 1 rows left, wait a bit before checking again
      await new Promise((res) => setTimeout(res, 1000));
      continue;
    }

    // put things to bull mq
    for (const r of pendingRows) {
      await myQueue.add("zapProcess", {
        zapRunId: r.zapRunId,
        zapId: r.zapRun.zapId,
        index: r.zapRun.index,
      });
    }

    /*
        {
    id: '13fce27a-81e0-4105-a43e-8b4d81553232',
    zapRunId: '984b4993-0931-4f26-953c-2dbf9ad00c2a',
    zapRun: {
      id: '984b4993-0931-4f26-953c-2dbf9ad00c2a',
      zapId: '29dd7a7d-7fc7-4579-86b9-e475da367822',
      metadata: [Object],
      index: 2
    }
  },    
        */

    // delete the entries in db AFTER queueing
    await client.zapRunOutbox.deleteMany({
      where: {
        id: {
          in: pendingRows.map((r) => r.id),
        },
      },
    });
  }
}

runSweeper();
