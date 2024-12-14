# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by an incorrectly used `useEffect` hook.  The `useEffect` hook, without proper dependency array management, can lead to unexpected behavior, rendering issues, and performance problems. The solution highlights the importance of correctly defining dependencies to avoid this issue.

## Bug Description

The `bug.js` file contains a React component that uses the `useEffect` hook to increment a counter.  Because the dependency array is empty (`[]`), the effect runs on every render, causing the counter to increment continuously, resulting in an infinite loop and rendering issues.