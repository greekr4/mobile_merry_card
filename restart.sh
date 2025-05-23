#!/bin/bash

echo "🔍 Checking for process using port 3333..."
PID=$(lsof -ti tcp:3333)

if [ -n "$PID" ]; then
  echo "🛑 Killing process on port 3333 (PID: $PID)..."
  kill -9 $PID
else
  echo "✅ No process found on port 3333."
fi

echo "🚀 Restarting server on port 3333..."
nohup npm run start -p 3333 > output.log 2>&1 &

echo "✅ Server restarted. Check output.log for logs."
