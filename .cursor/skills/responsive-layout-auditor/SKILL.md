---
name: responsive-layout-auditor
description: Identify layout-breaking CSS patterns and recommend minimal fixes using flex, grid, and max-width containment. Use when auditing responsive layouts, fixing overflow/clipping, or reviewing CSS for layout issues.
---

# Responsive Layout Auditor

## Instructions

1. **Identify layout-breaking patterns**:
   - Fixed widths that cause overflow
   - Missing containment (overflow, min-width issues)
   - Flex/grid items that don't wrap or shrink

2. **Recommend minimal fixes**:
   - Prefer `flex` with `flex-wrap`, `min-width: 0`, or `overflow: hidden`
   - Use `grid` with `minmax(0, 1fr)` for fluid columns
   - Apply `max-width: 100%` for images/containers

3. **Constraints**:
   - Avoid redesigns; preserve visual intent
   - No framework injection (Tailwind, Bootstrap)
