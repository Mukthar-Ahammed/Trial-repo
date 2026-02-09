---
name: media-query-optimizer
description: Create minimal, non-overlapping media queries. Reuse existing breakpoints where possible. Use when adding or refactoring responsive styles, media queries, or breakpoint logic.
---

# Media Query Optimizer

## Instructions

1. **Reuse existing breakpoints**: 375px, 768px, 1024px, 1440px (per project rules)

2. **Keep queries minimal**:
   - One logical change per query when possible
   - Avoid redundant rules across breakpoints

3. **Avoid**:
   - Excessive breakpoints (more than 4–5)
   - Overlapping or conflicting rules
   - Duplicated selectors across queries

4. **Structure**: Prefer mobile-first (`min-width`) unless existing code uses `max-width`.
